// categoryService.js

class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async getAllCategories() {
    return this.categoryRepository.getAll();
  }

  async getCategoryById(id) {
    return this.categoryRepository.getById(id);
  }

  async createCategory(name) {
    const newCategory = {
      name: name,
    };
    return this.categoryRepository.insert(newCategory);
  }

  async updateCategoryById(id, name) {
    const updates = {
      name: name,
    };
    return this.categoryRepository.updateById(id, updates);
  }

  async deleteCategoryById(id) {
    return this.categoryRepository.deleteById(id);
  }
}

module.exports = CategoryService;
