module.exports = (app) => {
    const cardController = require('../card/card.controller.js');
    app.get('/cards', cardController.getCards);
    app.post('/create-cards', cardController.createCards);
    app.put('/update-cards', cardController.updateCards);
   
}