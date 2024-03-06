import Coordinador from '../models/coordinador.model.js'

// Todo Coordinadores

export const getCoordinadores = async (req, res) => {
    const data = await Coordinador.find()
    res.json(data)
}

export const createCoordinador = async (req, res) => {
    try {
        const { nombre } = req.body

        const coordinadorFound = await Coordinador.findOne({ nombre })

        if (coordinadorFound)
          return res.status(400).json(["El coordinador ya existe"])

        const newData = new Coordinador({ nombre })
        const saveDate = await newData.save()

        res.json({
            msg: ['Coordinador Creado', [saveDate]]
        })
        
    } catch (error) {
        return res.status(404).json({ message: "Error al crear el Coordinador" })
    }
}

export const getCoordinador = async (req, res) => {
    try {
        const data = await Coordinador.findById(req.params.id);
        if (!data) return res.status(404).json({ message: 'data no found' })
        res.json(data)
    } catch (error) {
        return res.status(404).json({ message: "data no found" })
    }
}

export const deleteCoordinador = async (req, res) => {
    try {
        const data = await Coordinador.findByIdAndDelete(req.params.id);
        return res.json({
            msg: ['Datos eliminados correctament']
        })

    } catch (error) {
        return res.status(404).json({ message: "data no found" })

    }
};

export const updateCoordinador = async (req, res) => {
    try {
        const data = await Coordinador.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!data) return res.status(404).json({ message: 'data no found' })
        res.json({
            msg: ['Datos actualizados'],
            data: [data]
        })
    } catch (error) {
        return res.status(404).json({ message: "data no found" })

    }
};
