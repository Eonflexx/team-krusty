var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* hbs test
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


router.post('/products', function (req, res, next) {
  models.products.create(req.body)
    .then(newProduct => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(newProduct));
    })
    .catch(err => {
      res.status(400);
      res.send(err.message);
    });
});

//////////////////////////////////////////////////


///////////////////////////////////////////////////
/* not working
router.post("/products", function(req, res, next) {
  let newProduct = new models.Product();
  newProduct.name = req.body.name;
  newProduct.price = req.body.price;
  newProduct.save().then(product => res.json(product));
});
*/
/* not working
router.post("/new", function(req, res, next) {
  models.products.create({
    name: req.body.name, price: req.body.price
  }).then(submittedProducts => res.json(submittedProducts));
});
*/

router.delete("/products/:id", function(req, res, next) {
  let productId = parseInt(req.params.id);
  models.Product.findByPk(productId)
    .then(product => product.destroy())
    .then(() => res.send({ productId }))
    .catch(err => res.status(400).send(err));
});

router.put("/:id", function(req, res, next) {
  models.Product.update(
    {
      name: req.body.name,
      complete: req.body.complete
    },
    {
      where: { id: parseInt(req.params.id) }
    }
  ).then(product => res.json(product));
});

module.exports = router;
