import mongoose from "mongoose"

const Schema = mongoose.Schema

const gameSchema = new Schema( {
  text:String,
  done: Boolean,
  dateCompleted: Date
})


const Game = mongoose.model('Game', gameSchema)

export {
  Game
}