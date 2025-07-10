import { log } from "console"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const infoCity = (req,res)=>{
  const ruta = path.join(__dirname, "..", "..", "capturas", "OTHER", "captura.png")
  res.sendFile(ruta)
}

export {infoCity}