// filepath: c:\Users\honny\OneDrive\Área de Trabalho\projeto-marido\backend\src\app.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import cardRoutes from './routes/cardRoutes.js';
import cors from 'cors';

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const cors = require('cors');

// Substitua pelo domínio do seu front-end Render
const allowedOrigins = ['https://marido-segunda-chance-xn9p.onrender.com'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/cards', cardRoutes);


app.get('/', (req, res) => {
  res.send('API está rodando!');
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));









