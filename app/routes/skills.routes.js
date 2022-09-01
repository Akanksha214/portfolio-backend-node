module.exports = (app) => {
    const skillController = require('../skills/skills.controller.js');
    app.get('/get-skill', skillController.getSkill);
    app.post('/create-skill', skillController.createSkill);
    app.put('/update-skill', skillController.updateSkill);
    app.post('/delete-skill', skillController.deleteSkill);
    app.post('/get-skillById', skillController.getSkillById);
   
}