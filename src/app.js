// filepath: c:\Users\honny\OneDrive\Área de Trabalho\projeto-marido\backend\src\app.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import cardRoutes from './routes/cardRoutes.js';
import cors from 'cors';

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
app.use(cors()); 

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/cards', cardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));









