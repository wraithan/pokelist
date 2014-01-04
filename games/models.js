var Backbone = require('../vendor/backbone')

var Game = Backbone.Model.extend({
  initialize: function(){
    console.log('Game ' + this.get('name') + ' initialized.')
  }
})

module.exports = {
	'Game': Game
}