import Promotor from '../models/Promotor.model.js'

// Todo Promotores

export const getPromotores = async (req, res) => {
    const data = await Promotor.find()
    res.json(data)
}

export const createPromotor = async (req, res) => {
    try {
        const { nombre, apellido_pat, apellido_mat } = req.body


        const nombreCompleto = `${nombre} ${apellido_pat} ${apellido_mat}`

        const newData = new Promotor({ nombre, apellido_pat, apellido_mat, nombreCompleto })
        const saveDate = await newData.save()
        const promotor = await Promotor.find()

        res.json({
            msg: ['Promotor Creado'],
            data: [promotor]
        })



    } catch (error) {
        return res.status(404).json({ message: "Error al crear el promotor" })
    }
}

export const getPromotor = async (req, res) => {
    try {
        const data = await Promotor.findById(req.params.id);
        if (!data) return res.status(404).json({ message: 'data no found' })
        res.json(data)
    } catch (error) {
        return res.status(404).json({ message: "data no found" })
    }
}

export const deletePromotor = async (req, res) => {
    try {
        const data = await Promotor.findByIdAndDelete(req.params.id);
        return res.json({
            msg: ['Datos eliminados correctament']
        })

    } catch (error) {
        return res.status(404).json({ message: "data no found" })

    }
};

export const updatePromotor = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, apellido_pat, apellido_mat } = req.body
        const nombreCompleto = `${nombre} ${apellido_pat} ${apellido_mat}`

        const data = await Promotor.findByIdAndUpdate(id, {nombre, apellido_pat, apellido_mat, nombreCompleto}, {
            new: true
        });
        if (!data) return res.status(404).json({ message: 'data no found' })

        const promotor = await Promotor.find()
        res.json({
            msg: ['Datos actualizados', data],
            data: [promotor]
        })
    } catch (error) {
        return res.status(404).json({ message: "data no found" })

    }
};
