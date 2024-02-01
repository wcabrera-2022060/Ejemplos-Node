//Importaciones / Exportaciones de Módulos

/*
    1.CommonJS -> + proyectos / Nacio con NodeJS (Antes de 2016)
    2.ESModules -> - Proyectos / +rapido (Desoues 2016)
    verificar compatibilidad de las librerias
*/

//Common JS
const http = require('http');
//req, res estos se pueden cambiar pero por estandarizacion es asi
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })//Metadatos
    res.end('Hola Mundo, 2')
}).listen(3000)

console.log('El servidor esta corriendo')
//MERN
/*
Mongo
Express
React
Node
*/