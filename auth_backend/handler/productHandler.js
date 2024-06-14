class ProductHandler {
  constructor(productService) {
    this.productService = productService;

    // Binding fungsi ke instance ini
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  // Mendapatkan semua produk
  getAll(req, res) {
    const products = this.productService.getAll();
    res.status(200).json({ products });
  }

  // Menambahkan produk baru
  create(req, res) {
    const newProduct = req.body;
    try {
      const product = this.productService.create(newProduct);
      res
        .status(201)
        .json({ message: "Product created successfully", product });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = ProductHandler;
