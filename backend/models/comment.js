module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        text: DataTypes.STRING,
        articleId: DataTypes.INTEGER
    }, {
        timestamps: true
    });

    Comment.associate = (models) => {
        Comment.belongsTo(models.Article, { foreignKey: 'articleId' });
    }

    return Comment;
}