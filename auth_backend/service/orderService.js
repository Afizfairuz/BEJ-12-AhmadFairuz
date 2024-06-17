class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  getAllOrders() {
    return this.orderRepository.getAll();
  }

  getOrderById(id) {
    return this.orderRepository.getById(id); 
  }

  createOrder(order) {
    return this.orderRepository.addOrder(order);
  }

  deleteOrderById(id) {
    return this.orderRepository.deleteById(id);
  }
}

module.exports = OrderService;
