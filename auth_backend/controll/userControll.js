class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUserList(req, res, next) {
    try {
      const users = await this.userService.getList();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    const userId = req.params.id;
    try {
      const user = await this.userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async createUser(req, res, next) {
    const userData = req.body;
    try {
      const newUser = await this.userService.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    const userId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedUser = await this.userService.updateUser(
        userId,
        updatedData
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    const userId = req.params.id;
    try {
      await this.userService.deleteUser(userId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
