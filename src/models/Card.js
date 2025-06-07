import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  whatsapp: { type: String },
  address: { type: String },
  profession: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Card = mongoose.model('Card', cardSchema);

export default Card;