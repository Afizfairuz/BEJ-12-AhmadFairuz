class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async createOrder(order) {
    try {
      const newOrder = await this.orderRepository.addOrder(order);
      return newOrder;
    } catch (error) {
      throw error;
    }
  }

  async getList() {
    try {
      const orderList = await this.orderRepository.getList();
      return orderList;
    } catch (error) {
      throw error;
    }
  }

  async getOrderById(id) {
    try {
      const order = await this.orderRepository.getOrderById(id);
      return order;
    } catch (error) {
      throw error;
    }
  }

  async updateOrder(id, updateData) {
    try {
      const updatedOrder = await this.orderRepository.updateOrder(
        id,
        updateData
      );
      return updatedOrder;
    } catch (error) {
      throw error;
    }
  }

  async deleteOrder(id) {
    try {
      await this.orderRepository.deleteOrder(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderService;
