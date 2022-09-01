module.exports = (app) => {
    const projectController = require('../project/project.controller.js');
    const imageUpload = require('../middleware/file-upload');
    app.get('/get-project', projectController.getProject);
    app.post('/get-projectById', projectController.getProjectById);
    app.post('/create-project', imageUpload.any('image'), projectController.createProject);
    app.put('/update-project',imageUpload.any('image'), projectController.updateProject);
   
}