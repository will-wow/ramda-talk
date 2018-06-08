// Normal
function add(n1, n2) {
  return n1 + n2;
}

add(1, 2) // 3

// Curried
function add(n1) {
  return function(n2) {
    return n1 + n2;
  }
}

add(1)(2) // 3