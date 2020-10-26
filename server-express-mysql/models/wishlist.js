/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wishlist', {
    wishlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'wishlist'
  });
};
