const express = require('express');
const app = express()
 const mongoose = require('mongoose')
//  const url = 'Mongodb://localhost:27017/E-com'

 const connect = async()=>{
    mongoose.connect('Mongodb://localhost:27017/E-com')
    const productschem = new mongoose.Schema({

    })
    const product = mongoose.model('product', productschem)
    const data = await product.find({})
    console.warn(data)
 }
//  comment add for tasting
 connect()
 app.listen(5130)
