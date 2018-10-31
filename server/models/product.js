module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    productName: DataTypes.STRING,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Retailer, {
      foreignKey: 'companyId',
    });
    Product.hasMany(models.Review, {
      foreignKey: 'productId',
    });
    Product.hasMany(models.AnswerQ, {
      foreignKey: 'productId',
    });
    Product.hasMany(models.ProductSize, {
      foreignKey: 'productId',
    });
  };

  return Product;
};