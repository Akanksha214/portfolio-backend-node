const Service = require("../skills/service");
exports.getSkill = async (req, res) => {
  try {
    console.log("hrre");
    let skillData = await Service.getSkill();
    if (skillData) {
      res.status(202).send({
        skillData,
      });
    }
  } catch (error) {
    console.log("error...", error);
  }
};

exports.createSkill = async (req, res) => {
  try {
    console.log("hrre");
    let skillData = await Service.createSkill(req);
    if (skillData) {
      res.status(202).send({
        skillData,
      });
    }
  } catch (error) {
    console.log("error...", error);
  }
};
exports.updateSkill = async (req, res) => {
  try {
    console.log("hrre");
    let skillData = await Service.updateSkill(req);
    if (skillData) {
      res.status(202).send({
        skillData,
      });
    }
  } catch (error) {
    console.log("error...", error);
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    console.log("hhh");
    let skillData = await Service.deleteSkill(req);
    if (skillData) {
      res.status(202).send({
        skillData,
      });
    }
  } catch (error) {
    console.log("eerr..", error);
  }
};
exports.getSkillById = async (req, res) => {
  try {
    const skillId = req.body.skillId;
    console.log("hrre", req.body.skillId);
    let skillData = await Service.getSkillById(skillId);
    if (skillData) {
      res.status(202).send({
        skillData,
      });
    }
  } catch (error) {
    console.log("error...", error);
  }
};
