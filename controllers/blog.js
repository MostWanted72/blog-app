const BlogPOst = require('../modals/BlogPost');

exports.getBlogs =  async (req, res) => {
    const blogs = await BlogPOst.find()
    res.render('index', {
        blogs,
    })
}

exports.newBlog = (req, res) => {
    res.render('create')
}

exports.storeBlog = async (req, res) => {
    try {
        const blog = new BlogPOst(req.body)
        await blog.save();
        res.redirect('/')
    } catch (err) {
        console.log('error in saving data in db', err)
    }
}

exports.getBlogById = async (req, res) => {
    try {
        const blog = await BlogPOst.findById(req.params.id)
        console.log('check blog', blog)
        res.render('post', {
            blog
        })
    } catch (err) {
        console.log('error while fetching blog with id', err)
    }
}