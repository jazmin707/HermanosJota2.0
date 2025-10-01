// backend/routes/productos.js
const express = require("express");
const router = express.Router();
const productos = require("../productos"); 

// GET /api/productos
router.get("/", (req, res) => {
  res.json(productos);
});

// GET /api/productos/:id
router.get("/:id", (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  res.json(producto);
});

module.exports = router;
