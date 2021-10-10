const db = require('../db');

module.exports = {
  getAll: async (req, res) => {
    try {
      const { recordset } = await db.exec('GetAllTasks');
      res.send({ projects: recordset });
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const { recordset } = await db.exec('getTaskById', {
        _id: id,
      });
      const task = recordset[0];
      if (!project) return res.status(404).send({ message: 'No task found' });
      res.send({ task });
    } catch (error) {
      console.log(error);
    }
  },
  createOne: async (req, res) => {
    const {task_name, duration, user_id, project_id, start_date, end_date } = req.body;
    try {
      await db.exec('createTask', {
        task_name: task_name,
        duration: duration,
        project_id: project_id,
        user_id: user_id,
        start_date: start_date,
        end_date: end_date,
      });
      if (!taskCreated)
        return res.status(500).send({ message: 'Task not created' });
      res.send({ taskCreated });
    } catch (error) {
      console.log(error);
    }
  },
  updateOne: async (req, res) => {
    const { id, name, duration, project_id, start_date, end_date } = req.body;
    try {
      const { recordset } = await db.exec('updateTask', {
        _id: id,
        name: name,
        duration: duration,
        project_id: project_id,
        user_id: user_id,
        start_date: start_date,
        end_date: end_date,
      });
      const taskUpdated = recordset[0];
      if (!taskUpdated)
        return res.status(500).send({ message: 'Task not updated' });
      res.send({ taskUpdated });
    } catch (error) {
      console.log(error);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      await db.exec('deleteTask', { _id: id });
      res.send({ message: 'Task not deleted' });
    } catch (error) {
      console.log(error);
    }
  },
};
