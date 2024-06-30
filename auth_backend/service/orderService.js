const OrderRepository = require("../repository/OrderRepository");

class OrderService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }

  async getAllOrders() {
    const orders = await this.orderRepository.getAll();
    return orders;
  }

  async getOrderById(id) {
    const order = await this.orderRepository.getById(id);
    return order;
  }

  async createOrder(orderData) {
    const newOrder = await this.orderRepository.create(orderData);
    return newOrder;
  }

  async updateOrder(id, orderData) {
    const updatedOrder = await this.orderRepository.update(id, orderData);
    return updatedOrder;
  }

  async deleteOrder(id) {
    const deletedOrder = await this.orderRepository.delete(id);
    return deletedOrder;
  }
}

module.exports = OrderService;