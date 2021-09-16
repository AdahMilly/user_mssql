const db = require('../db/db');

module.exports = {
  getUsers: async (req, res) => {
    let { recordset } = await db.exec('usersGet');
    res.send({ users: recordset });
  },
  getUser: async (req, res) => {
    const { id } = req.params;
    let { recordset } = await db.exec('userGet', {
      userId: id,
    });
    res.send({ user: recordset[0] });
  },
};
