var Backbone = require('./vendor/backbone')
var jQuery = require('./vendor/jquery')

var Game = Backbone.Model.extend({
  initialize: function(){
    console.log('Game ' + this.get('name') + ' initialized.')
  }
})

var GamesCollection = Backbone.Collection.extend({
  model: Game
, url: '/public/games'
})

var GamesView = Backbone.View.extend({
  tagName: 'li'
, render: function() {
    this.el.textContent = this.model.get('name') + ' is generation ' + this.model.get('generation')
    return this
  }
})

var Router = Backbone.Router.extend({
  routes: {
    'games': 'games'
  },
  games: function() {
    var gv = new GamesView({model: new Game({name: 'Y', generation: 6})})
    gv.render()
    jQuery('body').append(gv.$el)
  }
})

var myRouter = new Router()

Backbone.history.start()