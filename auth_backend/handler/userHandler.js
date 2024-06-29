// Contoh implementasi UserHandler
class UserHandler {
  constructor(userService) {
    this.userService = userService;
  }

  async getAll(req, res) {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getByEmail(req, res) {
    const email = req.params.email;
    try {
      const user = await this.userService.getUserByEmail(email);
      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json(user);
      }
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async register(req, res) {
    const { name, email, password } = req.body;
    try {
      const newUser = await this.userService.registerUser(
        name,
        email,
        password
      );
      res.json(newUser);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await this.userService.loginUser(email, password);
      if (!user) {
        res.status(401).json({ error: "Invalid credentials" });
      } else {
        res.json(user);
      }
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = UserHandler;
