import { Router } from "express";
import {pool} from '../cn.js'

const router = Router()

router.get('/ping', async (req, res) => {
    const [result] = await pool.query('select 1 + 1 AS Result')
    res.json(result)
})

export default router