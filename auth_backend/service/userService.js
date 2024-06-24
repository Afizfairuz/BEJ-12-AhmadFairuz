class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  // Mendapatkan semua pengguna
  getAll() {
    return this.userRepository.getAll();
  }

  // Mendapatkan pengguna berdasarkan email
  getByEmail(email) {
    const user = this.userRepository.getByEmail(email);
    return user || null;
  }

  // Mendaftarkan pengguna baru
  register(user) {
    return this.userRepository.addUser(user);
  }
}

module.exports = UserService;
