const Contact = require('../models/contactInfo.model');

const contacts = {
    getContacts: async () => {
        let result = await Contact.find().exec();

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    createContacts: async (req) => {
        console.log("request...",req.body)
        let result = await Contact.create(req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    updateContacts: async (req) => {
        console.log("request...",req.body)
        let result = await Contact.findByIdAndUpdate(req.body.contactId,req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
}
module.exports = contacts;