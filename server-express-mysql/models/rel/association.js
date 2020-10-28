/* table not built -----> order_products

module.exports = function(models) {
    models.product.belongsToMany(models.order, 
        { 
            through: models.order_products,
            foreignKey: 'products_id'
        });
    models.order.belongsToMany(models.products,
        {
            through: models.order_products,
            foreignKey: 'order_id'
        });
}




*/