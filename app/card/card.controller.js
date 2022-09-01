
const Service = require('../card/service');
exports.getCards = async (req, res) => {
   try {
      console.log("hrre")
      let cardData = await Service.getCards();
      if (cardData) {
         res.status(202).send({
            cardData
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };

   exports.createCards = async (req, res) => {
    try {
       console.log("hrre")
       let cardData = await Service.createCards(req);
       if (cardData) {
          res.status(202).send({
             cardData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };
   exports.updateCards = async (req, res) => {
    try {
       console.log("hrre")
       let cardData = await Service.updateCards(req);
       if (cardData) {
          res.status(202).send({
             cardData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };
