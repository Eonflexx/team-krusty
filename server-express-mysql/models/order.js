/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      },
      unique: true
    },
    order_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    shipped_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    total_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    to_street: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    to_city: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    to_state: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    to_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'order'
  });
};
