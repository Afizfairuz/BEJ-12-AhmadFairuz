const express = require("express");
const app = express();
const path = require("path");
const PORT = 8000;

// Mengimpor repository
const UserRepository = require("./auth_backend/repository/UserRepository");
const ProductRepository = require("./auth_backend/repository/ProductRepository");
const CategoryRepository = require("./auth_backend/repository/CategoryRepository");
const OrderRepository = require("./auth_backend/repository/OrderRepository");

// Mengimpor service
const UserService = require("./auth_backend/service/UserService");
const ProductService = require("./auth_backend/service/ProductService");
const CategoryService = require("./auth_backend/service/CategoryService");
const OrderService = require("./auth_backend/service/OrderService");

// Mengimpor handler
const UserHandler = require("./auth_backend/handler/UserHandler");
const ProductHandler = require("./auth_backend/handler/ProductHandler");
const CategoryHandler = require("./auth_backend/handler/CategoryHandler");
const OrderHandler = require("./auth_backend/handler/OrderHandler");

// Middleware untuk parsing request body
app.use(express.json());

// Middleware untuk logging
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(logger);

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
const orderRepository = new OrderRepository();

// Inisialisasi service
const userService = new UserService(userRepository);
const productService = new ProductService(productRepository, userRepository);
const categoryService = new CategoryService(categoryRepository);
const orderService = new OrderService(orderRepository);

// Inisialisasi handler
const userHandler = new UserHandler(userService);
const productHandler = new ProductHandler(productService);
const categoryHandler = new CategoryHandler(categoryService);
const orderHandler = new OrderHandler(orderService);

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

// Route untuk Order
app.get("/orders", orderHandler.getAll);
app.get("/orders/:id", orderHandler.getById);
app.post("/orders", orderHandler.create);
app.delete("/orders/:id", orderHandler.deleteById);

// Endpoint untuk menampilkan gambar
app.get("/images/binar.png", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "binar.png"));
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
