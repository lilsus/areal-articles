const express = require("express");
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
    try {
        const articles = await db.Article.findAll({ include: { model: db.Comment, as: 'comments' } });
        res.json(articles);
    } catch(e) {
        res.status(400).end();
    }
});

router.get('/:id', async (req, res) => {
    try {
        const article = await db.Article.findOne({
            where: { id: req.params.id },
            include: { model: db.Comment, as: 'comments' }
        });
        res.status(200).json(article);
    } catch (e) {
        res.status(400).end();
    }
});

router.post('/', async (req, res) => {
    try {
        const article = await db.Article.create(req.body);
        res.status(201).json(article);
    } catch (e) {
        res.status(400).end();
    }
});

router.patch('/:id', async (req, res) => {
    try {
        await db.Article.update(req.body, { where: { id: req.params.id } });
        res.status(200).end()
    } catch(e) {
        res.status(400).end();
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await db.Article.destroy({ where: { id: req.params.id } });
        res.status(200).end();
    } catch (e) {
        res.status(400).end();
    }
});

module.exports = router;