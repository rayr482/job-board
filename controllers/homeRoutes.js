const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('home', {
    layout: 'main'
  });
});

router.get('/login', async (req, res) => {
  res.render('login', {
    layout: 'main'
  });
});

module.exports = router;