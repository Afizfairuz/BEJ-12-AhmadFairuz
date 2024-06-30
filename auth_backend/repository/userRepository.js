const { User } = require('../../models/user');

class UserRepository {
  constructor() {}

  async findAll() {
    const userList = await User.findAll();
    return userList;
  }

  async insert(user) {
    const createdUser = await User.create({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return createdUser;
  }

  async getByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  }
}

module.exports = UserRepository;