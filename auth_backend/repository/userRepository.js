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
    // Cek jika email sudah ada
    const existingUser = this.getByEmail(user.email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Jika tidak ada, tambahkan pengguna baru
    this.users.push(user);
    return user;
  }
}

module.exports = UserRepository;
