/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_item', {
    cart_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
        key: 'order_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'products_id'
      }
    },
    variation_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'variations',
        key: 'variation_id'
      }
    },
    cart_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_ctem_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'order_item'
  });
};
