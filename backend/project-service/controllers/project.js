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
      const { recordset } = await db.exec('getProjectById', { _id: id });
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
    const { id, name, head_user_id, technology, end_date } = req.body;
    try {
      const { recordset } = await db.exec('createProject', {
        _id: id,
        name: name,
        head_user_id: head_user_id,
        technology: technology,
        end_date: end_date,
      });
      const projectCreated = recordset[0];
      if (!projectCreated)
        return res.status(500).send({ message: 'Project not created' });
      res.send({ projectCreated });
    } catch (error) {
      console.log(error);
    }
  },
  updateOne: async (req, res) => {
    const { id, name, head_user_id, technology, end_date } = req.body;
    try {
      const { recordset } = await db.exec('updateProject', {
        _id: id,
        name: name,
        head_user_id: head_user_id,
        technology: technology,
        end_date: end_date,
      });
      const projectUpdated = recordset[0];
      if (!projectUpdated)
        return res.status(500).send({ message: 'Project not updated' });
      res.send({ projectUpdated });
    } catch (error) {
      console.log(error);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      await db.exec('deleteProject', { _id: id });
      res.send({ message: 'Project not deleted' });
    } catch (error) {
      console.log(error);
    }
  },
};
