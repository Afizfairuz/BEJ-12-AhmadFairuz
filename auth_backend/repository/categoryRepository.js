const pgConn = require("../config/postgres");
const categories = [
  {
    code: "lp",
    name: "laptop",
  },
  {
    code: "hp",
    name: "handphone",
  },
  {
    code: "bk",
    name: "buku",
  },
];

class CategoryRepository {
  constructor() {}

  async getAll() {
    const getCategories = await pgConn.query(
      "SELECT code, name FROM categories"
    );
    return getCategories.rows;
  }

  async insert(category) {
    const { code, name } = category;
    const insertQuery =
      "INSERT INTO categories (code, name) VALUES ($1, $2) RETURNING code, name";
    const createdCategory = await pgConn.query(insertQuery, [code, name]);
    return createdCategory.rows[0];
  }
}

module.exports = CategoryRepository;
