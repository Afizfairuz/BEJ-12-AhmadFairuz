class UserRepository {
  constructor() {
    this.users = [];
  }

  getList() {
    return this.users;
  }
}

module.exports = UserRepository;