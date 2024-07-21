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
        console.log('check this user ', err)
        res.redirect('/auth/register')
    }
}

exports.loginUser = (req, res) => {
    res.render('login')
}

exports.postLoginUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).send("Invalid username")
        }
        const isMatch = await user.isPasswordMatch(password)

        if (!isMatch) {
            return res.status(400).send('Password does not match')
        }
        req.session.userid = user._id;
        res.redirect('/');
    } catch (error) {
        console.log('error logging user', error)
        res.redirect('/user/login')
    }
}