import Seccion from '../models/seccion.model.js'

// Todo Secciones

export const getSecciones = async (req, res) => {
    const data = await Seccion.find()
    res.json(data)
}

export const createSeccion = async (req, res) => {
    try {
        const { nombre, numero} = req.body


        const newData = new Seccion({ nombre, numero })
        const saveDate = await newData.save()

        res.json({
            msg: ['Seccion Creado', [saveDate]]
        })
        
    } catch (error) {
        return res.status(404).json({ message: "Error al crear el Seccion" })
    }
}

export const getSeccion = async (req, res) => {
    try {
        const data = await Seccion.findById(req.params.id);
        if (!data) return res.status(404).json({ message: 'data no found' })
        res.json(data)
    } catch (error) {
        return res.status(404).json({ message: "data no found" })
    }
}

export const deleteSeccion = async (req, res) => {
    try {
        const data = await Seccion.findByIdAndDelete(req.params.id);
        return res.json({
            msg: ['Datos eliminados correctament']
        })

    } catch (error) {
        return res.status(404).json({ message: "data no found" })

    }
};

export const updateSeccion = async (req, res) => {
    try {
        const data = await Seccion.findByIdAndUpdate(req.params.id, req.body, {
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
