var Square = require("../src/square");

var square;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
  });
  describe("Draw", function() {
    it("should draw out two sides", function() {
      expect(square.draw()).toEqual("A shape with 4 sides");
    });
});

describe("To String", function() {
    it("should return the object in string form", function() {
      expect(square.toString()).toEqual("[Square sides:4, color:red ]");
    });
});

describe("Get RGB", function() {
    it("should return the object's color in RGB form", function() {
      expect(square.getRGB()).toEqual('rgb(255,0,0)');
    });
});

  // Write more specs!!
});
