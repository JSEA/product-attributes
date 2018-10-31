module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.addColumn(
      "Products",
      "companyId",
      {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        references: {
          model: 'Retailers',
          key: 'companyId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Products",
      "companyId",
    )
  }
};
