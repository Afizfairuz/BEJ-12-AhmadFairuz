class OrderHandler {
  constructor(OrderService) {
    this.OrderService = OrderService;
  }

  async getList() {
    try {
      const orders = await this.OrderService.getList();
      return orders;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderHandler;
