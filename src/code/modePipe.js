const highestPair = R.last;
const valueFromPair = R.head;
const countFromPair = R.last;
const sortByCount = R.sortBy(countFromPair);

export const mode = R.pipe(
  R.groupBy(R.identity),
  R.map(R.length),
  R.toPairs,
  sortByCount,
  highestPair,
  valueFromPair
);

mode(["red", "blue", "red"]); // red
