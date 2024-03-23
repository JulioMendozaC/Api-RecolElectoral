import Seccion from '../models/seccion.model.js'

// Todo Secciones

export const getSecciones = async (req, res) => {
    const data = await Seccion.find()
    res.json(data)
}

export const createSeccion = async (req, res) => {
    try {
        const { nombre, numero, lista_nominal} = req.body
        const nombre_clave = `${numero} - ${nombre}`
        const SeccionFound = await Seccion.findOne({ nombre })

        if (SeccionFound)
          return res.status(400).json(["El nombre de la seccion ya esta registrada"])

        const NumeroFound = await Seccion.findOne({ numero })

        if (NumeroFound)
          return res.status(400).json(["El numero de seccion ya esta registrado"])

        const newData = new Seccion({ nombre, numero, lista_nominal, nombre_clave})
        const saveDate = await newData.save()
        const data = await Seccion.find()
        res.json({
            msg: ['Seccion Creado', [saveDate]],
            data: data
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
        const { id } = req.params
        const { nombre, numero, lista_nominal} = req.body
        const nombre_clave = `${numero} - ${nombre}`

        const data = await Seccion.findByIdAndUpdate(id, {nombre, numero, lista_nominal, nombre_clave}, {
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
