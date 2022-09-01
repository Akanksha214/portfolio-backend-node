const Blog = require('../models/blogs.model');

const blogs = {
    getBlogs: async () => {
        let result = await Blog.find().exec();

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    createBlogs: async (req) => {
        console.log("request...",req.body)
        let result = await Blog.create(req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    updateBlogs: async (req) => {
        console.log("request...",req.body)
        let result = await Blog.findByIdAndUpdate(req.body._id,req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },

    getBlogsById: async (blogId) => {
        
    let result = await Blog.findById(blogId);

    if (result == null) {
        return "nodata";
    }
    return result;
},
}
module.exports = blogs;