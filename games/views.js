var Backbone = require('../vendor/backbone')
  , collections = require('./collections')

var GameView = Backbone.View.extend({
  tagName: 'li'
, render: function() {
    this.el.textContent = this.model.get('name') + ' is generation ' + this.model.get('generation')
    return this
  }
})

var GamesList = Backbone.View.extend({
  tagName: 'ul'
, initialize: function() {
    this.gc = new collections.GamesCollection()
    this.listenTo(this.gc, 'add', this.addOne)
  }
, addOne: function(game) {
    var view = new GameView({model: game})
    this.el.appendChild(view.render().el)
  }
, render: function() {
    this.gc.each(this.addOne, this)
    return this
  }
})

module.exports = {
  'GameView': GameView
, 'GamesList': GamesList
}