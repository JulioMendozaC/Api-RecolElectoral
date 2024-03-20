import Data from '../models/data.model.js'

export const getDataByNombre = async (req, res) => {

    const { nombreCompleto } = req.body

    const data = await Data.find({ nombreCompleto:{
        $eq : nombreCompleto
    } })
    console.log(data.length)
    res.json(data)
}

export const getDataByClave = async (req, res) => {

    const { nombreCompleto } = req.body

    const data = await Data.find({ nombreCompleto:{
        $eq : nombreCompleto
    } })
    console.log(data.length)
    res.json(data)

}
