const highestPair = R.last;
const colorFromPair = R.head;
const countFromPair = R.last;

const favoriteColor = R.pipe(
  R.groupBy(R.prop("color")),
  R.map(length),
  R.toPairs,
  R.sortBy(countFromPair),
  highestPair,
  colorFromPair
);
