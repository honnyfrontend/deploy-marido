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




router.post('/', cardController.createCard); // Criar um novo card
router.get('/', cardController.getAllCards); // Obter todos os cards
router.get('/:id', cardController.getCardById); // Obter um card específico pelo ID
router.put('/:id', cardController.updateCard); // Atualizar um card pelo ID
router.delete('/:id', cardController.deleteCard); // Deletar um card pelo ID


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));









