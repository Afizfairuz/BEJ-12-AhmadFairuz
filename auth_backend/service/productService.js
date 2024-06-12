class ProductService {
  constructor(productRepository, userRepository) {
    this.productRepository = productRepository;
    this.userRepository = userRepository;
  }
}

createProduct(product) {
  const user = this.userRepository.getUserByEmail(product.user_email);
  if (!user) {
    throw new Error('User not found');
  }
  this.productRepository.addProduct(product);
  return product;
}

getAllProductsWithUser() {
  const products = this.productRepository.getList();
  return products.map(product => {
    const user = this.userRepository.getUserByEmail(product.user_email);
    return {
      name: product.name,
      price: product.price,
      user: user ? {
        name: user.name,
        email: user.email
      } : null
    } ;
  });
}

module.exsport = ProductService;