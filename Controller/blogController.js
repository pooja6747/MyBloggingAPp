const Blog= require('../Model/Blog')


exports.postblog = async (req, res) => {
    try {
        const data = await Blog.create(req.body)

        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.getblog = async (req, res) => {
    try {
        const data = await Blog.find()

        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}