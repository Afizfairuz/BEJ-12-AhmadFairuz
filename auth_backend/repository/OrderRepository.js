const { Order } = require("../../models/order");

class OrderRepository {
  constructor() {
    this.Order = Order;
  }

  async getAllOrders() {
    return await this.Order.findAll();
  }

  async getOrderById(id) {
    return await this.Order.findByPk(id);
  }

  async createOrder(orderData) {
    return await this.Order.create(orderData);
  }

  async updateOrder(id, orderData) {
    const order = await this.Order.findByPk(id);
    if (!order) {
      throw new Error("Order not found");
    }
    return await order.update(orderData);
  }

  async deleteOrder(id) {
    const order = await this.Order.findByPk(id);
    if (!order) {
      throw new Error("Order not found");
    }
    await order.destroy();
    return true;
  }
}

module.exports = OrderRepository;
