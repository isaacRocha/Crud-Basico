require(__dirname+'/backend/config/conexao');

const express = require('express');
const port = (process.env.port || 3000);

//express 
const app = express();
app.use(express.json()); 

app.use(express.static(__dirname + '/dist/front-end'));

app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/dist/front-end/index.html')
})


//config
app.set('port',port);

//rotas
app.use('/api',require(__dirname +'/backend/rotas'));

//iniciar express 

app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('erro' + error)
    }else{
        console.log("...")
    }
})