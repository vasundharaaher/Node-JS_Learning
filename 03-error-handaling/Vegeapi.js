

const express = require('express');
const db = require('./db2.json');
const router = express.Router();

router.get('/vegetables',(req,res) => {
    res.send(db.vegetables);
});


// for vegetable by dynamic id
router.get('/vegebydnyid/:id',(req,res) => {
    const id = Number(req.params.id);
    if(typeof id === "number" && !isNaN(id) ){
        const vegebyid = db.vegetables.find((vege) => vege.id === id);
        if(vegebyid){
            return res.json(vegebyid);
        }      
    }
    res.json({response:"No vegetable found by id"});

    // custom error
    // throw new Error('Invailid ID');
});

module.exports = router;