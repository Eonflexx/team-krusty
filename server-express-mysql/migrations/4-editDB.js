'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "stock_quantity" from table "products"
 * removeColumn "sub_category_id" from table "products"
 * removeColumn "category_id" from table "products"
 * removeColumn "store_id" from table "products"
 * addColumn "stockquantity" to table "products"
 * addColumn "subcategoryid" to table "products"
 * addColumn "category" to table "products"
 * addColumn "storeid" to table "products"
 *
 **/

var info = {
    "revision": 4,
    "name": "editDB",
    "created": "2020-11-04T02:06:13.139Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["products", "stock_quantity"]
    },
    {
        fn: "removeColumn",
        params: ["products", "sub_category_id"]
    },
    {
        fn: "removeColumn",
        params: ["products", "category_id"]
    },
    {
        fn: "removeColumn",
        params: ["products", "store_id"]
    },
    {
        fn: "addColumn",
        params: [
            "products",
            "stockquantity",
            {
                "type": Sequelize.INTEGER,
                "field": "stockquantity",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "products",
            "subcategoryid",
            {
                "type": Sequelize.INTEGER,
                "field": "subcategoryid",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "products",
            "category",
            {
                "type": Sequelize.INTEGER,
                "field": "category",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "products",
            "storeid",
            {
                "type": Sequelize.INTEGER,
                "field": "storeid",
                "allowNull": true
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
