const router = require('express').Router();
const { Category, Comment, Post, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [
        {
          model: Category,
          attributes: ['category_name']
        },
        {
          model: Post,
          attributes: ['message']
        },
        {
          model: User,
          attributes: ['name']
        }
      ]
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const { post_id, content } = req.body;
    const user_id = req.session.user_id;

    if (!post_id || !content || !user_id) {
      res.status(400).json({ message: 'Invalid data. Both post_id, content, and user_id are required.' });
      return;
    }

    // Check if the specified post exists
    const post = await Post.findByPk(post_id);
    if (!post) {
      res.status(404).json({ message: 'Post not found with the specified post_id' });
      return;
    }

    // Create a new comment and associate it with the specified post
    const newComment = await Comment.create({
      post_id,
      content,
      user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id' , async (req,res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this ID' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
