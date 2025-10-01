const express = require('express');
const path = require('path'); // <-- para manejar rutas de carpetas
const app = express();
const productosRouter = require('./routes/productos');

app.use(express.json());

// Middleware para loguear cada request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
// Middleware para servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));
// Rutas
app.use('/api/productos', productosRouter);

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
