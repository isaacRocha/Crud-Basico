require('./src/config/conexao');

const express = require('express');
const port = (process.env.port || 3001);

//express 
const app = express();
app.use(express.json()); 


//config
app.set('port',port);

//rotas
app.use('/api',require('./src/rotas'));

//iniciar express 

app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('erro' + error)
    }else{
        console.log("foi")
    }
})