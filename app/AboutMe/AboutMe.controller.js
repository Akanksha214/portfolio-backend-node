
const Service = require('../AboutMe/service');
exports.getData = async (req, res) => {
   try {
      console.log("hrre")
      let AboutData = await Service.getData();
      if (AboutData) {
         res.status(202).send({
            AboutData
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };

   exports.createData = async (req, res) => {
    try {
       console.log("hrre",req.body)
       let aboutimages = [];
       req.files.forEach(function(item){
         console.log('item',item)
         aboutimages.push(item['filename']);
       });
       console.log('abou...',aboutimages)
       req.body.image = aboutimages
       let AboutData = await Service.createData(req);
       if (AboutData) {
          res.status(202).send({
            AboutData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };
   // exports.updateData = async (req, res) => {
   //  try {
   //     console.log("hrre")
   //     let AboutData = await Service.updateData(req);
   //     if (AboutData) {
   //        res.status(202).send({
   //          AboutData
   //        });
   //     }
   //     }catch (error) {
   //        console.log("error...",error)
   //     }
   //  };

   exports.updateData = async (req, res) => {
      try {
        console.log("hrre", req.body);
        let aboutImages = [];
        req.files.forEach(function (item) {
          console.log("item", item);
          aboutImages.push(item["filename"]);
        });
        console.log("abou...", aboutImages);
        if (aboutImages.length === 0) {
          req.body.image = req.body.existingImage;
        } else {
          req.body.image = aboutImages;
        }
        let AboutData = await Service.updateData(req);
        if (AboutData) {
          res.status(202).send({
            AboutData,
          });
        }
      } catch (error) {
        console.log("error...", error);
      }
    };

    exports.getAboutById= async (req, res) => {
      try {
        const aboutId = req.body.aboutId;
        console.log("hrre", req.body.aboutId);
        let AboutData = await Service.getAboutById(aboutId);
        if (AboutData) {
          res.status(202).send({
            AboutData,
          });
        }
      } catch (error) {
        console.log("error...", error);
      }
    };
