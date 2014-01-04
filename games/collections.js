var Backbone = require('../vendor/backbone')
  , models = require('../games/models')

var GamesCollection = Backbone.Firebase.Collection.extend({
  model: models.Game
, firebase: 'https://wraith-pokedex.firebaseio.com/public/games'
})

module.exports = {
  'GamesCollection': GamesCollection
}