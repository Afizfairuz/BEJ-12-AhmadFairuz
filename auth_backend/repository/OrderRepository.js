const pgConn = require("../config/postgres");

class OrderRepository {
  async getAll() {
    const orderList = await Order.findAll();
    return orderList;
  }

  async getById(id) {
    const order = await Order.findByPk(id);
    return order;
  }

  async create(orderData) {
    const newOrder = await Order.create(orderData);
    return newOrder;
  }

  async update(id, orderData) {
    const order = await Order.findByPk(id);
    if (!order) {
      throw new Error("Order not found");
    }
    await order.update(orderData);
    return order;
  }

  async delete(id) {
    const order = await Order.findByPk(id);
    if (!order) {
      throw new Error("Order not found");
    }
    await order.destroy();
    return order;
  }
}

module.exports = OrderRepository;