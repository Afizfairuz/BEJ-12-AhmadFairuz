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

// Middleware untuk logging
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(logger);

// Middleware untuk autentikasi
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
app.use(authenticate);

// Middleware untuk menangani error internal server
const internalServerErrorHandler = (err, req, res, next) => {
  console.log("error: ", err);
  res.status(500).send({
    status: "fail",
    message: err.message,
  });
};
app.use(internalServerErrorHandler);

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
