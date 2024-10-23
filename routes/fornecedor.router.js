//Injeta o express e utiliza a função de roteamento
const express = require('express');
const router = express.Router();
//Injeta as função de acesso ao banco de dados
const sql = require('../models/fornecedor.model')

router.get('/tudo',(req,res)=>{
    sql.getTodos().then((resposta)=>{
        if(resposta instanceof Error){
            res.status(500).json(resposta)
            return;
        }
        res.status(200).json(resposta)
    })
})

module.exports = router 