import { Router } from 'express'

import * as gamesCtrl from '../controllers/games.js'

const router = Router()


// GET localhost:3000/gamess
router.get('/', gamesCtrl.index) 

export { router }