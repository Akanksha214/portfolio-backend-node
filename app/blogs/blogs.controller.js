
const Blogs = require('../blogs/service');
exports.getBlogs = async (req, res) => {
   try {
      console.log("hrre")
      let blogData = await Blogs.getBlogs();
      if (blogData) {
         res.status(202).send({
            blogData
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };

   exports.createBlogs = async (req, res) => {
    try {
       console.log("hrre")
       let blogData = await Blogs.createBlogs(req);
       if (blogData) {
          res.status(202).send({
            blogData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };
   exports.updateBlogs = async (req, res) => {
    try {
       console.log("hrre")
       let blogData = await Blogs.updateBlogs(req);
       if (blogData) {
          res.status(202).send({
            blogData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };

    exports.getBlogsById = async (req, res) => {
      try {
  
           const blogId=req.body.blogId;
         console.log("hrre",req.body.blogId)
         let blogData = await Blogs.getBlogsById(blogId);
         if (blogData) {
            res.status(202).send({
               blogData
            });
         }
         }catch (error) {
            console.log("error...",error)
         }
      };
