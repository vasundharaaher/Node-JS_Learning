// Standard HTTP status code:-

// 200 Success / OK
// 201 Created / New record added
// 400 Bad Request 
// 401 Unauthorised (In case of not logged in)
// 404 Not found
// 500 Internal server error (Backed error)


const express = require('express');
const NotFound = require('./NotFound');
const Logger = require('./Logger');
const db = require('./db2.json');
const ErrorHandle = require('./ErrorHandle');
const VegeRoutes = require('./Vegeapi');
const FruitsRoutes = require('./FruitsRouts');

const PORT = Number(process.env.PORT);

const app = express();

//////////////////////

// This is a middleware function in Express.
// This middleware runs for every incoming request to your server

// One way :-
// app.use((req, res, next) => {  // here we are handling incoming request nex() is for processing further process
//     console.log('This URL is = ',req.url);
//     next();
// });

// second way :-
app.use(Logger);

// Out put in console Server 
// is running at http://localhost:8000
// This URL is =  /vegetables

////////////////////////

app.use('/assets',express.static('./pages'));
// http://localhost:8000/assets/2.jpg

// app.use(express.static('./pages'));
// http://localhost:8000/2.jpg
// http://localhost:8000/assets/index.html


app.get('/', (req, res) => {
    const company = { name: "geneka", location: "Pune" };
    res.json(company);
});


/// ----- this store in the fruits .js 

// app.get('/vegetables',(req,res) => {
//     res.send(db.vegetables);
// });

// // for vegetable by dynamic id
// app.get('/vegebydnyid/:id',(req,res) => {
//     const id = Number(req.params.id);
//     if(typeof id === "number" && !isNaN(id) ){
//         const vegebyid = db.vegetables.find((vege) => vege.id === id);
//         if(vegebyid){
//             return res.json(vegebyid);
//         }      
//     }
//     // res.json({response:"No vegetable found by id"});

//     // custom error
//     throw new Error('Invailid ID');
// });

// app.use(VegeRoutes);
// app.use(FruitsRoutes);

// for appending fruits/fruitsbyid/:id or other routs
app.use('/fruits',FruitsRoutes);

// app.use([VegeRoutes,FruitsRoutes]);
/// ----- this store in the fruits .js 


//////////////////====== univarsal rout =====///////////////
// This is univarsal rout application level midelware
// status Standard HTTP status code
// json response
// output respose handler

// one way by using function :-
// app.use((req, res) => {
//     res.status(404).json('Not found');
// });

// Second way by using constant :-
// const NotFound = (req, res) => {
//     res.status(404).json('Not found');
// };
// app.use(NotFound);

// Third way using module :-
// import module then apply use() 

app.use(NotFound);
//////////////===========/////////////

// =========Error handler==========/////////
// error Example:
// app.get('/vegetables',(req,res) => {
//     resl.send(db.vegetables);
// });

// one way :-
// app.use((err, req, res, next) => {
//     console.log('err =',err)
//     res.status(500).json({error: 'Somthing went wrong'});
// });

// Second way for custom error :-
// app.use((err, req, res, next) => {
//     console.log('err =',err.message)
//     res.status(500).json({error: err?.message || 'Somthing went wrong'});
// });

// Third way using module :-
app.use(ErrorHandle);
/////============================/////

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
