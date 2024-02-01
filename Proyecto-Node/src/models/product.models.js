const mongoose = require('mongoose')

//Esquema = Estructura

/* 
    Forma principiante
    const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number
}) */

/* 

    const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}) */

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    description: {
        type: String,
        maxLength: [50, `Canot be overcome 50 characteres`],
        required: [true, 'Description is required']
    },
    price: {
        type: Number,
        min: [0, 'Only number up 0'],
        required: [true, 'Price is required']
    }
})

module.exports = mongoose.model('Product', productSchema)//Esquema reutilizable