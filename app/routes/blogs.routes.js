module.exports = (app) => {
    const blogController = require('../blogs/blogs.controller.js');
    app.get('/get-blogs', blogController.getBlogs);
    app.post('/create-blogs', blogController.createBlogs);
    app.put('/update-blogs', blogController.updateBlogs);
    app.post('/get-blogsById', blogController.getBlogsById);
   
}