import express, { json } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(cors()); // Permitir acceso del frontend al backend
app.use(json()); // Parsear JSON en las solicitudes

// Servir archivos estáticos desde la carpeta 'frontend' (asumiendo que estás en la carpeta frontend)
app.use(express.static(path.join(__dirname)));

// Ruta para servir el archivo HTML desde 'frontend/views'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
