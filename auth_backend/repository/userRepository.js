const pgConn = require("../config/postgres");
const users = [
  {
    name: "Adit",
    email: "adit@gmail.com",
    password: "Adit123",
  },
  {
    name: "han vir",
    email: "hanvir@gmail.com",
    password: "HanVir123",
  },
  {
    name: "fairuz",
    email: "fairuz@gmail.com",
    password: "fairuz123",
  },
];

class UserRepository {
  constructor() {}

  async getAll() {
    try{
      const getUsers = await pgConn.query('SELECT name, email FROM users');
      return getUsers.rows;
    } catch (error) {
      throw new Error('Error while fetching users: ${error.message}');
    }
  }

  async getByEmail(email) {
    try {
      const getUser = await pgConn.query('SELECT * FROM users WHERE email = $1', [email]);
      return getUser.rows[0];
    } catch (error) {
      throw new Error('Error while fetching user: ${error.message}');
    }
  }

 async addUser(user) {
    try {
      // Cek jika email sudah ada
      const existingUser = await this.getByEmail(user.email);
      if (existingUser) {
        throw new Error("User with this email already exists");
      }

      // Jika tidak ada, tambahkan pengguna baru
      const { name, email, password } = user;
      const newUser = await pgConn.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING name, email',
        [name, email, password]
      );
      return newUser.rows[0]; // Mengembalikan pengguna baru yang ditambahkan
    } catch (error) {
      throw new Error(`Error while adding user: ${error.message}`);
    }
  }
}
    

module.exports = UserRepository;
