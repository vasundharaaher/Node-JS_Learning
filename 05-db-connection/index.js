import express from "express";
import db from "./db2.json" with { type: "json" };
import * as z from "zod";
import ErrorHandle from "./ErrorHandle.js";


const port = Number(process.env.PORT) || 8081;

if(port && isNaN(port)){
    console.log('Port is not available!');
    process.exit(1);
}

const app = express();

// for sanitizing data / checking data is it in json format ?
app.use(express.json());

// bigginer rout
app.get("/",(req,res) => {
    const hello = {title:"DB connection"};
    res.send(hello);
});

// Schema for validating fruit
const fruitsSchema = z.object({
    id: z.number(),
    name: z.string(),
    quantity: z.number()
})


app.post('/fruitadd',(req,res)=>{
    const body = fruitsSchema.parse(req.body);
    console.log('post body is = ',body);
    res.json([{...body}, ...db.fruits]); 
});

const idSchema = z.coerce.number();
 
app.get('/fruitsbyid/:id',(req,res) => {
    const id = idSchema.parse(req.params.id);
    
    const fruitbyid = db.fruits.find((vege) => vege.id === id);
    if(fruitbyid){
        return res.json(fruitbyid);
    }      
    
    res.json({response:"No Fruits found by id"});

    // custom error
    // throw new Error('Invailid ID');
});

// univarsal error handler
app.use(ErrorHandle);

app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`);
});