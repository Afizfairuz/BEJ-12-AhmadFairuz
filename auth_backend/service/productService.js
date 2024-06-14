class ProductService {
  constructor(productRepository, userRepository) {
    this.productRepository = productRepository;
    this.userRepository = userRepository;
  }

  // Mendapatkan semua produk
  getAll() {
    return this.productRepository.getAll();
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
