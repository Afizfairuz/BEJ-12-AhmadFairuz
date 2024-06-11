class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async createProduct(product) {
    try {
      const newProduct = await this.productRepository.addProduct(product);
      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  async getList() {
    try {
      const productList = await this.productRepository.getList();
      return productList;
    } catch (error) {
      throw error;
    }
  }

  async getProductById(id) {
    try {
      const product = await this.productRepository.getProductById(id);
      return product;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(id, updateData) {
    try {
      const updatedProduct = await this.productRepository.updateProduct(
        id,
        updateData
      );
      return updatedProduct;
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      await this.productRepository.deleteProduct(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
