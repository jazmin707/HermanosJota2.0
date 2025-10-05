const express = require('express');
const path = require('path');
const app = express();
const productosRouter = require('./routes/productos');
const logger = require('./middleware/logger'); 

app.use(express.json());
app.use(logger); 
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/productos', productosRouter);
app.get("/", (req, res) => {
  res.json({ message: "Servidor Express funcionando 🚀" });
});
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
