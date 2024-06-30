const UserService = require('../service/userService');

class UserHandler {
  constructor() {
    this.userService = new UserService();
  }

  async getAllUsers(req, res) {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;
      const newUser = await this.userService.createUser({
        name,
        email,
        password,
      });
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getUserByEmail(req, res) {
    try {
      const { email } = req.params;
      const user = await this.userService.getUserByEmail(email);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = UserHandler;