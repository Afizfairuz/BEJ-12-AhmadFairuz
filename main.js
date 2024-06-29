const express = require("express");
const path = require("path");
const app = express();
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
  console.error("Internal server error:", err.stack);
  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
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
app.get("/users", (req, res) => userHandler.getAll(req, res));
app.get("/users/:email", (req, res) => userHandler.getByEmail(req, res));
app.post("/register", (req, res) => userHandler.register(req, res));
app.post("/login", (req, res) => userHandler.login(req, res));

// Route untuk Product
app.get("/products", (req, res) => productHandler.getAll(req, res));
app.post("/products", (req, res) => productHandler.create(req, res));
app.put("/products/:id", (req, res) => productHandler.updateById(req, res)); // Endpoint untuk update produk

// Route untuk Category
app.get("/categories", (req, res) => categoryHandler.getAll(req, res));
app.get("/categories/:id", (req, res) => categoryHandler.getById(req, res));
app.post("/categories", (req, res) => categoryHandler.create(req, res));
app.put("/categories/:id", (req, res) => categoryHandler.updateById(req, res)); // Endpoint untuk update kategori
app.delete("/categories/:id", (req, res) =>
  categoryHandler.deleteById(req, res)
);

// Route untuk Order
app.get("/orders", (req, res) => orderHandler.getAll(req, res));
app.get("/orders/:id", (req, res) => orderHandler.getById(req, res));
app.post("/orders", (req, res) => orderHandler.addOrder(req, res));
app.delete("/orders/:id", (req, res) => orderHandler.deleteOrderById(req, res));

// Endpoint untuk menyajikan gambar
app.get("/images/binar.png", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "binar.png"));
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
