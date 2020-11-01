'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "updatedAt" from table "order"
 * removeColumn "createdAt" from table "order"
 * removeColumn "updatedAt" from table "products"
 * removeColumn "createdAt" from table "products"
 * removeColumn "products_id" from table "products"
 * removeColumn "updatedAt" from table "store"
 * removeColumn "createdAt" from table "store"
 * removeColumn "updatedAt" from table "user"
 * removeColumn "createdAt" from table "user"
 * removeColumn "updatedAt" from table "wishlist"
 * removeColumn "createdAt" from table "wishlist"
 * addColumn "id" to table "products"
 *
 **/

var info = {
    "revision": 3,
    "name": "product_id_shorten",
    "created": "2020-10-29T22:35:19.750Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["order", "updatedAt"]
    },
    {
        fn: "removeColumn",
        params: ["order", "createdAt"]
    },
    {
        fn: "removeColumn",
        params: ["products", "updatedAt"]
    },
    {
        fn: "removeColumn",
        params: ["products", "createdAt"]
    },
    {
        fn: "removeColumn",
        params: ["products", "products_id"]
    },
    {
        fn: "removeColumn",
        params: ["store", "updatedAt"]
    },
    {
        fn: "removeColumn",
        params: ["store", "createdAt"]
    },
    {
        fn: "removeColumn",
        params: ["user", "updatedAt"]
    },
    {
        fn: "removeColumn",
        params: ["user", "createdAt"]
    },
    {
        fn: "removeColumn",
        params: ["wishlist", "updatedAt"]
    },
    {
        fn: "removeColumn",
        params: ["wishlist", "createdAt"]
    },
    {
        fn: "addColumn",
        params: [
            "products",
            "id",
            {
                "type": Sequelize.INTEGER,
                "field": "id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
