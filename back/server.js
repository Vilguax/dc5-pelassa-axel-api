const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./vue/routes');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Le serveur tourne sur le port : ${port}`);
});

app.use((req, res, next) => {
    console.log(`Route utilisée : ${req.method} ${req.url}`);
    next();
});