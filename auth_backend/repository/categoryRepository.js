const { category } = require('../../models/category')

class CategoryRepository {
  constructor() {}

  async getAll() {
    const getCategories = await pgConn.query(`
      SELECT id, name, description
      FROM categories
    `);
    return getCategories.rows;
  }

  async getById(id) {
    const getCategory = await pgConn.query(
      `
      SELECT id, name, description
      FROM categories
      WHERE id = $1
    `,
      [id]
    );
    return getCategory.rows[0];
  }

  async insert(category) {
    const { name, description } = category;
    const createdCategory = await pgConn.query(
      `
      INSERT INTO categories (name, description)
      VALUES ($1, $2)
      RETURNING *
    `,
      [name, description]
    );
    return createdCategory.rows[0];
  }

  async updateById(id, updates) {
    const { name, description } = updates;
    const updatedCategory = await pgConn.query(
      `
      UPDATE categories
      SET name = $1, description = $2
      WHERE id = $3
      RETURNING *
    `,
      [name, description, id]
    );
    return updatedCategory.rows[0];
  }

  async deleteById(id) {
    const deletedCategory = await pgConn.query(
      `
      DELETE FROM categories
      WHERE id = $1
      RETURNING *
    `,
      [id]
    );
    return deletedCategory.rows[0];
  }
}

module.exports = CategoryRepository;