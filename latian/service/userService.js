class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async register({ name, email, password }) {
    const existingUser = await this.userRepository.getByEmail(email);
    if (existingUser) {
      throw new Error("Email sudah terdaftar");
    }
    const newUser = { name, email, password };
    await this.userRepository.add(newUser);
    return newUser;
  }

  async login({ email, password }) {
    const user = await this.userRepository.getByEmail(email);
    if (!user || user.password !== password) {
      throw new Error("Email atau password salah");
    }
    return "Login berhasil";
  }
}
