const pgConn = require("../config/postgres");
const orders = [
  {
    id: 1,
    user_email: "ahmad@2gmail.com",
    products: [{ name: "sepatu mizuno", price: 3000, category_code: "mzn" }],
    total: 3000,
    status: "completed",
  },
  {
    id: 2,
    user_email: "fairuz@gmail.com",
    products: [{ name: "hp iphone 20", price: 2000, category_code: "ip20" }],
    total: 2000,
    status: "pending",
  },
];

class OrderRepository {
  constructor() {}

  async getAll() {
    const getOrders =
      await pgConn`SELECT id, user_email, products, total, status FROM orders`;
    return getOrders;
  }

  async getById(id) {
    const getOrder =
      await pgConn`SELECT id, user_email, products, total, status FROM orders WHERE id = ${id}`;
    return getOrder[0];
  }

  async addOrder(order) {
    const { user_email, products, total, status } = order;
    const addedOrder = await pgConn`
      INSERT INTO orders (user_email, products, total, status)
      VALUES (${user_email}, ${products}, ${total}, ${status})
      RETURNING id, user_email, products, total, status`;
    return addedOrder[0];
  }

  async deleteById(id) {
    const deletedOrder = await pgConn`
      DELETE FROM orders WHERE id = ${id} RETURNING id, user_email, products, total, status`;
    return deletedOrder[0];
  }
}

module.exports = OrderRepository;
