require('dotenv').config()
const express = require('express')
const app = express()
// console.log(process.env)
// const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/yt', (req,res)=>{
    res.send('Hello youtubers')
})

app.get('/twitter', (req,res)=>{
    res.send("<a href=\"https://x.com/ \">Twitter</a>")
})

app.get('/greet',(req, res)=>{
    res.send('<h1 style="color:red">Good Afternoon.</h1>')
})

app.get('/youtube',(req, res)=>{
    res.send('Anup Nath Jaiswal')
    
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })