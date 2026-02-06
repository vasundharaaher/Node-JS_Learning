// console.log('hello');
const express = require('express');
const path = require('path');
const db = require('./db2.json');
const _ = require('lodash');

// Call  port from .env file
//  "dev":"node --watch --env-file=.env app"
const PORT = Number(process.env.PORT);
if(PORT && isNaN(PORT)){
    console.log('Port is not available!');
    process.exit(1);
}

const app = express(); // instance

app.get('/', (req,res) =>{
    // res.send('<h1 style=color:green;>Hi This is Fruits Market</h1>');
    const company = {name:"geneka",location:"Pune"};
    res.json(company);
});

// To include files in API
// app.get('/pages',(req,res) => {
//     const filepath = path.join(__dirname,'pages','index.html');
//     console.log(filepath);
//     res.sendFile(filepath);
// });

// for all vegetables
app.get('/vegetables',(req,res) => {
    res.send(db.vegetables);
});

// for vegetable by id
app.get('/vegetable/1',(req,res) => {
    const vegebyid = db.vegetables.find((vege) => vege.id === 1);
    res.send(vegebyid);
});

// for vegetable by dynamic id
app.get('/vegebydnyid/:id',(req,res) => {
    const id = Number(req.params.id);
    if(typeof id === "number" && !isNaN(id) ){
        const vegebyid = db.vegetables.find((vege) => vege.id === id);
        if(vegebyid){
            return res.json(vegebyid);
        }
        
    }
    res.json({response:"No vegetable found by id"});
});

// for vegetable by name
app.get('/vegebydnyname/:name',(req,res) => {
    const name = req.params.name;
    if(name){
        const vegebynm = db.vegetables.find(
            (vege) => vege.name.toLowerCase() === name.toLowerCase(),
        );
        if(vegebynm){
            return res.json(vegebynm);
        }
       
    }
    res.json({response:"No vegetable found by name"});
});


// for vegetable min quantity
app.get('/vegebyminqunty/:quantity',(req,res) => {
    const quantity = Number(req.params.quantity);
    if(typeof quantity === "number" && !isNaN(quantity)){
        const vegebyqunty = db.vegetables.filter(
            (vege) => vege.quantity >= quantity,
        );
        if(vegebyqunty){
            return res.json(vegebyqunty);
        }       
    }
    res.json({response:"No vegetable found with this quantity"});
});

// order vegetables using Query parameters
app.get('/vegeorderby',(req,res) =>{
    const orderBy = req.query.orderBy;
    if(orderBy){
        const orderedVege = _.orderBy(db.vegetables , ['name'] , [orderBy]);
        return res.json(orderedVege);
    }
    res.json(db.vegetables)
});



// const PORT = 8081;

app.listen(PORT , () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
});