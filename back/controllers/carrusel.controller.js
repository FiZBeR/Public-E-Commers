const CarruselItems = require("../models/carrusel.model");

/**
 * @function getCarrusel
 * @description Retrieves all items currently stored in the carrusel.
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<import('express').Response>} JSON response containing the carrusel items
 */
const getCarrusel = async (req, res) => {
    try {
        const carruselItems = await CarruselItems.find();
        return res.status(200).json({ carruselItems });
    } catch (error) {
        console.error("Error in getCarrusel:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}


/**
 * @function createCarrusel
 * @description Creates or updates the carrusel with a completely new list of reference products.
 * @param {import('express').Request} req - Express request object containing an array of `productos`
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<import('express').Response>} JSON response confirming creation/update or error status
 */
const createCarrusel = async (req, res) => {

    console.log("Creando carrusel");
    const { productos } = req.body;
    console.log("req.body: ", req.body);

    try {


        const carruselActual = await CarruselItems.find();
        console.log("Carrusel en base de datos: ", carruselActual);

        if (carruselActual.length === 0) {

            console.log("Carrusel nuevo");
            console.log("req.body.productos: ", productos);
            if (!Array.isArray(productos) || productos.length === 0) {
                return res.status(400).json({ message: "La lista de productos es obligatoria." });
            }

            for (let i = 0; i < productos.length; i++) {
                const item = productos[i];
                console.log("Item: ", item);

                if (!item.referencia || typeof item.referencia !== "string" || item.referencia.trim() === "") {
                    return res.status(400).json({ message: `La referencia del producto en la posición ${i} es inválido.` });
                }
            }

            const newCarrusel = new CarruselItems({ productos });
            const carruselSaved = await newCarrusel.save();

            res.status(200).json({
                message: "Carrusel created successfully",
                carrusel: carruselSaved
            });

        } else {

            console.log("Actualizando Carrusel");
            console.log("carrusel actual: " + carruselActual + "_id: " + carruselActual[0]._id);
            const condicion = carruselActual[0]._id;

            if (!Array.isArray(productos) || productos.length === 0) {
                return res.status(400).json({ message: "La lista de productos es obligatoria." });
            }

            for (let i = 0; i < productos.length; i++) {
                const item = productos[i];

                if (!item.referencia || typeof item.referencia !== "string" || item.referencia.trim() === "") {
                    return res.status(400).json({ message: `El código del producto en la posición ${i} es inválido.` });
                }
            }

            const carruselSaved = await CarruselItems.findOneAndUpdate({ _id: condicion },
                { $set: { productos: productos } },
                { new: true, upsert: true });

            res.status(200).json({
                message: "Carrusel created successfully",
                carrusel: carruselSaved
            });
        }



    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error interno del servidor al guardar el carrusel",
        });
    }
}

/**
 * @function deleteItemCarrusel
 * @description Deletes a specific item from the carrusel. (Currently not implemented)
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<import('express').Response>} JSON response indicating "Not Implemented"
 */
const deleteItemCarrusel = async (req, res) => {
    return res.status(501).json({ message: "Endpoint no implementado aún" });
}

module.exports = {
    getCarrusel,
    createCarrusel,
    deleteItemCarrusel
}