const OrderService = require("../services/orderService");

class OrderController {
  constructor(orderService) {
    this.orderService = orderService;
  }

  async getOrderList(req, res, next) {
    try {
      const orders = await this.orderService.getList();
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  async getOrderById(req, res, next) {
    const orderId = req.params.id;
    try {
      const order = await this.orderService.getOrderById(orderId);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }

  async createOrder(req, res, next) {
    const orderData = req.body;
    try {
      const newOrder = await this.orderService.createOrder(orderData);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }

  async updateOrder(req, res, next) {
    const orderId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedOrder = await this.orderService.updateOrder(
        orderId,
        updatedData
      );
      res.status(200).json(updatedOrder);
    } catch (error) {
      next(error);
    }
  }

  async deleteOrder(req, res, next) {
    const orderId = req.params.id;
    try {
      await this.orderService.deleteOrder(orderId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrderController;
