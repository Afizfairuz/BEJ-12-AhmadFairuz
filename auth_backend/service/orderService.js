const OrderRepository = require("../repository/OrderRepository");

class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository || new OrderRepository();
  }

  async getAll() {
    try {
      const orders = await this.orderRepository.getAll();
      return orders;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const order = await this.orderRepository.getById(id);
      return order;
    } catch (error) {
      throw error;
    }
  }

  async create(order) {
    try {
      const createdOrder = await this.orderRepository.insert(order);
      return createdOrder;
    } catch (error) {
      throw error;
    }
  }

  async updateById(id, updates) {
    try {
      const updatedOrder = await this.orderRepository.updateById(id, updates);
      return updatedOrder;
    } catch (error) {
      throw error;
    }
  }

  async deleteById(id) {
    try {
      const deletedOrder = await this.orderRepository.deleteById(id);
      return deletedOrder;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderService;
