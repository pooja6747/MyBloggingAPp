const Category = require('../Model/Category')

exports.postcategory = async (req, res) => {
    try {
        const data = await Category.create(req.body)

        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.getcategory = async (req, res) => {
    try {
        const data = await Category.find()

        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}