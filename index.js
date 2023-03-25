const express = require('express');

require('dotenv').config(); // Leemos las variables de entorno
const cors = require('cors');
const {dbConnection} = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

//base de datos 
dbConnection();


// Tipos de peticiones // get, post, put, delete

//Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg:('Hola Mundo')
    })

});



app.listen( 3000, () => {
    console.log('Servidor corriendo en puerto'  + process.env.PORT);
});


