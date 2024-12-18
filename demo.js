const greet = function(greeting) {
  return function(name) {
    return greeting + " " + name;
  }
}