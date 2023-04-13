import { Game } from '../models/game.js'


function index(req, res) {
  Game.find({})
  .then(games => {
    res.render('games/index', {
      games: games,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
}