const db = require('../db');

module.exports = {
  getAll: async (req, res) => {
    try {
      const { recordset } = await db.exec('GetAllProjects');
      res.send({ projects: recordset });
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      await db.exec('getProjectById', { _id: id });
      const project = recordset[0];
      if (!project)
        return res
          .status(404)
          .send({ message: 'No project with that id found' });
      res.send({ project });
    } catch (error) {
      console.log(error);
    }
  },
  createOne: async (req, res) => {
    const { project_name, user_name, isDeleted, start_date, end_date } = req.body;
    try {
      await db.exec('createProject', {
        project_name: project_name,
        user_name: user_name,
        isDeleted: isDeleted,
        start_date: start_date,
        end_date: end_date,
      });
      res.send({ message:"Project Created...." });
    } catch (error) {
      console.log(error);
    }
  },
  updateOne: async (req, res) => {
    const { id, project_name, user_name, isDeleted, start_date, end_date } = req.body;
    try {
      await db.exec('updateProject', {
        _id: id,
        project_name: project_name,
        user_name: user_name,
        isDeleted: isDeleted,
        start_date: start_date,
        end_date: end_date,
      });
      res.send({ message: 'Project updated successfully' });
    } catch (error) {
      console.log(error);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      await db.exec('deleteProject', { _id: id });
      res.send({ message: 'Project deleted successfully' });
    } catch (error) {
      console.log(error);
    }
  },
};