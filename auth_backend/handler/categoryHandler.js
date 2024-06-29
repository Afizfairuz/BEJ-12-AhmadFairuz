// categoryHandler.js

class CategoryHandler {
  constructor(categoryService) {
    this.categoryService = categoryService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  async getAll(req, res) {
    const categories = await this.categoryService.getAllCategories();
    res.status(200).json({ categories });
  }

  async getById(req, res) {
    const categoryId = req.params.id;
    const category = await this.categoryService.getCategoryById(categoryId);
    if (!category) {
      res.status(404).json({ error: "Category not found" });
    } else {
      res.status(200).json(category);
    }
  }

  async create(req, res) {
    const { name } = req.body;
    const createdCategory = await this.categoryService.createCategory(name);
    res.status(201).json({ createdCategory });
  }

  async updateById(req, res) {
    const categoryId = req.params.id;
    const { name } = req.body;
    const updatedCategory = await this.categoryService.updateCategoryById(
      categoryId,
      name
    );
    res.status(200).json({ updatedCategory });
  }

  async deleteById(req, res) {
    const categoryId = req.params.id;
    const deletedCategory = await this.categoryService.deleteCategoryById(
      categoryId
    );
    res.status(200).json({ deletedCategory });
  }
}

module.exports = CategoryHandler;
