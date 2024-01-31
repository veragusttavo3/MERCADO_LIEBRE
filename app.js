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
app.listen(8000,()=>console.log(`http://localhost:8000`))
// 6_require y response con get. rutas de archivos (home)
app.get("/",(req,res)=>{res.sendFile(path.resolve(__dirname,"views/home.html")) })
// 7_ruta home
app.get("/home",(req,res)=>{res.sendFile(path.resolve(__dirname,"views/home.html"))})
// 8_ruta login
app.get("/register",(req,res)=>{res.sendFile(path.resolve(__dirname,"views/register.html"))})
// 9_ruta register
app.get("/login",(req,res)=>{res.sendFile(path.resolve(__dirname,"views/login.html"))})
// 7_ruta home
//app.get("/home",(req,res)=>{res.sendFile(path.resolve(__dirname,"views/home.html"))})