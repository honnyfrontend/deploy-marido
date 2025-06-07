import express from 'express';
import cardController from '../controllers/cardController.js';

const router = express.Router();

// Rotas para gerenciar cards
router.post('/', cardController.createCard); // Criar um novo card
router.get('/', cardController.getAllCards); // Obter todos os cards
router.get('/:id', cardController.getCardById); // Obter um card específico pelo ID
router.put('/:id', cardController.updateCard); // Atualizar um card pelo ID
router.delete('/:id', cardController.deleteCard); // Deletar um card pelo ID

export default router;