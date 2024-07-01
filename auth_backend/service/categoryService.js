const CategoryRepository = require("../repository/CategoryRepository");

class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async getAllCategories() {
    try {
      return await this.categoryRepository.getAllCategories();
    } catch (error) {
      throw new Error(`Failed to fetch categories: ${error.message}`);
    }
  }

  async getCategoryById(id) {
    try {
      return await this.categoryRepository.getCategoryById(id);
    } catch (error) {
      throw new Error(`Failed to fetch category: ${error.message}`);
    }
  }

  async createCategory(categoryData) {
    try {
      return await this.categoryRepository.createCategory(categoryData);
    } catch (error) {
      throw new Error(`Failed to create category: ${error.message}`);
    }
  }

  async updateCategory(id, categoryData) {
    try {
      return await this.categoryRepository.updateCategory(id, categoryData);
    } catch (error) {
      throw new Error(`Failed to update category: ${error.message}`);
    }
  }

  async deleteCategory(id) {
    try {
      return await this.categoryRepository.deleteCategory(id);
    } catch (error) {
      throw new Error(`Failed to delete category: ${error.message}`);
    }
  }
}

module.exports = CategoryService;
