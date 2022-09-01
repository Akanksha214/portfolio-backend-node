const Project = require('../models/project.model');

const project = {
    getProject: async () => {
        let result = await Project.find().exec();

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    createProject: async (req) => {
        console.log("request...",req.body)
        let result = await Project.create(req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    updateProject: async (req) => {
        console.log("request...",req.body)
        let result = await Project.findByIdAndUpdate(req.body._id,req.body);

        if (result == null) {
            return "nodata";
        }
        return result;
    },

    getProjectById: async (projectId) => {
        
        let result = await Project.findById(projectId);
    
        if (result == null) {
            return "nodata";
        }
        return result;
    },
}
module.exports = project;