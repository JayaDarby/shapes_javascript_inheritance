var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(this,4, color);
  this.sideLength = sideLength;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.area = function(){
    return this.sideLength * this.sideLength;
};

Square.prototype.perimeter = function(){
    return this.sides * this.sideLength;
};

Square.prototype.draw = function() {
   return "A shape with " + this.sides + " sides";
};

Square.prototype.toString = function() {
  return "[Square sides:" + this.sides + ", color:" + this.color +" ]"
};
// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

module.exports = Square;

