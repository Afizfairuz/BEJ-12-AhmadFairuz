class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getAllUsers() {
    return this.userRepository.getAll();
  }

  getUserByEmail(email) {
    return this.userRepository.getByEmail(email);
  }

  registerUser(name, email, password) {
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    return this.userRepository.insert(newUser);
  }

  loginUser(email, password) {
    return this.userRepository.authenticate(email, password);
  }
}

module.exports = UserService;
