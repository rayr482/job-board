const { User } = require('../models');

const userData = [
    {
        name: 'kristine',
        email: 'kim@gmail.com',
        password: '12345678'
    },
    {
        name: 'ray',
        email: 'ray@gmail.com',
        password: '12345678'
    },
    {
        name: 'kevin',
        email: 'kevin@gmail.com',
        password: '12345678'
    },
    {
        name: 'francisco',
        email: 'francisco@gmail.com',
        password: '12345678'
    },
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
});


module.exports = seedUsers;