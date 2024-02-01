'use strict'

const User = require('../models/product.models')//<- Objeto / Instancia, solo el puede ser mayuscula

//Funciones Handler

exports.newProduct = async (req, res) =>{
    try{
        //req.body guarda toda la info del form
        console.log(req.body)
        res.send(req.body)
    }catch(err){
        console.error(err)
        res.status(500).send({message: 'Error creating product'})
    }
}