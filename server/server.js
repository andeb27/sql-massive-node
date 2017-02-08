var express = require('express');
var bodyParser = require('body-parser');
var port = 2700;
var productsCtrl = require('./controllers/productsCtrl')

var app = express();

app.use(bodyParser.json());

app.get('/api/products', productsCtrl.getProducts)

app.get('/api/products/:id', productsCtrl.getProduct)

app.put('/api/products/:id', productsCtrl.update)

app.delete('/api/products/:id', productsCtrl.delete)

app.listen(port, function() {
    console.log('running on port ' + port);
})