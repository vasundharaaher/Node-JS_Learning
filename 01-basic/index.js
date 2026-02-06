
/////////////////////////////
// const http = require('http');
// import http from 'http';
// const server = http.createServer((req, res) =>{
//   console.log(req.url);
//   res.write('How may I save you');
//   res.end('\n Ending');
// });

// const port = 8081;
// server.listen(port);

// console.log('Node js Server is running');

/// open in browser
//http://localhost:8081

////////////////////////////

// const Event = require('events');
// import Event from 'events';

// const customEmitter = new Event();

// customEmitter.on('fired',function (...args){
//   console.log('fired the event', args);
// });

// customEmitter.emit('fired','geneka',123,true);

////////////////////////////////
// const {PI, greet} = require('./test');
// import {PI , greet } from './test.js';

// console.log(PI);
// greet();

/////////////////////////////////////////

// windows is not used in node but similar to that global is get used
// console.log(global);
// setTimeout(()=>{
//   console.log('Welcome');
// }, 2000);

////////////////////////////////////////

// console.log(process);
// console.log("Directry  name"+__dirname);
// console.log("File name"+__filename);

/////////////////////////////

// console.log(process.argv);
// this is how argument pass
// npm start geneka true  
// out put will be on which file is running and which file is running is default argument
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Lenovo\\Desktop\\Node-learning\\index.js',
//   'geneka',
//   'true'
// ]  
///////////////////////////////////////

// For .env file 
// console.log(process.env.PORT);
// Run the command
// node --env-file=.env index.js
// this is a output
// 8081

// console.log(process.env.JWT);
// node --env-file=.env index.js
// 102030

//////////////////

// import http from 'http';
// const server = http.createServer((req, res) =>{
//   console.log(req.url);
//   res.write('How may I serve you from .env');
//   res.end('\n Ending');
// });

// const port = process.env.PORT;
// if(!port){
//     process.on('exit',(code) => console.log(`Exit with Code ${code}`))
//     process.exit(1);
// }

// server.listen(port);

// console.log('Node js Server is running from .env');

// command and output
// node index.js
// Exit with Code 1

// node --env-file=.env index.js
// Node js Server is running from .env

///////////////////////////////
// When you multiple env files you have to feed it in command sepratlly

// console.log(process.env.PORT , process.env.JWT);

// C:\Users\Lenovo\Desktop\Node-learning>node --env-file=.devenv index.js 
// 8000 76200356

// C:\Users\Lenovo\Desktop\Node-learning>node --env-file=.env index.js    
// 8081 102030


////////////////////

//// Pass word key get from .devenv file or exit with code 2

// import http from 'http';
// const server = http.createServer((req, res) =>{
//   console.log(req.url);
//   res.write('How may I serve you from .devenv');
//   res.end('\n Ending');
// });
// const port = process.env.PORT;
// const passwordkey= process.env.PASSWORD_KEY;
// console.log(process.env.PORT , process.env.JWT, process.env.PASSWORD_KEY);
// if(!passwordkey){
//     process.on('exit',(code) => console.log(`Exit with Code ${code}`))
//     process.exit(2);
// }


// server.listen(port);

// console.log('Node js Server is running from .devenv');

////////////////////////////////////////

// "scripts": {
//     "start": "nodemon index.js",
//     "dev": "node --env-file=.devenv index.js"
//   }
// when you add command in scripts start is starting point and you add another command and
// want to run it then you need to append in "npm run eg/dev"

// console.log('Hello from Package .json');

// npm run dev
// > learning@1.0.0 dev
// > node --env-file=.devenv index.js
// Hello from Package .json

////////////////////////////////////////
//"npm install -g lodash" to install globally on system OR "npm install lodash"  to install lodash
// "lodash": "^4.17.23" major, minor, bug fixing

// const express = require('express');
// const _ = require('lodash');

// import _ from 'lodash';
// import express from 'express';

// const app = express();

// app.get('/', (req, res) => {
  
// const sum = _.sum([1,2,3,4,5,6,7,8,9,10]);
//   console.log(sum);
//   res.send(`Hello Node.js Serveeeeeerrrrrrrrssssss! ${sum}`);
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });



