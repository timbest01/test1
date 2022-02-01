const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Hello i am Homepage</h1>')
})

app.get('/contact',(req,res)=>{
    res.send('<h1>Hello i am contact</h1>')
})

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    } else {
        console.log('server connected on port 3000')
    }
})