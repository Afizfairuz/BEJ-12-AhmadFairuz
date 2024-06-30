const UserRepository =  require('../repository/UserRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async createUser(user) {
    return await this.userRepository.insert(user);
  }

  async getUserByEmail(email) {
    return await this.userRepository.getByEmail(email);
  }
}

module.exports = UserService;