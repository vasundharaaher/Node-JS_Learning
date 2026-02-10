

const express = require('express');

const db = require('./db2.json');

const router = express.Router();

router.get('/fruits',(req,res) => {
    res.send(db.fruits);
});


// for vegetable by dynamic id
router.get('/fruitsbyid/:id',(req,res) => {
    const id = Number(req.params.id);
    if(typeof id === "number" && !isNaN(id) ){
        const fruitbyid = db.fruits.find((vege) => vege.id === id);
        if(fruitbyid){
            return res.json(fruitbyid);
        }      
    }
    res.json({response:"No Fruits found by id"});

    // custom error
    // throw new Error('Invailid ID');
});

module.exports = router;