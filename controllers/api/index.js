const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/post', postRoutes);

module.exports = router;