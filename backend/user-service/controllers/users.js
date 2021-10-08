const db = require('../db');

module.exports = {
  getUsers: async (req, res) => {
    let { recordset } = await db.exec('usersGet');
    res.send({ users: recordset });
  },
  getUser: async (req, res) => {
    const id = req.params.id;
    let { recordset } = await db.exec('userGet', {
      _id: id,
    });
    res.send({ user: recordset[0] });
  },
};
