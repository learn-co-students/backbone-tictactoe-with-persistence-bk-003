(function() {
  app.GameView = Backbone.View.extend({
    events: {
      "click": "handleClick"
    },
    initialize: function() {
      this.game = new app.Game();
      // your code here
    },
    render: function() {
      // your code here
    },
    handleClick: function(e) {
      // your code here
    },
    drawX: function(id) {
      // your code here
    },
    drawO: function(id) {
      // your code here
    },
    message: function(message) {
      this.$("#message").html(message)
    },
    clearBoard: function() {
      // your code here
    }
  });
})();