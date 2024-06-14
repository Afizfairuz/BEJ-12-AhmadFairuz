const categories = [
  {
    code: "lp",
    name: "laptop",
  },
  {
    code: "hp",
    name: "handphone",
  }
];

// Repository untuk category
class CategoryRepository {
  constructor() {
    this.categories = categories;
  }

  // Untuk mendapatkan semua category
  getAll() {
    return this.categories;
  }

  // Buat menambahkan category baru
  insert(category) {
    this.categories.push(category);
    return category;
  }
}

module.exports = CategoryRepository;