class ProductService {
  constructor(productRepository, userRepository) {
    this.productRepository = productRepository;
    this.userRepository = userRepository;
  }

  async getAll() {
    const products = await this.productRepository.getAll();
    return products;
  }

  async create(product) {
    const user = await this.userRepository.getByEmail(product.user_email);
    if (!user) {
      throw new Error("User not found");
    }
    return await this.productRepository.insert(product);
  }
}

module.exports = ProductService;
