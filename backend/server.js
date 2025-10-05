const express = require('express');
const path = require('path');
const cors = require('cors'); // <-- importar cors
const app = express();

const productosRouter = require('./routes/productos');
const logger = require('./middleware/logger');

app.use(cors()); // <-- permitir peticiones desde otro puerto
app.use(express.json());
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/productos', productosRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
