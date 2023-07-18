const sequelize = require('../config/connection');
const { Category, User, Post } = require('../models');

const categoryData = require('./categoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
