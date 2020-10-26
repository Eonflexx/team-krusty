/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    products_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sub_category_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    stock_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'products'
  });
};
