import Patient from '../models/patient.js'

const PatientController = {
    async index(req, res) {
        try {
            await PatientController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const patients = await Patient.findAll()
        res.status(200)
        res.json({
            success: true,
            data: patients
        })
    },
    async show(req, res) {
        try {
            await PatientController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const patient = await Patient.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: patient
        })
    },
    async store(req, res) {
        try {
            await PatientController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        if(req.body.id) {
            delete req.body.id
        }        
        const patient = await Patient.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: patient
        })
    },
    async update(req, res) {
        try {
            await PatientController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        if(req.body.id) {
            delete req.body.id
        }        
        const recordNumber = await Patient.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const patient = await Patient.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: patient
        })
    },
    async destroy(req, res) {
        try {
            await PatientController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const patient = await Patient.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: patient
        })
    }
}

export default PatientController