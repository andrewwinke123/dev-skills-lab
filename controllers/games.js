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

function newGame(req, res) {
  res.render('games/new')
}

function create(req, res) {
  console.log(req.body)
  req.body.done = false
  Game.create(req.body)
  .then(game => {
    res.redirect('/games')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/games')
  })
}

function show(req, res) {
  Game.findById(req.params.gameId)
  .then(game => {
    res.render('games/show', {
      game: game
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/games')
  })
}

export {
  index,
  newGame as new,
  create,
  show
}