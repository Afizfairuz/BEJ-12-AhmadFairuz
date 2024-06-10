class OrderRepository {
  constructor() {
    this.orders = [];
  }

  getList() {
    return this.orders;
  }

  addOrder(order) {
    this.orders.push(order);
  }

  getOrderById(id) {
    return this.orders.find((order) => order.id === id);
  }

  updateOrder(id, updateData) {
    const index = this.orders.findIndex((order) => order.id === id);
    if (index !== -1) {
      this.orders[index] = { ...this.orders[index], ...updateData };
    }
  }

  deleteOrder(id) {
    this.orders = this.orders.filter((order) => order.id !== id);
  }
}

module.exports = OrderRepository;
