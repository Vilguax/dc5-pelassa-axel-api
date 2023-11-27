const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = require('./db_gestion');
const routes = require('./route');

app.use(bodyParser.json());

routes(app, db);

app.listen(port, () => {
    console.log(`Le serveur tourne sur le port : ${port}`);
});