class UserHandler {
  constructor(userService) {
    this.userService = userService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.getByEmail = this.getByEmail.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async getAll(req, res) {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getByEmail(req, res) {
    const email = req.params.email;
    try {
      const user = await this.userService.getUserByEmail(email);
      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async register(req, res) {
    const newUser = req.body;
    try {
      const registeredUser = await this.userService.registerUser(newUser);
      res.status(201).json({
        message: "User registered successfully",
        user: registeredUser,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const loginSuccess = await this.userService.login(email, password);
      if (loginSuccess) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserHandler;
