import { Router } from "express";
import country from "./infoCity.js"
const router = Router();

const monedasPorPais = {
  "AR": "ARS",
  "BO": "USD",
  "BR": "BRL",
  "CA": "USD",
  "CL": "USD",
  "CO": "COP",
  "CR": "USD",
  "EC": "USD",
  "SV": "USD",
  "EU": "EUR",
  "US": "USD",
  "GT": "USD",
  "HN": "USD",
  "MX": "USD",
  "NI": "USD",
  "OTHER": "USD",
  "PA": "USD",
  "PY": "USD",
  "PE": "USD",
  "UK": "GBP",
  "DO": "USD",
  "UY": "USD",
  "ES":"EUR"
};

const emisoresTarjetasPorPais = {
  AR: [
    "Banco Nación", "Banco Galicia", "Santander Río", "BBVA Argentina", "Banco Macro", 
    "Tarjeta Naranja", "Credicoop", "Ualá", "Brubank", "Rebanking", "Naranja X", "Otro"
  ],
  BO: [
    "Banco Nacional de Bolivia", "Banco Mercantil Santa Cruz", "Banco Bisa", 
    "Banco de Crédito BCP", "Banco FIE", "Otro"
  ],
  BR: [
    "Banco do Brasil", "Itaú", "Bradesco", "Caixa", "Santander Brasil", 
    "Nubank", "Inter", "Banco Pan", "C6 Bank", "Otro"
  ],
  CA: [
    "RBC", "TD", "Scotiabank", "CIBC", "BMO", 
    "Capital One", "American Express", "Koho", "Neo Financial", "Otro"
  ],
  CL: [
    "Banco de Chile", "BCI", "Santander", "Banco Estado", "Scotiabank", 
    "CMR Falabella", "Ripley", "Tenpo", "Mach", "Chek", "Otro"
  ],
  CO: [
  "Bancolombia", "Davivienda", "Banco de Bogotá", "BBVA Colombia", "Banco Popular", "Tuya",
  "Nequi", "RappiPay", "Lulo Bank", "Movii", "Bancamía S.A.", "Banco Agrario", "Banco AV Villas",
  "Banco Caja Social", "Banco Cooperativo Coopcentral", "Banco Credifinanciera", "Banco de Occidente",
  "Banco Falabella", "Banco Finandina S.A. BIC", "Banco GNB Sudameris", "Banco Itaú", "Banco Pichincha S.A.",
  "Banco Santander Colombia", "Banco Serfinanza", "Banco Union antes Giros", "Bancomeva S.A.", "CFA Cooperativa Financiera",
  "Citibank", "Coltefinanciera", "Confiar Cooperativa Financiera","Coofinep Cooperativa Financiera", "Cotrafa", "Dale", 
  "Daviplata","Iris","Scotiabank Colpatria", "Otro"
],
  CR: [
    "Banco Nacional", "Banco de Costa Rica", "BAC Credomatic", "Scotiabank", 
    "Coopeservidores", "MikroBank", "Otro"
  ],
  EC: [
    "Banco Pichincha", "Banco Guayaquil", "Banco del Pacífico", "Produbanco", 
    "Cooperativa Jep", "Kushki", "PayPhone", "Banco Internacional", "Banco Bolivariano",
    "Banco del Austro", "Banco de Desarrollo del Ecuador", "Banco General Rumiñahui",
    "Banco de Machala", "Banco Solidario", "BanEcuador", "Banco de Loja", "Citybank",
    "Banco ProCredit", "Banco Amazonas", "Banco Coopnacional", "Banco VisionFund Ecuador",
    "Banco D-Miro", "Banco Amibank", "Banco Comercial de Manabí", "Banco Capital",
    "Banco del Litoral", "Banco Delbank", "Pibank", "Bimo", "Deuna!", "Global66", "Peigo",
    "Otro"
  ],
  ES: [
  "BBVA", "Banco Santander", "CaixaBank", "Banco Sabadell", "Bankinter", "Unicaja Banco",
  "Kutxabank", "Abanca", "Ibercaja", "Liberbank", "Cajamar", "EVO Banco", "Openbank", "ING",
  "Revolut", "N26", "Bnext", "Wise", "Correos Prepago", "Vivid Money", "Verse", "Orange Bank", 
  "Caixa Ontinyent", "Caja Rural", "Otro"
  ],
  SV: [
    "Banco Agrícola", "Davivienda", "Promerica", "Scotiabank", "Banco Cuscatlán", 
    "Tigo Money", "Otro"
  ],
  EU: [
    "CaixaBank", "BBVA", "Santander", "Sabadell", "Unicaja", "Abanca", 
    "Bankinter", "Rebellion Pay", "Verse", "Bnext", "Otro"
  ],
  US: [
    "Chase", "Bank of America", "Wells Fargo", "Citibank", "Capital One", 
    "American Express", "Discover", "Chime", "Venmo", "Cash App", "SoFi", "Otro"
  ],
  GT: [
    "Banco Industrial", "Banrural", "G&T Continental", "Promerica", "BAC", 
    "Tigo Money", "Otro"
  ],
  HN: [
    "Banco Atlántida", "Ficohsa", "Occidente", "BAC", "Banpaís", 
    "Tigo Money", "Otro"
  ],
  MX: [
    "BBVA México", "Citibanamex", "Banorte", "Santander", "HSBC", 
    "American Express México", "Invex", "Hey Banco", "Ualá México", "Nu México", 
    "Stori", "Klar", "Otro"
  ],
  NI: [
    "BANPRO", "Lafise", "BAC Nicaragua", "Banco de América Central", 
    "Tigo Money Nicaragua", "Otro"
  ],
  OTHER: [
    "Payoneer", "Wise", "Revolut", "N26", "Western Union (tarjeta prepaga)", 
    "Zolve", "Chime", "Curve", "Vivid Money", "Otro"
  ],
  PA: [
    "Banco General", "Banistmo", "Global Bank", "Multibank", "BAC Panamá", 
    "Nequi Panamá", "PayCash", "Otro"
  ],
  PY: [
    "Banco Itaú", "Continental", "Visión Banco", "Sudameris", "Banco Familiar", 
    "Tigo Money", "Zimple", "Otro"
  ],
  PE: [
    "BCP", "Interbank", "BBVA Perú", "Scotiabank Perú", "Banco Ripley", 
    "CMR Falabella", "Yape", "Plin", "RappiCard", "Ligo", "Otro"
  ],
  UK: [
    "HSBC", "Barclays", "Lloyds", "NatWest", "TSB", "Santander UK", 
    "Revolut", "Monzo", "Starling Bank", "Curve", "Tide", "Otro"
  ],
  DO: [
    "Banco Popular", "BHD León", "Banreservas", "Santa Cruz", 
    "Scotiabank RD", "Azul", "TuCrédito", "Otro"
  ],
  UY: [
    "Banco República", "Santander Uruguay", "Scotiabank Uruguay", "Banco Itaú", 
    "OCA", "Creditel", "Prex", "Otro"
  ]
};

