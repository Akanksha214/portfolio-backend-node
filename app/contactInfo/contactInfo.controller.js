
const Contact = require('../contactInfo/service');
exports.getContacts = async (req, res) => {
   try {
      console.log("hrre")
      let contactData = await Contact.getContacts();
      if (contactData) {
         res.status(202).send({
            contactData
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };

   exports.createContacts = async (req, res) => {
    try {
       console.log("hrre")
       let contactData = await Contact.createContacts(req);
       if (contactData) {
          res.status(202).send({
            contactData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };
   exports.updateContacts = async (req, res) => {
    try {
       console.log("hrre")
       let contactData = await Contact.updateContacts(req);
       if (contactData) {
          res.status(202).send({
            contactData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };
