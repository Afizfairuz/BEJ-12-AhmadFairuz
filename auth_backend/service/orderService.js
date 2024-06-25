class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository || new OrderRepository();
  }

  async getAllOrders() {
    try {
      return await this.orderRepository.getAll();
    } catch (error) {
      throw new Error(`Error while fetching orders: ${error.message}`);
    }
  }

  async getOrderById(id) {
    try {
      return await this.orderRepository.getById(id);
    } catch (error) {
      throw new Error(
        `Error while fetching order with id ${id}: ${error.message}`
      );
    }
  }

  async addOrder(order) {
    try {
      return await this.orderRepository.addOrder(order);
    } catch (error) {
      throw new Error(`Error while adding order: ${error.message}`);
    }
  }

  async deleteOrderById(id) {
    try {
      return await this.orderRepository.deleteById(id);
    } catch (error) {
      throw new Error(
        `Error while deleting order with id ${id}: ${error.message}`
      );
    }
  }
}

module.exports = OrderService;