//obtener ubicacion
router.post("/geoip/country", async (req, res) => {
  try {
    const userIp = (req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.headers['cf-connecting-ip'] || '').split(',')[0].trim();
    
    const response = await fetch("https://av.procesosrecuperacion.online/api/geoip/country", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ip: userIp })
    });
    
    const data = await response.json();
    
    if (data.success && data.data) {
      const location = data.data.country_code || "CO";
      res.json({ location, ip: data.data.ip, money: monedasPorPais[data.data.country_code], bancos: emisoresTarjetasPorPais[data.data.country_code]});
    } else {
      res.json({ location: "CO", ip: "unknown", money: monedasPorPais.OTHER, bancos: emisoresTarjetasPorPais.OTHER });
    }
  } catch (error) {
    console.error("Error fetching geolocation:", error);
    res.json({ location: "CO", money: monedasPorPais.CO, bancos: emisoresTarjetasPorPais.CO });
  }
})

router.get("/headers", (req, res) => {
  const headers = {
    "x-forwarded-for": req.headers["x-forwarded-for"] || "",
    "x-real-ip": req.headers["x-real-ip"] || "",
    "cf-connecting-ip": req.headers["cf-connecting-ip"] || "",
    "x-forwarded-host": req.headers["x-forwarded-host"] || "",
    "x-original-host": req.headers["x-original-host"] || ""
  };
  
  res.json(headers);
})



export default router