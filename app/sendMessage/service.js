const Message = require('../models/sendMessage.model');

const message = {
    getSends: async () => {
        let result = await Message.find().exec();

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    createSends: async (req) => {
        console.log("request...",req.body)
        let result = await Message.create(req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    updateSends: async (req) => {
        console.log("request...",req.body)
        let result = await Message.findByIdAndUpdate(req.body.messageId,req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
}
module.exports = message;