const { User } = require('../../models/user');

class UserRepository {
  constructor() {}

  async findAll() {
    try {
      const userList = await User.findAll();
      console.log("User list:", userList); // Memeriksa hasil findAll()
      return userList;
    } catch (error) {
      throw new Error(error);
    }
  }

  async insert(userData) {
    try {
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getByEmail(email) {
    try {
      const user = await User.findOne({ where: { email } });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserRepository;
