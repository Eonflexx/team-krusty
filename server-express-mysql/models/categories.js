/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    category_icon: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'categories'
  });
};
