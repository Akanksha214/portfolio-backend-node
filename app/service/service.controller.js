
const Service = require('../service/service');
exports.getService= async (req, res) => {
   try {
      console.log("hrre")
      let serviceData = await Service.getService();
      if (serviceData) {
         res.status(202).send({
            serviceData
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };

   exports.createService = async (req, res) => {
    try {
       console.log("hrre")
       let serviceData = await Service.createService(req);
       if (serviceData) {
          res.status(202).send({
            serviceData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };
   exports.updateService = async (req, res) => {
    try {
       console.log("hrre")
       let serviceData = await Service.updateService(req);
       if (serviceData) {
          res.status(202).send({
            serviceData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };
   exports.getServiceById = async (req, res) => {
    try {

       const serviceId=req.body.serviceId;
       console.log("hrre",req.body.serviceId)
       let serviceData = await Service.getServiceById(serviceId);
       if (serviceData) {
          res.status(202).send({
            serviceData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };
