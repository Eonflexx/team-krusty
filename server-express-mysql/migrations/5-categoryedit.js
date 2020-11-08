'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "subcategoryid" on table "products"
 * changeColumn "category" on table "products"
 *
 **/

var info = {
    "revision": 5,
    "name": "categoryedit",
    "created": "2020-11-05T03:07:03.838Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "products",
            "subcategoryid",
            {
                "type": Sequelize.STRING(45),
                "field": "subcategoryid",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "products",
            "category",
            {
                "type": Sequelize.STRING(45),
                "field": "category",
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
