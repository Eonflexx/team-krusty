/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sub_categories', {
    sub_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'category_id'
      }
    },
    sub_category_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'sub_categories'
  });
};
