const Skill = require("../models/skills.model");

const skills = {
  getSkill: async () => {
    let result = await Skill.find().exec();

    if (result == null) {
      return "nodata";
    }
    return result;
  },
  createSkill: async (req) => {
    console.log("request...", req.body);
    let result = await Skill.create(req.body);

    if (result == null) {
      return "nodata";
    }
    return result;
  },
  updateSkill: async (req) => {
    console.log("request...", req.body);
    let result = await Skill.findByIdAndUpdate(req.body._id, req.body);

    if (result == null) {
      return "nodata";
    }
    return result;
  },

  deleteSkill: async (req) => {
    console.log("request..bbbbbbbbbbbb", req.body._id);

    let result = await Skill.remove({_id:req.body._id});

    if (result == null) {
      return "nodata";
    }
    return result;
  },
  getSkillById: async (skillId) => {
    let result = await Skill.findById(skillId);

    if (result == null) {
      return "nodata";
    }
    return result;
  },
};
module.exports = skills;
