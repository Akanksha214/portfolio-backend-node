module.exports = (app) => {
    const sendController = require('../sendMessage/sendMessage.controller.js');
    app.get('/get-sends', sendController.getSends);
    app.post('/create-sends', sendController.createSends);
    app.put('/update-sends', sendController.updateSends);
   
}