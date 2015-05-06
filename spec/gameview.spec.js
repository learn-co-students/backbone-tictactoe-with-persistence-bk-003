'use strict';
describe('board', function() {
  beforeEach(function() {

  });

  describe( "#initialize", function() {
    it("should set the game property of the view to be an instance of the game model", function() {
      var gameView = new app.GameView;
      expect(gameView.game).not.toBeUndefined();
    });     
  });

  describe( "#initialize", function() {
    it("should wire up the X event listeners on the model", function() {
      var spy = spyOn(app.GameView.prototype, "drawX");
      var gameView = new app.GameView;
      gameView.game.trigger("X");
      expect(spy).toHaveBeenCalled();
    });     
  });

  describe( "#initialize", function() {
    it("should wire up the O event listeners on the model", function() {
      var spy = spyOn(app.GameView.prototype, "drawO");
      var gameView = new app.GameView;
      gameView.game.trigger("O");
      expect(spy).toHaveBeenCalled();
    });     
  });

  describe( "#initialize", function() {
    it("should wire up the tie event listeners on the model", function() {
      var spy = spyOn(app.GameView.prototype, "tie");
      var gameView = new app.GameView;
      gameView.game.trigger("tie");
      expect(spy).toHaveBeenCalled();
    });     
  });

  describe( "#initialize", function() {
    it("should wire up the win event listeners on the model", function() {
      var spy = spyOn(app.GameView.prototype, "win")
      var gameView = new app.GameView;
      gameView.game.trigger("win");
      expect(spy).toHaveBeenCalled();
    });     
  });

  describe( "#initialize", function() {
    it("should call render", function() {
      var gameView = new app.GameView;
      spyOn(gameView, "addIds");
      gameView.initialize();
      expect(gameView.addIds).toHaveBeenCalled();
    });     
  });

  describe( "#initialize", function() {
    it("should add the ids to the dom", function() {
      var gameView = new app.GameView;
      spyOn(gameView, "render");
      gameView.initialize();
      expect(gameView.render).toHaveBeenCalled();
    });     
  });

  describe( "#render & addIds", function() {
    it("should create a board in HTML when its initialized", function() {
      setFixtures("<body></body>"); 
      var gameView = new app.GameView;
      expect($("body")).toContainHtml('<table border="1" cellpadding="40"><tbody><tr><td id="0"></td><td id="1"></td><td id="2"></td></tr><tr><td id="3"></td><td id="4"></td><td id="5"></td></tr><tr><td id="6"></td><td id="7"></td><td id="8"></td></tr></tbody></table>');
    });     
  });

  describe( "#handleClick", function() {
    it("should tell the game what element was clicked", function() {
      setFixtures("<body></body>");
      var gameView = new app.GameView;
      spyOn(gameView.game, "doTurn")
      $("#3").click()
      expect(gameView.game.doTurn).toHaveBeenCalledWith(3)
    });     
  });

  xdescribe( "#drawO", function() {
    it("should add ids to your elements", function() {
      // setFixtures('<body></body>');
      // board.buildBoard();
      // board.addIds();
      // var myElements = $(selector);
      // myElements.each(function(index, element) {
      //   expect($(element)).toHaveId(index);
      // });
    });     
  });

  xdescribe( "#drawX", function() {
    it("should add content to your element", function() {
      // setFixtures('<body></body>');
      // board.buildBoard();
      // board.addIds();
      // board.updateCell(0, "X");
      // expect($("#0")).toHaveHtml("X");
    });     
  });

  xdescribe( "#addEvents", function() {
    it("should add click handlers to your elements", function() {
      // setFixtures('<body></body>');
      // board.buildBoard();
      // board.addIds();
      // board.addEvents();
      // var myElements = $(selector); 
      // expect($(myElements[0])).toHandle("click");
    });     
  });
});
