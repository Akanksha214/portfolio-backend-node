const Service= require('../models/service.model');

const services= {
    getService: async () => {
        let result = await Service.find().exec();

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    createService: async (req) => {
        console.log("request...",req.body)
        let result = await Service.create(req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    updateService: async (req) => {
        console.log("request...",req.body)
        let result = await Service.findByIdAndUpdate(req.body._id,req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    getServiceById: async (serviceId) => {
        
        let result = await Service.findById(serviceId);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
}
module.exports = services;