const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./vue/routes');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Le serveur tourne sur le port : ${port}`);
});