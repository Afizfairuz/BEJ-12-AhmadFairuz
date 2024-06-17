class OrderHandler {
  constructor(orderService) {
    this.orderService = orderService;
  }

  getAll = (req, res) => {
    const orders = this.orderService.getAllOrders();
    res.json(orders);
  };

  getById = (req, res) => {
    const { id } = req.params;
    const order = this.orderService.getOrderById(parseInt(id));
    if (order) {
      res.json(order);
    } else {
      res.status(404).send("Order not found");
    }
  };
  
  create = (req, res) => {
    const order = req.body;
    const newOrder = this.orderService.createOrder(order);
    res.status(201).json(newOrder);
  };

  deleteById = (req, res) => {
    const { id } = req.params; // mengambil ID order yang dihapus dari parameter req
    const result = this.orderService.deleteOrderById(parseInt(id)); // mengahpus order berdasarkan ID pakai OrderService
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).send("Order not found");
    }
  };
}

module.exports = OrderHandler;