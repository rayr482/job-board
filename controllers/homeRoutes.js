const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
const nodemailer = require('nodemailer');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['id','name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((project) => project.get({ plain: true }));

    posts.forEach(post => {
      // check if post user ID matches the user's ID,
      post.isUsersPost = req.session.user_id === post.user_id
      // if yes set post.isuserspost
    
    });
    // Pass serialized data and session flag into template
    res.render('all-posts', { 
      layout: 'main',
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('select-post', {
      layout: 'main',
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/post/:id', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'verona71@ethereal.email',
        pass: 'bXgeg1wkfn2jdhDQYA'
      },
    });

    const mailOptions = {
    from: 'gitajob@yahoo.com',
    to: 'gitajob@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.render('select-post', {
            message: 'couldnt notify poster',
            text: info.error,
            logged_in: req.session.logged_in
          });
    } else {
      console.log('Email sent: ' + info.response);
      res.render('select-post', {
            message: 'Your comment has been sent',
            text: info.messageId,
          });
    }
  });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
    }
    res.render('login');
});

router.get('/new-post', (req, res) => {
  // If the user is already logged in, redirect the request to another route
    res.render('create-post', {
      layout: 'main'
    });
});

router.get('/make-comment', (req, res) => {
  // If the user is already logged in, redirect the request to another route
    res.render('make-comment', {
      layout: 'main'
    });
});

module.exports = router;

// original code - keeping for future development
    // if (info.error) {
    //   res.render("select-post", {
    //     message: "couldnt notify poster",
    //     text: info.error,
    //     logged_in: req.session.logged_in
    //   });
    // } else {
    //   console.log("Message sent: %s", info.messageId);
    //   res.render("select-post", {
    //     message: "your comment has been sent",
    //     text: info.messageId,
    //   });
    // }

    // send mail with defined transport object
    // const info = await transporter.sendMail({
    //   from: req.body.senderEmail, // sender address
    //   to: req.body.recieverEmail, // list of receivers
    //   subject: "New Comment on your Post", // Subject line
    //   text: req.body.comment.content, // plain text body
    //   html: req.body.comment.content, // html body
    // });