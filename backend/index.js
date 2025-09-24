const express = require("express");
const app = express();

app.use(express.json());

// Middleware global de logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Rutas de productos 
const productosRouter = require("./routes/productos");
app.use("/api/productos", productosRouter);

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "Servidor Express funcionando 🚀" });
});

// Manejo de 404
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Middleware de errores 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
