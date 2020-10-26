var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
router.get('/products', function(req, res, next) {
  models.products.findAll({}).then(productsFound => {
    res.render('products', {
      products: productsFound
    });
  });
});
*/

router.get("/products", function(req, res, next) {
  models.products.findAll().then(products => res.json(products));
});


module.exports = router;
