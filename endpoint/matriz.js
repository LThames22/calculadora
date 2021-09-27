const express = require('express')
let router = express.Router()
const math = require('mathjs')

router.post('/suma',(request,response)=>{
    let matrizA = request.body.matrizA
    let matrizB = request.body.matrizB
    let matriz = math.add(matrizA,matrizB)
    console.log(matriz)
    let mat ={resultado : matriz
    }
    response.send(mat)
})

router.post('/multiplicacion',(request,response)=>{
    let matrizA = request.body.matrizA
    let matrizB = request.body.matrizB
    let matriz = math.dotMultiply(matrizA,matrizB)
    console.log(matriz)
    let mat ={resultado : matriz
    }
    response.send(mat)
})

router.post('/determinante',(request,response)=>{
    let vector = request.body.matrizA
    let matriz = math.det(vector)
    console.log(matriz)
    let mat ={resultado : matriz
    }
    response.send(mat)
})
module.exports=router