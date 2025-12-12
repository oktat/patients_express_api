import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import PatientController from '../controllers/patientController.js';
import VisitController from '../controllers/visitController.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)

router.get('/patients', PatientController.index)
router.get('/patients/:id', PatientController.show)
router.post('/patients', PatientController.store)
router.put('/patients/:id', PatientController.update)
router.delete('/patients/:id', PatientController.destroy)


router.get('/visits', VisitController.index)
router.get('/visits/:id', VisitController.show)
router.post('/visits', VisitController.store)
router.put('/visits/:id', VisitController.update)
router.delete('/visits/:id', VisitController.destroy)


export default router
