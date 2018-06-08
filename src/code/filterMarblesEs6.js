function isMatchingMarble(marble, attribute, value) {
  return marble[attribute] === value;
}

function filterMarbles(marbles, attribute, value) {
  return marbles.filter(marble => isMatchingMarble(marble, attribute, value));
}

function reds(marbles) {
  return filterMarbles(marbles, "color", "red");
}
