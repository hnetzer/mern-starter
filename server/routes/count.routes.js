import { Router } from 'express'
import * as CountController from '../controllers/count.controller'
const router = new Router()

router.route('/counter').get(CountController.getCount)

router.route('/counter/increment').post(CountController.incrementCount)

export default router
