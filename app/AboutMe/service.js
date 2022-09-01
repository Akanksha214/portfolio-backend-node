const About = require('../models/AboutMe.model');

const abouts = {
    getData: async () => {
        let result = await About.find().exec();

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    createData: async (req) => {
        console.log("request...",req.body)
        let result = await About.create(req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    updateData: async (req) => {
        console.log("request...",req.body)
        let result = await About.findByIdAndUpdate(req.body._id,req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },

    getAboutById: async (aboutId) => {
        
        let result = await About.findById(aboutId);
    
        if (result == null) {
            return "nodata";
        }
        return result;
    },
}
module.exports = abouts;