'use strict';
describe('board', function() {
  // you should have 9 elements on the page
  // on the next line, put the jquery selector to find those elements
  // replace with your jquery selector
  var selector = ".small-box"
  var board;
  var game;
  beforeEach(function() {
    board = new Board();
    game = new Game();
  });

  // the specs with xdescribe are suggested but not required functions
  xdescribe( "#createRowArray", function() {
    it("should do return an array of size x filled the element passed to it", function() {
      expect(board.createRowArray(3, "<tr>")).toEqual(["<tr>", "<tr>", "<tr>"]);
    });     
  });

  xdescribe( "#createRowArray", function() {
    it("should do return an array of size x filled the element passed to it", function() {
      expect(board.createColumnArray(3, "<td></td>")).toEqual(["<td></td>", "<td></td>", "<td></td>"]);
    });     
  });

  describe( "#init", function() {
    it("should call the buildboard function", function() {
      spyOn(board, "buildBoard");
      board.init();
      expect(board.buildBoard).toHaveBeenCalled();
    });     
  });

  describe( "#buildBoard", function() {
    it("should build a board", function() {
      setFixtures('<body></body>');
      board.buildBoard();
      var myElements = $(selector)
      expect(myElements.size()).toEqual(9);
    });     
  });

  describe( "#addIds", function() {
    it("should add ids to your elements", function() {
      setFixtures('<body></body>');
      board.buildBoard();
      board.addIds();
      var myElements = $(selector);
      myElements.each(function(index, element) {
        expect($(element)).toHaveId(index);
      });
    });     
  });

  describe( "#updateCell", function() {
    it("should add content to your element", function() {
      setFixtures('<body></body>');
      board.buildBoard();
      board.addIds();
      board.updateCell(0, "X");
      expect($("#0")).toHaveHtml("X");
    });     
  });

  describe( "#addEvents", function() {
    it("should add click handlers to your elements", function() {
      setFixtures('<body></body>');
      board.buildBoard();
      board.addIds();
      board.addEvents();
      var myElements = $(selector); 
      expect($(myElements[0])).toHandle("click");
    });     
  });
});
