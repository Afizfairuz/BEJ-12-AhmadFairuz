class UserRepository {
  constructor(users = []) {
    this.users = users;
    this.currentId =
      users.length > 0 ? Math.max(users.map((user) => user.id)) + 1 : 1;
  }

  getAll() {
    return this.users;
  }

  add(user) {
    user.id = this.currentId++;
    this.users.push(user);
    return user;
  }

  getByID(id) {
    return this.users.find((user) => user.id === id);
  }

  getByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  deleteById(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
