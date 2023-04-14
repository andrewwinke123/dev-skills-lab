import { Router } from 'express'

import * as gamesCtrl from '../controllers/games.js'

const router = Router()


// GET localhost:3000/gamess
router.get('/', gamesCtrl.index) 
router.get('/', gamesCtrl.index)
router.get('/new', gamesCtrl.new)
router.get('/:gameId', gamesCtrl.show)
router.post('/', gamesCtrl.create)
router.delete('/:gameId', gamesCtrl.delete)

export { router }