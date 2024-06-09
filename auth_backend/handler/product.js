class ProductHandler {
  constructor(productService) {
    this.productService = productService;
  }

  async getList() {
    try {
      const products = await this.productService.getList();
      return products;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductHandler;
