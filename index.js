const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database')

// DATABASE 
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
    if (err){
        console.log(`Probleme de connexion DataBase: ${err}`)
    }else{
        console.log(`Connexion réussie a: ${config.db}`)

    }
})


// MIDDELEWARES
app.use(express.static(__dirname + '/client/dist/client'));

// ROUTES
app.get('*',  (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'))
  })
  

// SERVER
app.listen(3000, ()=>{
    console.log('Server tourne sur le port 3000')
  })