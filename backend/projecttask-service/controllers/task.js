const db = require('../db');

module.exports = {
  getAll: async (req, res) => {
    try {
      
      const { recordset } = await db.exec('GetAllTasks',{
        project_id: req.query.project_id
      });
      res.send({ tasks: recordset });
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
      if (!task) return res.status(404).send({ message: 'No task found' });
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
      return res.status(201).send({ message: 'Task created successfully' });
    } catch (error) {
      console.log(error);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const { recordset } = await db.exec('getTaskById', {
        _id: id,
      });
      const task = recordset[0];
      if (!task) return res.status(404).send({ message: 'No task with that Id found' });
      await db.exec('deleteTask', { _id: id });
      res.send({ message: 'Task deleted' });
    } catch (error) {
      console.log(error);
    }
  },
  markTaskAsComplete: async (req,res) => {
    const {id} = req.params;
    try{
      await db.exec('markTaskAsComplete', {
        _id: id
      })
      res.send({message: 'Task completed'})
    }catch(error){
      console.log(error);
    }
  }
};
