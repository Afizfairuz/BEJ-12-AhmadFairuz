class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getList() {
    try {
      const userList = await this.userRepository.getList();
      return userList;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;