const swaggerUI = require('swagger-ui-express');
const api = require('./api');
const SwaggerJsDocs = require('./swagger/config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const DB = require('./database')

DB.startDatabase(); 

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(SwaggerJsDocs));

/**** All Routes ********/
//app.use('/api/v1/', api )

app.listen(4000, (req, res) => {
    console.log( "listening on 4000")
})