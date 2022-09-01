module.exports = (app) => {
    const contactController = require('../contactInfo/contactInfo.controller.js');
    app.get('/get-contact', contactController.getContacts);
    app.post('/create-contact', contactController.createContacts);
    app.put('/update-contact', contactController.updateContacts);
   
}