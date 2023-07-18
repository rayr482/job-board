const router = require('express').Router();
const { Category, Post } = require ('../../models');

router.get('/' , async (req,res) => {
    try {
        const newCategory = await Category.findAll ({
            include: [
                {
                    model: Post
                }
            ]
        });
        
        res.status(200).json(newCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id' , async (req,res) => {
    try {
        const newCategory = await Category.findbypk ( req.params.id, { 
            include: [
                {
                    model: Post
                }
            ]
        });

        if (!newCategory) {
            res.status(404).json({ message: 'No Category found with this ID' });
            return;
        }

        res.status(200).json(newCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/' , async (req,res) => {
    try {
        const newCategory = await Category.create ({
            category_name: req.body.category_name
        });

        res.status(200).json(newCategory);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id' , async (req,res) => {
    try {
        const newCategory = await Category.destroy ({
            where: {
                id: req.params.id
            }
        });

        if (!newCategory) {
            res.status(404).json({ message: 'No Category found with this ID' });
            return;
        }

        res.status(200).json(newCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;