'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "products", deps: []
 * createTable "user", deps: []
 * createTable "wishlist", deps: []
 * createTable "order", deps: [user]
 * createTable "store", deps: [user]
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2020-10-25T21:21:30.680Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "products",
            {
                "products_id": {
                    "type": Sequelize.INTEGER,
                    "field": "products_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING(45),
                    "field": "name",
                    "allowNull": true
                },
                "price": {
                    "type": Sequelize.DECIMAL,
                    "field": "price",
                    "allowNull": true
                },
                "product_image": {
                    "type": Sequelize.STRING(255),
                    "field": "product_image",
                    "allowNull": true
                },
                "store_id": {
                    "type": Sequelize.INTEGER,
                    "field": "store_id",
                    "allowNull": true
                },
                "category_id": {
                    "type": Sequelize.INTEGER,
                    "field": "category_id",
                    "allowNull": true
                },
                "sub_category_id": {
                    "type": Sequelize.INTEGER,
                    "field": "sub_category_id",
                    "allowNull": true
                },
                "description": {
                    "type": Sequelize.STRING(45),
                    "field": "description",
                    "allowNull": true
                },
                "stock_quantity": {
                    "type": Sequelize.INTEGER,
                    "field": "stock_quantity",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "user",
            {
                "user_id": {
                    "type": Sequelize.INTEGER,
                    "field": "user_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "first_name": {
                    "type": Sequelize.STRING(45),
                    "field": "first_name",
                    "allowNull": false
                },
                "last_name": {
                    "type": Sequelize.STRING(45),
                    "field": "last_name",
                    "allowNull": false
                },
                "phone": {
                    "type": Sequelize.STRING(45),
                    "field": "phone",
                    "allowNull": false
                },
                "email": {
                    "type": Sequelize.STRING(45),
                    "field": "email",
                    "allowNull": false
                },
                "street": {
                    "type": Sequelize.STRING(45),
                    "field": "street",
                    "allowNull": false
                },
                "state": {
                    "type": Sequelize.STRING(45),
                    "field": "state",
                    "allowNull": false
                },
                "zip_code": {
                    "type": Sequelize.CHAR(5),
                    "field": "zip_code",
                    "allowNull": false
                },
                "country": {
                    "type": Sequelize.STRING(45),
                    "field": "country",
                    "allowNull": false
                },
                "username": {
                    "type": Sequelize.STRING(45),
                    "field": "username",
                    "allowNull": false
                },
                "password": {
                    "type": Sequelize.STRING(45),
                    "field": "password",
                    "allowNull": false
                },
                "admin_status": {
                    "type": Sequelize.INTEGER,
                    "field": "admin_status",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "wishlist",
            {
                "wishlist_id": {
                    "type": Sequelize.INTEGER,
                    "field": "wishlist_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "order",
            {
                "order_id": {
                    "type": Sequelize.INTEGER,
                    "field": "order_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "user_id": {
                    "type": Sequelize.INTEGER,
                    "field": "user_id",
                    "unique": true,
                    "references": {
                        "model": "user",
                        "key": "user_id"
                    },
                    "allowNull": false
                },
                "order_status": {
                    "type": Sequelize.INTEGER,
                    "field": "order_status",
                    "allowNull": true
                },
                "order_date": {
                    "type": Sequelize.DATEONLY,
                    "field": "order_date",
                    "allowNull": true
                },
                "shipped_date": {
                    "type": Sequelize.DATEONLY,
                    "field": "shipped_date",
                    "allowNull": true
                },
                "total_price": {
                    "type": Sequelize.DECIMAL,
                    "field": "total_price",
                    "allowNull": true
                },
                "to_street": {
                    "type": Sequelize.STRING(45),
                    "field": "to_street",
                    "allowNull": true
                },
                "to_city": {
                    "type": Sequelize.INTEGER,
                    "field": "to_city",
                    "allowNull": true
                },
                "to_state": {
                    "type": Sequelize.STRING(45),
                    "field": "to_state",
                    "allowNull": true
                },
                "to_country": {
                    "type": Sequelize.STRING(45),
                    "field": "to_country",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "store",
            {
                "store_id": {
                    "type": Sequelize.INTEGER,
                    "field": "store_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "user_id": {
                    "type": Sequelize.INTEGER,
                    "field": "user_id",
                    "unique": true,
                    "references": {
                        "model": "user",
                        "key": "user_id"
                    },
                    "allowNull": false
                },
                "store_name": {
                    "type": Sequelize.STRING(45),
                    "field": "store_name",
                    "allowNull": false
                },
                "store_phone": {
                    "type": Sequelize.STRING(45),
                    "field": "store_phone",
                    "allowNull": false
                },
                "store_email": {
                    "type": Sequelize.STRING(255),
                    "field": "store_email",
                    "allowNull": false
                },
                "store_street": {
                    "type": Sequelize.STRING(255),
                    "field": "store_street",
                    "allowNull": false
                },
                "store_state": {
                    "type": Sequelize.STRING(45),
                    "field": "store_state",
                    "allowNull": false
                },
                "store_zip_code": {
                    "type": Sequelize.CHAR(5),
                    "field": "store_zip_code",
                    "allowNull": false
                },
                "store_image": {
                    "type": Sequelize.STRING(255),
                    "field": "store_image",
                    "allowNull": false
                },
                "store_active": {
                    "type": Sequelize.INTEGER,
                    "field": "store_active",
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
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
