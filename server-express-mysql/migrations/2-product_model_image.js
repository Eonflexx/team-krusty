'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "product_image" from table "products"
 * addColumn "image" to table "products"
 *
 **/

var info = {
    "revision": 2,
    "name": "product_model_image",
    "created": "2020-10-25T21:23:05.216Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["products", "product_image"]
    },
    {
        fn: "addColumn",
        params: [
            "products",
            "image",
            {
                "type": Sequelize.STRING(255),
                "field": "image",
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
