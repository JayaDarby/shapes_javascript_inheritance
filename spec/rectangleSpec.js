var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4,6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a square with side lengths 4,6", function() {
      expect(rectangle.perimeter()).toEqual(20);
    });
  });
    describe("Draw", function() {
    it("should draw out two sides", function() {
      expect(rectangle.draw()).toEqual("A shape with 4 sides");
    });
});

describe("To String", function() {
    it("should return the object in string form", function() {
      expect(rectangle.toString()).toEqual("[Rectangle sides:4, color:blue ]");
    });
});

describe("Get RGB", function() {
    it("should return the object's color in RGB form", function() {
      expect(rectangle.getRGB()).toEqual('rgb(0,0,255)');
    });
});

  // Write more specs!!
});
