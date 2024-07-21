const User = require('../modals/User')

exports.validateBlog = (req, res, next) => {
    if (!req.body.title || !req.body.body) {
        return res.redirect('/posts/new')
    }
    next()
}

exports.checkUserSession = async (req, res, next) => {
    const notAllowedForUsers = ['/user/login', '/login', '/register', '/users/register']
    try {
        const user = await User.findOne({ _id: req.session.userid })
        if (user && !notAllowedForUsers.includes(req.path)) {
            return next()
        }
        if (!user && notAllowedForUsers.includes(req.path)) {
            return next()
        }
        console.log('check path', user)
        return res.redirect('/')
    } catch(err) {
        console.log('failed to check session')
        return res.redirect('/')
    }
}