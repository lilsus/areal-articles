const express = require("express");
const router = express.Router();
const db = require('../models');

router.get('/:articleId/comment', async (req, res) => {
    try {
        const comments = await db.Comment.findAll({
            where: { articleId: req.params.articleId }
        })
        res.status(200).json(comments);
    } catch(e) {
        res.status(400).end();
    }
});

router.get('/:articleId/comment/:id', async (req, res) => {
    try {
        const comment = await db.Comment.findOne({
            where: {
                articleId: req.params.articleId,
                id: req.params.id
            }
        })
        res.status(200).json(comment);
    } catch(e) {
        res.status(400).end();
    }
});

router.post('/:articleId/comment', async (req, res) => {
    try {
        const comment = await db.Comment.create(req.body);
        res.status(201).json(comment);
    } catch(e) {
        res.status(400).end();
    }
});

router.patch('/:articleId/comment/:id', async (req, res) => {
    try {
        await db.Comment.update(req.body, { where: {
            articleId: req.params.articleId,
            id: req.params.id
        }});
        res.status(200).end();
    } catch(e) {
        res.status(400).end();
    }
});

router.delete('/:articleId/comment/:id', async (req, res) => {
    try {
        await db.Comment.destroy({ where: {
            articleId: req.params.articleId,
            id: req.params.id
        }});
        res.status(200).end();
    } catch (e) {
        res.status(400).end();
    }
});

module.exports = router;