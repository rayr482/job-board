const { Category } = require('../models');



const categoryData = 
[
    {
      "category_name": "Back End"
    },
    {
      "category_name": "Front End"
    },
    {
      "category_name": "SQL"
    },
];
  
const seedCategories = () => Category.bulkCreate(categoryData)


module.exports = seedCategories;