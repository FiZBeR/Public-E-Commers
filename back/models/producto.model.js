const { Schema, model } = require('mongoose');

/**
 * @description Sub-schema for defining physical print layouts (estampados) available for a product.
 * Contains a reference code and an array of preview images.
 */
const EstampadoSchema = Schema({
    codigo: {
        type: String,
        required: true
    },
    imagenRef: {
        type: String,
        default: "default.png"
    },
    imagenes: [
        {
            url: {
                type: String,
                default: "default.png"
            },
            orden: {
                type: Number,
                required: true
            }
        }
    ]
})

/**
 * @description Sub-schema for defining color variations available for a product.
 * Contains a color code and an array of preview images with specific ordering.
 */
const ColorSchema = Schema({
    codigo: {
        type: String,
        required: true
    },
    imagenRef: {
        type: String,
        default: "default.png"
    },
    imagenes: [
        {
            url: {
                type: String,
                default: "default.png"
            },
            orden: {
                type: Number,
                required: true
            }
        }
    ]
})

/**
 * @description Sub-schema to store the available stock quantities across standard clothing sizes (S, M, L, XL, U).
 */
const TallasSchema = Schema({
    S: {
        type: Number,
        required: true
    },
    M: {
        type: Number,
        required: true
    },
    L: {
        type: Number,
        required: true
    },
    XL: {
        type: Number,
        required: true
    },
    U: {
        type: Number,
        required: true
    }
})

/**
 * @description Main Mongoose schema for the Producto model.
 * Aggregates tallas, colores, and estampados along with general metadata like references, prices, and categories.
 */
const ProductoSchema = Schema({
    referencia: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    tallas: TallasSchema,
    colores: {
        type: [ColorSchema]
    },
    estampados: {
        type: [EstampadoSchema]
    },
    precio: {
        type: Number,
        required: true
    }
});

module.exports = model("Producto", ProductoSchema, "productos");