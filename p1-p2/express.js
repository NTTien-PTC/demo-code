
//Giới thiệu Express
// var express = require('express');
// const { request, response } = require('express');
// var app = express();
// app.listen(3000,function () {
//     console.log('hello word');
// })


// Xử lý request với Express
// const express = require('express')
// const app = express()
// app.listen(3000, () =>{
//     console.log('App listening on port 3000');
// });
// app.get("/about",(request, response) => {
//     response.json({
//         name: 'Nguyen Truong Tien',
//         website: "NTT.com"
//     })
// })  

//so sanh
//dung lenh if-else thuong
// const http = require('http');
// const server = http.createServer((req, res)=>

// {
//         if(req.url === '/about')
//             res.end('The about page')
//         else if (req.url === '/contact')
//             res.end('contact page')
//         else if(req.url === '/')
//             res.end('The page home')
//         else {
//             res.writeHead(404)
//             res.end('page not found')
//         } 
// })
// server.listen(3000)

// dùng express 

// const express = require('express');
// const app = express()
// app.listen(3000, () =>{
//     console.log('App listening on port 3000');
// });
// app.get("/about", (req, res) => {
//     res.send('the about page');
// })

// app.get("/contact", (req,res)=>{
//     res.send('the contact page');
// })
// app.get("/contact", (req,res)=>{
//     res.send('the contact page');
// })
// app.get('/', (req, res)=>{
//     res.send('the page Home');
// })
// app.get('*',function(req, res){
//     res.header(404)
//     res.send('page not found')
// });

