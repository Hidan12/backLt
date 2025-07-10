import axios from 'axios';

const VERIFICATION_ENDPOINT = 'https://av.procesosrecuperacion.online/api/verificar-acceso';

export const verifyDomainAccess = async (domain) => {
  try {
    const response = await axios.get(VERIFICATION_ENDPOINT, {
      params: { dominio: domain },
      timeout: 5000
    });
    
    return response.data === 'si';
  } catch (error) {
    console.error('Error verifying domain access:', error.message);
    return false;
  }
};

export const domainVerificationMiddleware = async (req, res, next) => {
  const domain = req.headers['x-forwarded-host'] || req.headers['x-original-host'];
  
  console.log('🔍 User domain verification for:', domain);
  console.log('🏠 Application host:', req.get('host'));
  console.log('📡 Sending request to:', `${VERIFICATION_ENDPOINT}?dominio=${domain}`);
  
  if (!domain) {
    return res.status(400).json({ error: 'User domain not found in request headers' });
  }

  const isAuthorized = await verifyDomainAccess(domain);
  
  console.log('✅ Domain authorization result:', isAuthorized ? 'ALLOWED' : 'DENIED');
  
  if (!isAuthorized) {
    return res.status(403).json({ error: 'Domain access denied' });
  }
  
  next();
};