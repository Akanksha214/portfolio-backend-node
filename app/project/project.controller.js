const Project = require("../project/service");
exports.getProject = async (req, res) => {
  try {
    console.log("hrre");
    let projectData = await Project.getProject();
    if (projectData) {
      res.status(202).send({
        projectData,
      });
    }
  } catch (error) {
    console.log("error...", error);
  }
};

exports.createProject = async (req, res) => {
  try {
    console.log("hrre", req.body);
    let projectImages = [];
    req.files.forEach(function (item) {
      projectImages.push(item["filename"]);
    });
    console.log("abou...", projectImages);
    req.body.image = projectImages;
    let projectData = await Project.createProject(req);
    if (projectData) {
      res.status(202).send({
        projectData,
      });
    }
  } catch (error) {
    console.log("error...", error);
  }
};
exports.updateProject = async (req, res) => {
  try {
    console.log("hrre", req.body);
    let projectImages = [];
    req.files.forEach(function (item) {
      console.log("item", item);
      projectImages.push(item["filename"]);
    });
    console.log("abou...", projectImages);
    if (projectImages.length === 0) {
      req.body.image = req.body.existingImage;
    } else {
      req.body.image = projectImages;
    }
    let projectData = await Project.updateProject(req);
    if (projectData) {
      res.status(202).send({
        projectData,
      });
    }
  } catch (error) {
    console.log("error...", error);
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const projectId = req.body.projectId;
    console.log("hrre", req.body.projectId);
    let projectData = await Project.getProjectById(projectId);
    if (projectData) {
      res.status(202).send({
        projectData,
      });
    }
  } catch (error) {
    console.log("error...", error);
  }
};
