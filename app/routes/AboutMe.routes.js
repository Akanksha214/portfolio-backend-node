module.exports = (app) => {
    const aboutController = require('../AboutMe/AboutMe.controller.js');
    const imageUpload = require('../middleware/file-upload');

    app.get('/get-about-me', aboutController.getData);
    app.post('/get-aboutById', aboutController.getAboutById);
    app.post('/create-about-me', imageUpload.any('image'),aboutController.createData);
    app.put('/update-about-me', imageUpload.any('image'),aboutController.updateData);
   

    app.put('/update-about-me', aboutController.updateData);
   
}