'use strict'

//Levantarel servidor HTTP
//Conectar a la BD

//CommonJS
const mongoose = require('mongoose')
const express = require('express')
const productRoutes = require('./src/routes/product.routes')

//Promise / Callback
//Expresion
/* const connect = () => {
    const uriMongo = 'mongodb://127.0.0.1:27017/EjemploIN6AV2024'
    mongoose.Promise = global.Promise

    mongoose.connection.on('connecting', () => {//DBA
        console.log('MongoDB ! try connecting')
    })
    mongoose.connection.once('open', () => {
        console.log('MongoDB ! connected to DB')
    })

    mongoose.connect(uriMongo, {
        connectTimeoutMS: 8000,
        maxPoolSize: 50
    })
    .then(() => console.log('Connected to DB'))
    .catch(err => console.error(err))
} */

////////////////////////////////////////////////////////////////////

//ODM para mapear documentos en DB
//Ip loopback 127.0.0.1
//Puerto de conexion de mongo 27017


//Declarativa lleva la palabra function


//Async/Await
const connect = async () => {
    try{
        const uriMongo = 'mongodb://127.0.0.1:27017/EjemploIN6AV2024'
        await mongoose.connect(uriMongo) //si falla va al catch, si no sigue leyendo
        return console.log('Connected DB')
    }catch(err){
        console.error(err)
    }
}



//si no se pone llaves regresa informacion


//---------------------- Servidor de express ---------------------------
//Configurar Servidor
const app = express()
//El puerto se puede elegir entre 3k - 4k
const port = 3200

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(productRoutes)

//Levantar el servidor
const initServer = () => app.listen(port, () => console.log(`Listening on port ${port}`))

initServer()
connect()

//DDL como tal ya no existe ahora se hace con js

