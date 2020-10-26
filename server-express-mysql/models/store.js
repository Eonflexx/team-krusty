/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store', {
    store_id: {
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
    store_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    store_phone: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    store_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    store_street: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    store_state: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    store_zip_code: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    store_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    store_active: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'store'
  });
};
