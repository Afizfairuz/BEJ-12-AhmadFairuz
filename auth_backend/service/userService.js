class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createUser(user) {
    try {
      const newUser = await this.userRepository.addUser(user);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  async getList() {
    try {
      const userList = await this.userRepository.getList();
      return userList;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const user = await this.userRepository.getUserById(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id, updateData) {
    try {
      const updatedUser = await this.userRepository.updateUser(id, updateData);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      await this.userRepository.deleteUser(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
