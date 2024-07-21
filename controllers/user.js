const User = require('../modals/User')

exports.registerUser = (req, res) => {
    res.render('register')
}

exports.saveUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.redirect('/')
    } catch (err) {
        console.log('check this ', err)
    }
}