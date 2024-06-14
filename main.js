const express = require("express");
const app = express();
const PORT = 8000; // Port untuk berjalannya server

// Mengimpor repository
const UserRepository = require("./auth_backend/repository/UserRepository");
const ProductRepository = require("./auth_backend/repository/ProductRepository");
const CategoryRepository = require("./auth_backend/repository/CategoryRepository");

// Mengimpor service
const UserService = require("./auth_backend/service/UserService");
const ProductService = require("./auth_backend/service/ProductService");
const CategoryService = require("./auth_backend/service/CategoryService");

// Mengimpor handler
const UserHandler = require("./auth_backend/handler/UserHandler");
const ProductHandler = require("./auth_backend/handler/ProductHandler");
const CategoryHandler = require("./auth_backend/handler/CategoryHandler");

// Middleware untuk parsing request body
app.use(express.json());

// Inisialisasi repository
const userRepository = new UserRepository();
const productRepository = new ProductRepository();
const categoryRepository = new CategoryRepository();

// Inisialisasi service
const userService = new UserService(userRepository);
const productService = new ProductService(productRepository, userRepository);
const categoryService = new CategoryService(categoryRepository);

// Inisialisasi handler
const userHandler = new UserHandler(userService);
const productHandler = new ProductHandler(productService);
const categoryHandler = new CategoryHandler(categoryService);

// Route untuk User
app.get("/users", userHandler.getAll);
app.get("/users/:email", userHandler.getByEmail);
app.post("/register", userHandler.register);
app.post("/login", userHandler.login);

// Route untuk Product
app.get("/products", productHandler.getAll);
app.post("/products", productHandler.create);

// Route untuk Category
app.get("/categories", categoryHandler.getAll);
app.post("/categories", categoryHandler.create);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
