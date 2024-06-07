class UserHandler {
  constructor(userService) {
    this.userService = userService;
  }

  getList() {
    return this.userService.getList();
  }
}


module.exports = UserHandler;