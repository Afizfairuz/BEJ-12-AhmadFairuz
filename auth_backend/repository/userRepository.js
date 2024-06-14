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
];

// Repository untuk User
class UserRepository {
  constructor() {
    this.users = users;
  }

  // Mendapatkan semua pengguna
  getAll() {
    return this.users;
  }

  // Mendapatkan pengguna berdasarkan email
  getByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  // Menambahkan pengguna baru
  addUser(user) {
    this.users.push(user);
    return user;
  }
}

module.exports = UserRepository;
