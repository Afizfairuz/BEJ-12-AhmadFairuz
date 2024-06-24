class ProductService {
  constructor(productRepository, userRepository) {
    this.productRepository = productRepository;
    this.userRepository = userRepository;
  }

  async getAll() {
    const products = await this.productRepository.getAll();
    return products;
  }

  // Menambahkan produk baru
  create(product) {
    const user = this.userRepository.getByEmail(product.user_email);
    if (!user) {
      throw new Error("User not found");
    }
    return this.productRepository.insert(product);
  }
}

module.exports = ProductService;
