const { Category } = require("../../models/category");

class CategoryRepository {
  constructor() {
    this.Category = Category;
  }

  async getAllCategories() {
    return await this.Category.findAll();
  }

  async getCategoryById(id) {
    return await this.Category.findByPk(id);
  }

  async createCategory(categoryData) {
    return await this.Category.create(categoryData);
  }

  async updateCategory(id, categoryData) {
    const category = await this.Category.findByPk(id);
    if (!category) {
      throw new Error("Category not found");
    }
    return await category.update(categoryData);
  }

  async deleteCategory(id) {
    const category = await this.Category.findByPk(id);
    if (!category) {
      throw new Error("Category not found");
    }
    await category.destroy();
    return true;
  }
}

module.exports = CategoryRepository;
