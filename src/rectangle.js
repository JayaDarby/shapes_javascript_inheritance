var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.
function Rectangle(sideLength1, sideLength2, color) {
  Shape.call(this,4, color);
  this.sideLength1 = sideLength1;
  this.sideLength2 =  sideLength2;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
    return this.sideLength1 * this.sideLength2;
};

Rectangle.prototype.perimeter = function(){
    return (this.sideLength1* this.sides/2)  + (this.sideLength2 * this.sides/2);
};

Rectangle.prototype.draw = function() {
   return "A shape with " + this.sides + " sides";
};

Rectangle.prototype.toString = function() {
  return "[Rectangle sides:" + this.sides + ", color:" + this.color +" ]"
};

module.exports = Rectangle;