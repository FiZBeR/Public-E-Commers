const { Schema, model } = require('mongoose')

/**
 * @description Sub-schema for individual items nested inside the main carrusel array.
 * Maps elements to product references or other entities being showcased.
 */
const CarruselItemSchema = new Schema({
  referencia: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true
  },
  codigo: {
    type: String,
    default: null,
  },
});

/**
 * @description Mongoose schema for the CarruselItems model.
 * Represents a document containing a list of products/promos array to be displayed on the frontend carrusel/banner.
 */
const CarruselSchema = new Schema({
  productos: [CarruselItemSchema], // Lista de productos para el carrusel
});

module.exports = model("CarruselItems", CarruselSchema, "CarruselItems");