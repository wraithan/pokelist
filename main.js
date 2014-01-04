var Backbone = require('./vendor/backbone')
  , jQuery = require('./vendor/jquery')
  , games_views = require('./views/games')


var Router = Backbone.Router.extend({
  routes: {
    'games': 'games'
  },
  games: function() {
    var gv = new games_views.GamesList()
    jQuery('body').append(gv.render().el)
  }
})

var myRouter = new Router()

Backbone.history.start()