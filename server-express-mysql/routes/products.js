const express = require("express");
var router = express.Router();
var models = require("../models");
const mysql = require("mysql2");

router.get("/", function (req, res, next) {
  models.products
    .findAll({
      attributes: ["id", "name", "price", "image", "description"],
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
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
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
    .update(req.body, { where: { id: productId } })
    .then((result) => res.redirect("/products/" + id))
    .catch((err) => {
      res.status(400);
      res.send("There was a problem updating the products.  Please check the product information.");
      console.log('There was a problem updating the product.  Please check the product information.');
    });
});

router.delete("/delete/:id", function (req, res, next) {
  let productId = parseInt(req.params.id);
  models.products
    .destroy({
      where: { id: productId },
    })
    .then((result) => res.redirect("/products"))
    .catch((err) => {
      res.status(400);
      res.send("There was a problem deleting the product.  Please make sure you are specifying the correct id.");
    });
});

module.exports = router;