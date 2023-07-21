const sequelize = require('../config/connection');
const seedCategories = require('./category-seeds');
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();
  console.log('Seeding categories complete');

  await seedUsers();
  console.log('Seeding users complete');

  await seedPosts();
  console.log('Seeding posts complete');

  await seedComments();
  console.log('Seeding comments complete')

  process.exit(0);
};

seedDatabase();
