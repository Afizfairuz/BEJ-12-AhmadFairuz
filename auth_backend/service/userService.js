class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers() {
    try {
      return await this.userRepository.getAll();
    } catch (error) {
      throw new Error(`Error while fetching users: ${error.message}`);
    }
  }

  async registerUser(user) {
    try {
      return await this.userRepository.addUser(user);
    } catch (error) {
      throw new Error(`Error while registering user: ${error.message}`);
    }
  }

  async login(email, password) {
    try {
      const user = await this.userRepository.getByEmail(email);
      if (user && user.password === password) {
        return true; // Login successful
      } else {
        return false; // Invalid email or password
      }
    } catch (error) {
      throw new Error(`Error while logging in: ${error.message}`);
    }
  }
}

module.exports = UserService;
