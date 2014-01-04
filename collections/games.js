var Backbone = require('../vendor/backbone')
  , games_models = require('../models/games')

var GamesCollection = Backbone.Firebase.Collection.extend({
  model: games_models.Game
, firebase: 'https://wraith-pokedex.firebaseio.com/public/games'
})

module.exports = {
  'GamesCollection': GamesCollection
}