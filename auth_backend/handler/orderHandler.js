const OrderService = require("../service/orderService");

class OrderHandler {
  constructor() {
    this.orderService = new OrderService();
  }

  async getAll(req, res) {
    try {
      const orders = await this.orderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const order = await this.orderService.getOrderById(id);
      if (!order) {
        res.status(404).json({ message: "Order not found" });
      } else {
        res.json(order);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    const orderData = req.body;
    try {
      const newOrder = await this.orderService.createOrder(orderData);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateById(req, res) {
    const { id } = req.params;
    const orderData = req.body;
    try {
      const updatedOrder = await this.orderService.updateOrder(id, orderData);
      res.json(updatedOrder);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteById(req, res) {
    const { id } = req.params;
    try {
      const deletedOrder = await this.orderService.deleteOrder(id);
      res.json(deletedOrder);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = OrderHandler;
