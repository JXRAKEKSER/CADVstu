const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
// константы 
const PORT = config.get('port') || 5000;
const app = express();

app.use('/', require('./routes/systemIiTEC.routes'));

async function start(){
    try{
       await mongoose.connect(config.get('mongoDBUri'),{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    }catch(error){
        console.log('Server failed with', error.message);
    }
}

start();