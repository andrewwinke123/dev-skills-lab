import { games } from '../data/games-data.js'

function index(req, res) {
  res.render('games/index', {
    games:games
  })
}

export {
  index,
}