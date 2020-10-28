const express = require("express");
var router = express.Router();
var models = require("../models");
const mysql = require("mysql2");

router.get("/", function (req, res, next) {
  models.products
    .findAll({
      attributes: ["name", "price", "image"],
    })
    .then((productsFound) => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(productsFound));
    });
});

router.get("/:id", function (req, res, next) {
  models.products.findByPk(parseInt(req.params.id)).then((productsFound) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(productsFound));
  });
});

router.post("/", function (req, res, next) {
  models.products
    .findOrCreate({
      where: {
        name: req.body.name,
        price: req.body.price,
      },
    })
    .spread(function (newProduct, created) {
      if (created) {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(newProduct));
      } else {
        res.status(400);
        res.send(err.message);
        res.send("Product already exists");
        console.log("Product already exists");
      }
    });
});

router.put("/:id", function (req, res, next) {
  let productId = parseInt(req.params.id);
  models.products
    .update(req.body, { where: { products_id: productId } })
    .then((result) => res.redirect("/products/" + productId))
    .catch((err) => {
      res.status(400);
      res.send("There was a problem updating the products.  Please check the product information.");
      console.log('There was a problem updating the product.  Please check the product information.');
    });
});

router.delete("/products/:id", function (req, res, next) {
  let productId = parseInt(req.params.id);
  models.products
    .destroy({
      where: { products_id: productId },
    })
    .then((result) => res.redirect("/products"))
    .catch((err) => {
      res.status(400);
      res.send("There was a problem deleting the product.  Please make sure you are specifying the correct id.");
    });
});

module.exports = router;



/*
router.put('/:id', function (req, res, next) {
  let productId = parseInt(req.params.id);
  models.products.update(req.body, { 
    where: { products_id: productId } 
  })
  .then(result => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
  })
  .catch(err => {
    res.status(400);
    res.send(err.message);
    res.send('There was a problem updating the product.  Please check the product information.');
    console.log('There was a problem updating the product.  Please check the product information.');
  });
});
*/