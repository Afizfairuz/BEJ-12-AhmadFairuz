class ProductHandler {
  constructor(productService) {
    this.productService = productService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.updateById = this.updateById.bind(this);
  }

  async getAll(req, res) {
    const products = await this.productService.getAll();
    res.status(200).send({ products });
  }

  async create(req, res) {
    const productToCreate = req.body;
    const createdProduct = await this.productService.create(productToCreate);
    res.status(201).send({ created_product: createdProduct });
  }

  async updateById(req, res) {
    const productId = req.params.id;
    const updates = req.body; // Updates to apply to the product

    try {
      const updatedProduct = await this.productService.updateById(
        productId,
        updates
      );
      if (!updatedProduct) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.status(200).send({ updated_product: updatedProduct });
      }
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = ProductHandler;
