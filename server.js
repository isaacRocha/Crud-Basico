require(__dirname+'/backend/config/conexao');

const express = require('express');
const PORT = process.env.PORT || 3000;

//express 
const app = express();
app.use(express.json()); 

app.use(express.static(__dirname + '/dist/front-end'));

app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/dist/front-end/index.html')
})

//rotas
app.use('/api',require(__dirname +'/backend/rotas'));

//iniciar express 

app.listen(PORT, ()=>{
    console.log('servidor no ar'+PORT)
})
