const Card = require('../models/cards.model');

const cards = {
    getCards: async () => {
        let result = await Card.find().exec();

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    createCards: async (req) => {
        console.log("request...",req.body)
        let result = await Card.create(req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    updateCards: async (req) => {
        console.log("request...",req.body)
        let result = await Card.findByIdAndUpdate(req.body.cardId,req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
}
module.exports = cards;