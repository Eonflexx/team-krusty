/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wish_list', {
    wish_list _id: {
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
      }
    }
  }, {
    tableName: 'wish_list'
  });
};
