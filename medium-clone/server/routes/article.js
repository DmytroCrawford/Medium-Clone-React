const articlecontroller = require('./../controllers/article.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (routes) => {
    
    router
        .route('/articles')
        .get(articlecontroller.getAll)
    router
        .route('/article')
        .post(multipartWare, articlecontroller.addAricle)
    router
        .route('/article/clap')
        .post(articlecontroller.clapArticle)
    router
        .route('/article/comment')
        .post(articlecontroller.commentArticle)
    router
        .route('/article/:id')
        .get(articlecontroller.getArticle)
}