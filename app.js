
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const math = require('mathjs')

app.use(express.json())

app.use('/numeros',require('./endpoint/numeros'))
app.use('/matriz',require('./endpoint/matriz'))

app.listen(port,()=>{
    console.log(`app running on ${port}`)
})
