const products = [
  {
    name: "laptop macbook",
    price: 1234124,
    user_email: "adit@gmail.com",
    category_code: "lp",
  },
  {
    name: "laptop windows",
    price: 1234124,
    user_email: "hanvir@gmail.com",
    category_code: "lp",
  },
  {
    name: "hp samsung",
    price: 1234124,
    user_email: "hanvir@gmail.com",
    category_code: "hp",
  },
  {
    name: "hp iphone",
    price: 2000,
    user_email: "fairuz@gmail.com",
    category_code: "hp",
  },
];

// Repository untuk Product
class ProductRepository {
  constructor() {
    this.products = products;
  }

  // Mendapatkan semua produk
  getAll() {
    return this.products;
  }

  // Menambahkan produk baru
  insert(product) {
    this.products.push(product);
    return product;
  }
}

module.exports = ProductRepository;
