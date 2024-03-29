import Data from '../models/data.model.js'
import Seccion from '../models/seccion.model.js'
import Promotor from '../models/Promotor.model.js'
import Coordinador from '../models/coordinador.model.js'

// Todo:: Promividos

export const getDatas = async (req, res) => {
    const data = await Data.find()
    res.json(data)

}

export const getAllData = async (req, res) => {
    try {
        const seccion = await Seccion.find()
        const promotor = await Promotor.find()
        const coordinador = await Coordinador.find()

        res.json({
            coordinador: coordinador,
            promotor: promotor,
            seccion: seccion
        })

    } catch (error) {
        return res.status(404).json({ message: "data no found" })
    }
}

export const createData = async (req, res) => {

    const { nombre, apellido_p, apellido_m, curp, fecha_nacimiento, sexo, telefono, calle, No_ext, No_int, colonia_barrio, codigo_postal, clave_electoral, seccion, fecha_vigencia, coordinador, promotor } = req.body

    const nombreCompleto = `${nombre} ${apellido_p} ${apellido_m}`

    const newData = new Data({
        nombre, apellido_p, apellido_m, nombreCompleto,curp, fecha_nacimiento, sexo, telefono, calle, No_ext, No_int, colonia_barrio, codigo_postal, clave_electoral, seccion, fecha_vigencia, coordinador, promotor
    })

    const saveDate = await newData.save()
    const data = await Data.find()

    res.json({
        msg: ['Datos creados correctament', [saveDate]],
        data: [data]
    })

}


export const getData = async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        if (!data) return res.status(404).json({ message: 'data no found' })
        res.json(data)
    } catch (error) {
        return res.status(404).json({ message: "data no found" })
    }
}

export const deleteData = async (req, res) => {
    try {
        const data = await Data.findByIdAndDelete(req.params.id);
        return res.json({
            msg: ['Datos eliminados correctament']
        })

    } catch (error) {
        return res.status(404).json({ message: "data no found" })

    }
};


export const updatedata = async (req, res) => {
    const { id } = req.params
    const { nombre, apellido_p, apellido_m,curp, fecha_nacimiento, sexo, telefono, calle, No_ext, No_int, colonia_barrio, codigo_postal, clave_electoral, seccion, fecha_vigencia, coordinador, promotor } = req.body

    const nombreCompleto = `${nombre} ${apellido_p} ${apellido_m}`

    try {
        const data = await Data.findByIdAndUpdate(id, {nombre, apellido_p, apellido_m, nombreCompleto, curp, fecha_nacimiento, sexo, telefono, calle, No_ext, No_int, colonia_barrio, codigo_postal, clave_electoral, seccion, fecha_vigencia, coordinador, promotor}, {
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


export const deleteAllData = async (req, res) => {
    try {
       const data = await Data.deleteMany();
        return res.json({
            msg: ['Datos eliminados correctament']
        })

    } catch (error) {
        return res.status(404).json({ message: "action no found" })

    }
};
