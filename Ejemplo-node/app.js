//app.js   o Server.js archivos con este nombre por convencion
//se refiere a creacion de server con express
import express from 'express';

const app = express() //Creando el servidor
const port = 3400

/*
Metodos Http
get -> obtener
post -> 
put
delete
patch
options
*/


//que es handler
app.get('/', (req, res) => {
    res.send('Hello Word')
})

//:id significa que es un parmetro que se envia por ruta
app.get('/getId/:id', (req, res) => {
    //id se esta referenciando a si mismo ? y params va por defecto ?
    //let id = req.params.id
    let { id } = req.params //Desestructuracion
    let complexId = id + 1;
    res.send(`product with id: ${complexId}`)
})

//si el parametro tiene ? es opcional
app.get('/user/:id/:phone?', (req, res) => {
    // ?? nullish
    let phone = req.params.phone ?? 'Not configured'
    res.send(`User Id is ${req.params.id}, with phone ${phone}`)
})


//Funcion anonima de tipo flecha
app.listen(port, () => console.log(`Server is running in port ${port}`))//Strings templates - String literal