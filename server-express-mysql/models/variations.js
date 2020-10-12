/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('variations', {
    variation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'products',
        key: 'products_id'
      }
    },
    size: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sub_ipath: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'variations'
  });
};
