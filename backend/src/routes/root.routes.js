import { Router } from 'express'
import { middleware } from '../middleware/root.middleware.js'
import { rootController } from '../controller/root.controller.js'

const router = Router()

router.post('/', middleware, rootController)
router.get('/get-from', (request, response) => { response.json({ success: true, message: 'get-from route working' }) })

export default router