import Card from '../models/Card.js';

const createCard = async (req, res) => {
  try {
    const { title, description, whatsapp, address, profession } = req.body;
    const newCard = await Card.create({ title, description, whatsapp, address, profession });
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o card', error });
  }
};
// ...demais funções...
const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar os cards', error });
  }
};

const getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: 'Card não encontrado' });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o card', error });
  }
};

const updateCard = async (req, res) => {
  try {
    const { title, description, whatsapp, address, profession } = req.body;
    const updatedCard = await Card.findByIdAndUpdate(
      req.params.id,
      { title, description, whatsapp, address, profession },
      { new: true }
    );
    if (!updatedCard) {
      return res.status(404).json({ message: 'Card não encontrado' });
    }
    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o card', error });
  }
};

const deleteCard = async (req, res) => {
  try {
    const deletedCard = await Card.findByIdAndDelete(req.params.id);
    if (!deletedCard) {
      return res.status(404).json({ message: 'Card não encontrado' });
    }
    res.status(200).json({ message: 'Card deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar o card', error });
  }
};

export default {
  createCard,
  getAllCards,
  getCardById,
  updateCard,
  deleteCard,
};