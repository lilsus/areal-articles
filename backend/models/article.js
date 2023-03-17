module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
        title: DataTypes.STRING,
        text: DataTypes.STRING
    }, {
        timestamps: true
    });

    Article.associate = (models) => {
        Article.hasMany(models.Comment, { foreignKey: 'articleId' , as: 'comments', onDelete: 'CASCADE' });
    }

    return Article;
}