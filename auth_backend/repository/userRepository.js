class UserRepository {
  constructor(users) {
    this.users = users
  }

  getList() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }

  updateUser(id, updateData) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updateData };
    }
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

module.exports = UserRepository;
