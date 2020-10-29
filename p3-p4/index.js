const { request, response } = require('express')
const express = require('express')
const app = new express()
const path = require('path')


//Đăng ký mục public
app.use(express.static('public'))

//server lắng nghe
app.listen(4000, () => {
    console.log('app listening on port 4000')
})



//Tạo router xử lý và phản hồi cho client

app.get('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})



// //Sự dụng EJS  trong dự án
// const express = require('express')
// const app = new express()
// const path = require('path')


// const ejs = require('ejs')
// app.set('view engine', 'ejs')


// //Đăng ký mục public
// app.use(express.static('public'))

// //server lắng nghe
// app.listen(4000, () => {
//     console.log('app listening on port 4000')
// })

// //Tạo router xử lý và phản hồi cho client bằng EJS


// app.get('/', (req, res) => {
//     res.render('index')
//     })

// app.get('/about', (req, res) => {
//     res.render('about');
// })
// app.get('/contact', (req, res) => {
//     res.render('contact');
// })
// app.get('/post', (req, res) => {
//     res.render('post')
// })

