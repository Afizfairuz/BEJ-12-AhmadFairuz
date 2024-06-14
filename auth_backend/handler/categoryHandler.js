class CategoryHandler {
  constructor(categoryService) {
    this.categoryService = categoryService;

    // Binding 
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  // Mendapatkan semua kategori
  getAll(req, res) {
    const categories = this.categoryService.getAll();
    res.status(200).json({ categories });
  }

  // Menambahkan kategori yang baru
  create(req, res) {
    const newCategory = req.body;
    const category = this.categoryService.create(newCategory);
    res
      .status(201)
      .json({ message: "Category created successfully", category });
  }
}

module.exports = CategoryHandler;
