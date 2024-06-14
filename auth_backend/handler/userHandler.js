class UserHandler {
  constructor(userService) {
    this.userService = userService;

    // Binding fungsi ke instance ini
    this.getAll = this.getAll.bind(this);
    this.getByEmail = this.getByEmail.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  // Mendapatkan semua pengguna
  getAll(req, res) {
    const users = this.userService.getAll();
    res.status(200).json({ users });
  }

  // Mendapatkan pengguna berdasarkan email
  getByEmail(req, res) {
    const user = this.userService.getByEmail(req.params.email);
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }

  // Mendaftarkan pengguna baru
  register(req, res) {
    const newUser = req.body;
    const user = this.userService.register(newUser);
    res.status(201).json({ message: "User registered successfully", user });
  }

  // Login pengguna
  login(req, res) {
    const { email, password } = req.body;
    const user = this.userService.getByEmail(email);
    if (user && user.password === password) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  }
}

module.exports = UserHandler;
