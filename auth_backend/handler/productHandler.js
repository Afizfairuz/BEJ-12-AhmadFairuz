class ProductHandler {
  constructor(productService) {
    this.productService = productService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(req, res) {
    const products = await this.productService.getAll();
    res.status(200).send({
      products: products
    });
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
