
const Message = require('../sendMessage/service');
exports.getSends = async (req, res) => {
   try {
      console.log("hrre")
      let messageData = await Message.getSends();
      if (messageData) {
         res.status(202).send({
            messageData
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };

   exports.createSends = async (req, res) => {
    try {
       console.log("hrre")
       let messageData = await Message.createSends(req);
       if (messageData) {
          res.status(202).send({
            messageData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };
   exports.updateSends = async (req, res) => {
    try {
       console.log("hrre")
       let messageData = await Message.updateSends(req);
       if (messageData) {
          res.status(202).send({
            messageData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };
