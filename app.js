//ACTIVAR SERVIDOR Y RUTAS.
// 1_requerir express, herramienta de terceros.(se instala)
const express = require ("express");
// 2_asignarlo a una variable app. express(activo)
const app = express();
// 3_requerir path. herramienta nativa de node js (instalada con node)
const path = require("path");
// 4_definir ruta estatita para express sepa donde ir a buscar.
app.use(express.static("public"));
// 5_Definir la escucha del servidor
app.listen(8000,console.log("Iniciando el Servidor Web en el puerto 8000"))
// 6_require y response con get. rutas de archivos
app.get("/",(req,res)=>{res.sendFile(path.resolve(__dirname,"views/home.html")) })