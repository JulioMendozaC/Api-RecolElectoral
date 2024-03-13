import Data from '../models/data.model.js'
import Seccion from '../models/seccion.model.js'


export const getEstadisticas = async (req, res) => {

    try {

        const data = await Data.find({}, 'sexo fecha_nacimiento seccion');
        const lista_nominal = await Seccion.find({}, 'nombre lista_nominal')

        res.json({
            Data: data,
            Seccion: lista_nominal

        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getEstadisticasSeccion = async (req, res) => {

    try {

        const { seccion } = req.body
        let nombre = seccion

        const data = await Data.find({ seccion }, 'sexo fecha_nacimiento seccion ');
        const lista_nominal = await Seccion.findOne({ nombre }, 'nombre lista_nominal')

        res.json({
            msg: ['Seccion encontrada'],
            Data: data,
            Seccion: lista_nominal

        })

    } catch (
    error) {
        return res.status(500).json({ message: error.message });
    }
}
