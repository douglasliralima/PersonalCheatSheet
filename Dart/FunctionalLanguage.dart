String scream(int length) => "A${'a' * length}h!";

main() {
  final values = [1, 2, 3, 5, 10, 50];

  // for (var length in values) {
  //   print(scream(length));
  // }
  // The core List and Iterable classes support fold(), where(), join(), skip(), and more
  values.skip(1).take(3).map(scream).forEach(print);
}
