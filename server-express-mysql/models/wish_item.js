/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wish_item', {
    wish_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    wish_list _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wish_list',
        key: 'wish_list _id'
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
    wish_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_witem_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'wish_item'
  });
};
