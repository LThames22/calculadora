const express = require('express')
let router = express.Router()
const math = require('mathjs')

router.post('/sumar',(request,response)=>{
    let vector = request.body.numeros
    let suma = math.sum(vector)
    console.log(math.sum(vector))
    let sumar ={ resultado : suma
    }
    response.send(sumar)
})

router.post('/multiplicar',(request,response)=>{
    let vector = request.body.numeros
    let multiplicar = math.prod(vector)
    console.log(math.prod(vector))
    let multi ={resultado : multiplicar
    }
    response.send(multi)
})

router.post('/restar',(request,response)=>{
    let numero1 = request.body.numero1
    let numero2 = request.body.numero2
    let restar = math.subtract(numero1,numero2)
    console.log(restar)
    let res ={resultado : restar
    }
    response.send(res)
})

router.post('/dividir',(request,response)=>{
    let numero1 = request.body.numero1
    let numero2 = request.body.numero2
    let dividir = math.divide(numero1,numero2)
    if(numero2 !=0)
{
    console.log(dividir)
    let div ={resultado : dividir}
    response.send(div)
} 
    else
    {
        response.send("no se puede realizar")
    }
})

router.post('/extremos',(request,response)=>{
    let vector = request.body.numeros
    let menor = math.min(vector)
    let mayor = math.max(vector)
    console.log(menor,mayor)
    let minmax ={
        min : menor,
        max : mayor
    }
    response.send(minmax)
})

module.exports=router