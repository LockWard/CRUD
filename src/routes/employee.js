import { Router } from "express";
import {getEmployees, postEmployees, putEmployees, deleteEmployees, getEmployee} from '../controllers/employee.js'
const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)
router.post('/employees', postEmployees)
router.put('/employees/:id', putEmployees)
router.delete('/employees/:id', deleteEmployees)

export default router