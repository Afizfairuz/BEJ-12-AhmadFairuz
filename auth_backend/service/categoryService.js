class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  // Untuk mendapatkan semua kategori
  getAll() {
    return this.categoryRepository.getAll();
  }

  //Menambahkan category yang baru
  create(category) {
    return this.categoryRepository.insert(category);
  }
}

module.exports = CategoryService;

