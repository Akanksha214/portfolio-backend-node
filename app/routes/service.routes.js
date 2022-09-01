module.exports = (app) => {
    const serviceController = require('../service/service.controller.js');
    app.get('/get-service', serviceController.getService);
    app.post('/create-service', serviceController.createService);
    app.put('/update-service', serviceController.updateService);
    app.post('/get-serviceById', serviceController.getServiceById);
   
}