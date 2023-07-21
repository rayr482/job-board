const { Post } = require('../models');

const postData = [
    {
        subject: 'Looking for a job',
        message: 'Please help me find a job working with SQL!',
        user_id: 1,
        category_id: 3,
    },
    {
        subject: 'Please help',
        message: 'I am looking for a front end developer position',
        user_id: 2,
        category_id: 2,
    },
    {
        subject: 'Back End',
        message: 'I am looking for a back end developer position.',
        user_id: 3,
        category_id: 1,
    },
];

const seedPosts = () => Post.bulkCreate(postData);


module.exports = seedPosts;