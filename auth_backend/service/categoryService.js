class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async getAllCategories() {
    try {
      return await this.categoryRepository.getAll();
    } catch (error) {
      throw new Error(`Error while fetching categories: ${error.message}`);
    }
  }

  async createCategory(category) {
    try {
      return await this.categoryRepository.insert(category);
    } catch (error) {
      throw new Error(`Error while creating category: ${error.message}`);
    }
  }
}

module.exports = CategoryService;
