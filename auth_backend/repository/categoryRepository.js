// categoryRepository.js

const pgConn = require("../config/postgres");

class CategoryRepository {
  constructor() {}

  async getAll() {
    const getCategories = await pgConn`select id, name from categories`;
    return getCategories;
  }

  async getById(id) {
    const getCategory =
      await pgConn`select id, name from categories where id = ${id}`;
    return getCategory[0]; // assuming id is unique, return the first result
  }

  async insert(category) {
    const createdCategory = await pgConn`
      insert into categories (name) values (${category.name})
      returning *`; // returning the inserted category

    return createdCategory[0]; // assuming returning * returns an array, return the first item
  }

  async updateById(id, updates) {
    const updatedCategory = await pgConn`
      update categories set name = ${updates.name}
      where id = ${id}
      returning *`; // returning the updated category

    return updatedCategory[0]; // assuming returning * returns an array, return the first item
  }

  async deleteById(id) {
    const deletedCategory = await pgConn`
      delete from categories where id = ${id}
      returning *`; // returning the deleted category

    return deletedCategory[0]; // assuming returning * returns an array, return the first item
  }
}

module.exports = CategoryRepository;
