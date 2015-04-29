'use strict';
describe('game', function() {
  var game;
  beforeEach(function() {
    game = new app.Game();
  });

  describe( "default attributes", function() {
    it("should set certain defaults", function() {
      expect(game.get("board").length).toEqual(9);
    });     
  });

  describe( "#updateState", function() {
    it("should add the mark of the player that moved into the correct index in the array and tell the board to update its state", function() {
      game.updateState(0);
      expect(game.get("board")[0]).toEqual("X")
    });     
  });

  describe( "#player", function() {
    it("should return the mark of the current player", function() {
      expect(game.player()).toEqual("X")
    });     
  });

  describe( "#checkWinner", function() {
    it("should tell me if there is a winning combo on the board for the current player", function() {
      spyOn(game, "trigger")
      game.doTurn(0);
      game.doTurn(1);
      game.doTurn(2);
      expect(game.gameOver()).toBe(false);
    });     
  });

  describe( "#checkWinner", function() {
    it("should tell me if there is a winning combo on the board for the current player (vertical)", function() {
      spyOn(game, "trigger");
      game.doTurn(0);
      game.doTurn(1);
      game.doTurn(2);    
      game.doTurn(3);
      game.doTurn(4);
      game.doTurn(5);
      game.doTurn(6);
      expect(game.trigger).toHaveBeenCalledWith("win", "X")
    });     
  });

  describe( "#checkWinner", function() {
    it("should tell me if there is a winning combo on the board for the current player (diagonal)", function() {
      spyOn(game, "trigger");
      game.doTurn(0);
      game.doTurn(1);
      game.doTurn(4);
      game.doTurn(2);
      game.doTurn(8);
      expect(game.trigger).toHaveBeenCalledWith("win", "X")
    });     
  });
});
