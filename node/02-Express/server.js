const express = require("express")
const app = express()
//localhost:3000
app.get("/",function(req,res){
    res.send("Servidor de funcionamento")
})
//
app.listen(3000,function(){
    console.log("Servidor rodando na porta 3000")
})