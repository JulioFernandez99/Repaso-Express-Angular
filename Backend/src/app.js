//! Coonfiguracion del servidor de express
const express = require('express'); //importamos express
const morgan = require('morgan');

const app = express(); //esto crea un objeto del servidor de express 

app.use(morgan('dev')); //esto es un middleware que nos permite ver las peticiones que llegan al servidor
app.use(express.json({limit:'500mb'})); //esto es un middleware que nos permite recibir y enviar datos en formato json

//^ =================================================Routes=================================================

app.get('/', (req, res) => {
    res.json(
        {
            status:true,
            message: 'Welcome to root to the server'
        });
});

app.get('/saludo/:name', (req, res) => {
    const { name } = req.params;
    res.json(
        {
            status:true,
            message: `Hello ${name}`
        });
}
);


module.exports = app; //exportamos el objeto app para poder usarlo en otros archivos
