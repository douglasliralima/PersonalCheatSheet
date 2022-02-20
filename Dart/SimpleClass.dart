class Bicycle {
  Bicycle(this.cadence, this.gear);

  // This code above is the same as this bellow
  // Bicycle(int cadence, int speed, int gear)
  //     : this.cadence = cadence,
  //       this.speed = speed,
  //       this.gear = gear;

  int cadence;
  int gear;
  //read-only attributes is with underscore, they can be accessed creating a get method
  int _speed = 0;
  int get speed => _speed;

  void applyBrake(int decrement) {
    _speed -= decrement;
  }

  void speedUp(int increment) {
    _speed += increment;
  }

  @override
  String toString() =>
      'Bicycle of cadence $cadence and gear $gear: $_speed mph';
}

// The list of args is passed throught List<String> args
// The dart code is executed in this void main method
void main(List<String> args) {
  var bike = Bicycle(2, 1);
  bike.speedUp(10);
  bike.applyBrake(5);
  print(bike);
}
