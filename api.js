
const express = require('express');
const dbconnect = require('./mongodb');
const app = express();

app.use (express.json ()) 
    app.get ('/', async (req, res)=>{
       const data = await dbconnect();
       const result = await data.find().toArray()
       res.send(result)
    
    })

    app.post('/', async (req, res)=>{
        const data = await dbconnect();
        const result = await data.insertOne(req.body);
        res.send(result)
        
    })
    
    
    app.listen(5000);
   


