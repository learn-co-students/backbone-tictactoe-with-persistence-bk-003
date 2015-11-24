(function() {
  app.GameView = Backbone.View.extend({
    events: {
      "click td": "handleClick",
      "click #lastGame": 'showLastGame'
    },
    initialize: function() {
      this.game = new app.Game();
      this.listenTo(this.game, 'X', this.drawX),
      this.listenTo(this.game, 'O', this.drawO),
      this.listenTo(this.game, 'win', this.win),
      this.listenTo(this.game, 'tie', this.tie),
      this.render();
      $('#container').html(this.el)
    },
    render: function() {
      this.$el.html('<div id="message"></div><table border="1" cellpadding="40"><tbody><tr><td id="0"></td><td id="1"></td><td id="2"></td></tr><tr><td id="3"></td><td id="4"></td><td id="5"></td></tr><tr><td id="6"></td><td id="7"></td><td id="8"></td></tr></tbody></table><button id="lastGame">Show Me Last Games Results!</button><div id="lastGameBox"></div></body>')
      return this;
    },
    handleClick: function(e) {
      this.game.doTurn(Number(e.target.id))
    },
    drawX: function(id) {
      $('#'+id).html('X')
    },
    drawO: function(id) {
      $('#'+id).html('O')
    },
    tie: function() {
      this.message('Tie game')
    },
    win: function() {
      this.message('Player ' + this.game.player()+ ' Wins!')
    }, 
    message: function(message) {
      $('#message').html(message)
      this.clearBoard()
    },
    clearBoard: function() {
      var arr = this.game.get('board')
      var string = ''
      arr.forEach(function(elem, index){
        if (elem != null){
          string = string + elem
        } else {
          string = string + '-'
        }
        index == 2 || index == 5 ? string = string + '<br>' : ''
        $("#" + index).text('');
      })
      this.game.clear()
      this.game.set(this.game.defaults()) 
      this.game.set('lastGame', string)
    },
    showLastGame: function(){
      $('#lastGameBox').html(this.game.get('lastGame'))
    }
  });
})();