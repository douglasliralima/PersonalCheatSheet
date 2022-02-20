import 'dart:math';

abstract class Shape {
  // You can put factories in abstaract classes as well
  factory Shape(String type) {
    if (type == 'circle') return Circle(2);
    if (type == 'square') return Square(2);
    throw 'Can\'t create $type.';
  }
  num get area;
}

class Circle implements Shape {
  final num radius;
  Circle(this.radius);
  num get area => pi * pow(radius, 2);
}

class Square implements Shape {
  final num side;
  Square(this.side);
  num get area => pow(side, 2);
}

Shape shapeFactory(String type) {
  if (type == 'circle') return Circle(2);
  if (type == 'square') return Square(2);
  throw 'Can\'t create $type.';
}

main() {
  Shape circle = Circle(2);
  Shape square = Square(2);
  print(circle.area);
  print(square.area);

  circle = shapeFactory('circle');
  square = shapeFactory('square');
  print(circle.area);
  print(square.area);

  circle = Shape('circle');
  square = Shape('square');
  print(circle.area);
  print(square.area);
}
