class CategoryHandler {
  constructor(categoryService) {
    this.categoryService = categoryService;

    // Bind methods
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(req, res) {
    try {
      const categories = await this.categoryService.getAllCategories();
      res.status(200).json({ categories });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    const newCategory = req.body;
    try {
      const createdCategory = await this.categoryService.createCategory(
        newCategory
      );
      res
        .status(201)
        .json({
          message: "Category created successfully",
          category: createdCategory,
        });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = CategoryHandler;
