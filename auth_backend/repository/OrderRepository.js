const pgConn = require("../config/postgres");

class OrderRepository {
  constructor() {}

  async getAll() {
    const getOrders = await pgConn`
      SELECT id, user_id, status
      FROM orders`;
    return getOrders;
  }

  async getById(id) {
    const getOrder = await pgConn`
      SELECT id, user_id, status
      FROM orders
      WHERE id = ${id}`;
    return getOrder;
  }

  async insert(order) {
    const createdOrder = await pgConn`
      INSERT INTO orders (user_id, status)
      VALUES (${order.user_id}, ${order.status})
      RETURNING *`;
    return createdOrder;
  }

  async updateById(id, updates) {
    const updatedOrder = await pgConn`
      UPDATE orders
      SET user_id = ${updates.user_id}, status = ${updates.status}
      WHERE id = ${id}
      RETURNING *`;
    return updatedOrder;
  }

  async deleteById(id) {
    const deletedOrder = await pgConn`
      DELETE FROM orders
      WHERE id = ${id}
      RETURNING *`;
    return deletedOrder;
  }
}

module.exports = OrderRepository;
