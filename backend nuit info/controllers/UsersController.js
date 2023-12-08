const User = require("../models/Users");

class UsersController {
  constructor() {}

  createUser(req, res) {
    const { id, name, Email, password, role } = req.body;
    User.insertUser(id, name, Email, password, role, (error, result) => {
      if (error) {
        res.status(500).json({ error: "error" });
        return;
      }
      res.status(201).json({ message: "felicitation", result });
    });
  }

  async getAllUsers(req, res) {
    try {
      const users = await User.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  updateUser(req, res) {
    const id = req.params.id;
    const { name, Email, password, role } = req.body;
    User.updateUser(id, name, Email, password, role, (error, result) => {
      if (error) {
        res.status(500).json({ error: "error" });
        return;
      }
      res.status(200).json({ message: "felicitation", result });
    });
  }

  deleteUser(req, res) {
    const id = req.params.id;

    User.deleteUser(id, (error, result) => {
      if (error) {
        res.status(500).json({ error: "error" });
        return;
      }
      res.status(200).json({ message: "felicitation", result });
    });
  }
}

module.exports = UsersController;
