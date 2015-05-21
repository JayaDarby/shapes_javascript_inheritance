var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

describe("Area", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
});

describe("Perimeter", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.perimeter()).toEqual(0);
    });
});

describe("Draw", function() {
    it("should draw out one side", function() {
      expect(shape.draw()).toEqual("A shape with 1 sides");
    });
});

describe("To String", function() {
    it("should return the object in string form", function() {
      expect(shape.toString()).toEqual("[Shape sides:1, color:red ]");
    });
});

describe("Get RGB", function() {
    it("should return the object's color in RGB form", function() {
      expect(shape.getRGB()).toEqual('rgb(255,0,0)');
    });
});

  // Write more specs!!
});
