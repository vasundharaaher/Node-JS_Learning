import express from "express";
import db from "./db2.json" with { type: "json" };


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

app.post('/fruitadd',(req,res)=>{
    const body = req.body;
    console.log('post body is = ',body);
    res.json([{...body}, ...db.fruits]); 
});

app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`);
});