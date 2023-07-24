const { User } = require('../models');

const userData = [
    {
        name: 'Kristine',
        email: 'kim@gmail.com',
        password: '12345678'
    },
    {
        name: 'Ray',
        email: 'ray@gmail.com',
        password: '12345678'
    },
    {
        name: 'Kevin',
        email: 'kevin@gmail.com',
        password: '12345678'
    },
    {
        name: 'Francisco',
        email: 'francisco@gmail.com',
        password: '12345678'
    },
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
});


module.exports = seedUsers;