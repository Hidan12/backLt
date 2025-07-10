import 'dotenv/config.js';
import express from "express";
import cors from "cors"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from 'url'
import routesIndex from "./router/index.js"
import { domainVerificationMiddleware } from './utils/domainVerification.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = express() 
const PORT = process.env.PORT

const ready = () => console.log("server ready in port: ", PORT)
server.set('trust proxy', true)
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(morgan('dev'))
server.use(domainVerificationMiddleware)

server.use("/martin/api", routesIndex)

// Servir archivos estáticos del frontend
server.use(express.static(path.join(__dirname, 'public')))

// Manejar rutas del frontend (SPA) - fallback para rutas no API
server.use((req, res, next) => {
  if (req.url.startsWith('/martin/api')) {
    return next()
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

server.listen(PORT, '0.0.0.0', ready)

