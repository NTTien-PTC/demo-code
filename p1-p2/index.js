
// Chạy sever đầu tiên
// const http = require('http');
// const server = http.createServer(function(req, res) {
//     console.log(req.url)
//     res.end('hello word');
// })  
// server.listen(3000, function(){
//     console.log('app listening on port 3000' );
// });  

// request và response
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

// Trả về file html
const express = require('express');
const app = express()
const path = require('path')    
app.listen(3000, () =>{
    console.log('app listening  on prot 3000')
})
app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'about.html' ))
})
app.get('/contact', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})

// Trả về  các file tài nguyên (img,css,js)
// const express = require('express')
// const app = express()
// const path = require('path')
// app.use(express.static('public'))
// app.listen(3000, () =>{
//         console.log('app listening on port 3000');
// })
// app.get('/about',(req,res)=>{
//         res.sendFile(path.resolve(__dirname, 'about.html'))
// })