const users = [
  {
    id: 1,
    name: "Adit",
    email: "adit@gmail.com",
    password: "Adit123",
  },
  {
    id: 2,
    name: "han vir",
    email: "hanvir@gmail.com",
    password: "HanVir123",
  },
  {
    id: 3,
    name: "Adit",
    email: "adit@gmail.com",
    password: "Adit123",
  },
];

class UserRepository {
  constructor() {
    this.users = users;
  }

  getAll() {
    return this.users;
  }

  getByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  insert(user) {
    const newUser = {
      id: this.users.length + 1, // generate new id (not realistic in a real database)
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  authenticate(email, password) {
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );
    return user;
  }
}

module.exports = UserRepository;
