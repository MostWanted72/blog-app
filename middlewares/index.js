exports.validateBlog = (req, res, next) => {
    console.log('check this', req.body)
    if (!req.body.title || !req.body.body) {
        return res.redirect('/posts/new')
    }
    next()
}