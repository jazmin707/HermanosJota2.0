const express = require('express');
const path = require('path');
const app = express();
const productosRouter = require('./routes/productos');
const logger = require('./middleware/logger'); // <-- nuevo import

app.use(express.json());
app.use(logger); // <-- nuevo uso del middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/productos', productosRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
