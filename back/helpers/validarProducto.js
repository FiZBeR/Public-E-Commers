const Joi = require("joi");

/**
 * @constant productJoiSchema
 * @description Joi validation schema for strictly validating the payload when creating a new product.
 * Ensures references, categories, names, prices, tallas, colores, and estampados are provided and formatted correctly.
 */
const productJoiSchema = Joi.object({
  referencia: Joi.string().trim().min(1).required().messages({
    'string.base': 'La referencia debe ser texto.',
    'any.required': 'La referencia es obligatoria.'
  }),
  categoria: Joi.string().required().messages({
    'string.base': 'La categoría debe ser texto.',
    'any.required': 'La categoría es obligatoria.'
  }),
  nombre: Joi.string().required().messages({
    'string.base': 'El nombre debe ser texto.',
    'any.required': 'El nombre es obligatorio.'
  }),
  descripcion: Joi.string().allow('').optional(),

  precio: Joi.number().required().messages({
    'number.base': 'El precio debe ser un número.',
    'any.required': 'El precio es obligatorio.'
  }),

  tallas: Joi.object({
    S: Joi.number().required(),
    M: Joi.number().required(),
    L: Joi.number().required(),
    XL: Joi.number().required(),
    U: Joi.number().required()
  }).required(),

  colores: Joi.array().items(
    Joi.object({
      codigo: Joi.string().required(),
      imagenRef: Joi.string().required(),
      imagenes: Joi.array().items(
        Joi.object({
          orden: Joi.number().required(),
          url: Joi.string().required()
        })
      ).required()
    })
  ).required(),

  estampados: Joi.array().items(
    Joi.object({
      codigo: Joi.string().required(),
      imagenRef: Joi.string().required(),
      imagenes: Joi.array().items(
        Joi.object({
          orden: Joi.number().required(),
          url: Joi.string().required()
        })
      ).required()
    })
  ).required(),

});

/**
 * @constant updateProductJoiSchema
 * @description Joi validation schema for validating partial updates to an existing product.
 * Makes fields optional but enforces correct types and formats for the ones that are provided. Requires at least one field (`.min(1)`).
 */
const updateProductJoiSchema = Joi.object({
  referencia: Joi.string().trim().min(1).optional().messages({
    'string.base': 'La referencia debe ser texto.',
    'string.min': 'La referencia no puede estar vacía.'
  }),
  categoria: Joi.string().optional().messages({
    'string.base': 'La categoría debe ser texto.'
  }),
  nombre: Joi.string().optional().messages({
    'string.base': 'El nombre debe ser texto.'
  }),
  descripcion: Joi.string().allow('').optional(),

  precio: Joi.number().optional().messages({
    'number.base': 'El precio debe ser un número.'
  }),

  tallas: Joi.object({
    S: Joi.number().optional(),
    M: Joi.number().optional(),
    L: Joi.number().optional(),
    XL: Joi.number().optional(),
    U: Joi.number().optional()
  }).optional(),

  colores: Joi.array().items(
    Joi.object({
      codigo: Joi.string().required(),
      imagenRef: Joi.string().required(),
      imagenes: Joi.array().items(
        Joi.object({
          orden: Joi.number().required(),
          url: Joi.string().required()
        }).unknown(true) // Permitir propiedades adicionales
      ).optional() // Hacer las imágenes opcionales en actualización
    }).unknown(true) // Permitir propiedades adicionales
  ).optional(),

  estampados: Joi.array().items(
    Joi.object({
      codigo: Joi.string().required(),
      imagenRef: Joi.string().required(),
      imagenes: Joi.array().items(
        Joi.object({
          orden: Joi.number().required(),
          url: Joi.string().required()
        }).unknown(true) // Permitir propiedades adicionales
      ).optional() // Hacer las imágenes opcionales en actualización
    }).unknown(true) // Permitir propiedades adicionales
  ).optional(),

}).min(1); // Requerir al menos un campo para actualizar

module.exports = {
  productJoiSchema,
  updateProductJoiSchema
}