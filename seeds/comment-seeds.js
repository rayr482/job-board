const { Comment } = require('../models');

const commentData = [
    {
        content: 'Hello! How much experience do you have with Back End Development?',
        post_id: 3,
        user_id: 4,
    },
    {
        content: 'I am currently looking for someone to help with SQL. Please contact me!',
        post_id: 1,
        user_id: 2,
    },
    {
        content: 'Are you able to do Back End as well?',
        post_id: 2,
        user_id: 3,
    },
    {
        content: 'I am sure you can find a job soon!',
        post_id: 2,
        user_id: 1,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);


module.exports = seedComments;