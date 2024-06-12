const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// array buat nyimpen pengguna
const users = [];

//  endpoint beranda halaman utama
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// endpoint buat registrasi pengguna
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // validasi pengguna sudah terfatar atau belum
    const existingUser = users.find((user) => user.username === username);
    if (existingUser)
      return res.status(400).json({ message: "Username already exists" });

    // hash password buat menyimpan password
    const hashedPassword = await bcrypt.hash(password, 10);

    // menyimpan pengguna baru
    users.push({ username, password: hashedPassword });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// endpoint login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // mencari username dari pengguna
    const user = users.find((user) => user.username === username);
    if (!user) return res.status(404).json({ message: "User not found" });

    // verfikasi password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
