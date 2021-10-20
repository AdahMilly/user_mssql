const db = require('../db');
const { validateUsers } = require('../helpers/validateUser');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');
const _ = require('lodash');
const generateToken = require('../helpers/generateToken');

module.exports = {
  loginUser: async (req, res) => {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
    });
    const { error } = schema.validate(req.body);
    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    const { email, password } = req.body;

    const { recordset } = await db.exec('userLogin', { email });

    const user = recordset[0];
    if (!user)
      return res.status(404).send({ message: 'Account does not exist' });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(404).send({ message: 'Invalid email or password' });

    const token = generateToken(user.email, user._id);
    res.send({
      user: _.pick(user, [
        '_id',
        'first_name',
        'last_name',
        'email',
      ]),
      token,
    });
  },

  registerUser: async (req, res) => {
    const { error } = validateUsers(req.body);
    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const { firstName:first_name, email, lastName: last_name } = req.body;
    const id = uuidv4();
    try {
      const result = await db.exec('registerUser', {
        id,
        first_name,
        last_name,
        password,
        email,
      });
      console.log({result});
      res.send({ message: 'User registered successfully' });
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'Internal Server Error' });
    }
  },
  forgotPassword: async (req, res) => {
    try {
      const { email } = req.body;

      if (email !== user.email){
        res.send({message: 'User not registered'})
      }

      const { recordset } = await db.exec('forgotPassword', { email });
      const forgetPassword = recordset[0]
      res.send(email)
      res.render(email)
    } catch (error) {
      console.log(error);
    }
    
  },
  resetPassword: async (req, res) => {
    try {
      const {email} = req.body
      res.send(email)
      res.render(email)
    } catch (error) {
      console.log(error)
    }
  },
};
