const express = require("express");
const router = express.Router();
const db = require('../models');
const { Op } = require("sequelize");

router.get('/comments', async (req, res) => {
    try {
        const fromDate = Date.parse(req.query.fromDate);
        const toDate = Date.parse(req.query.toDate);
        const analytics = await db.Comment.findAll({
            where: {
                createdAt: {
                    [Op.between]: [fromDate, toDate]
                }
            },
            groupby: 'articleId'
        });
        res.status(200).json(analytics);
    } catch(e) {
        res.status(400).end();
    }

});

module.exports = router;