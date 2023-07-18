const User = require('./User');
const Category = require('./Category');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Category.hasMany(Post, {
  foreignKey: 'category_id'
});

Post.belongsTo(Category, {
  foreignKey: 'category_id'
});

module.exports = { User, Category, Post };