const filterMarbles = R.curry((attribute, value, marbles) =>
  R.filter(R.propEq(attribute, value), marbles)
);

const reds = filterMarbles('color', 'red');
const filterByColor = filterMarbles('color');
const redMarbles = filterMarbles('color', 'red', marbles);