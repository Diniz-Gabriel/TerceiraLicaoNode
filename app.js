// o comando npm install express --save, é para abaixar o express

// o comando node app.js é para rodar o servidor, nesse caso o app.js é o nome do arquivo, se o nome fosse outro seria node e o nome do outro arquivo

// para não ter que fica reiniciando o servidor toda vez que fazer alteração, fazer a instalação no cmd do "npm install nodemon -g", e dps rodar o servidor com o comando "nodemon app.js", nesse caso o app.js é o nome do arquivo, se o nome fosse outro seria outro no comando tbm 
const express = require("express")
const app = express()

app.get("/",function(req, res){ // o req é para receber informações e o res para enviar
    res.sendFile(__dirname + "/html/index.html") // essa linha é para chamar um arquivo html dentro do node
})

app.get("/produtos/:modelo/:item", function(req,res){ // /modelo /:item são exemplos de como criar variaveis na url
    res.send("Modelo: " + req.params.modelo + "<br>Item: " + req.params.item) // o res vai sempre único, da pra ter vários req, mas sempre uma única resposta (res)
})

app.get("/empresa", function(req,res){
    res.send("Página da empresa")
})

//sempre criar as rotas antes do listen, se nao buga
app.listen(8081, function(){console.log("Servidor Ativo !!")})  //fazer call back (oque esta dentro do console), para saber se o serve esta rodando certinho