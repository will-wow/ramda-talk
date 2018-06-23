const highestPair = R.last;
const colorFromPair = R.head;
const countFromPair = R.last;

const favoriteColor = R.pipe(
  R.groupBy(R.prop("color")),
  R.map(R.length),
  R.toPairs,
  R.sortBy(countFromPair),
  highestPair,
  colorFromPair
);

favoriteColor([
  { color: "red", size: "small" },
  { color: "blue", size: "small" },
  { color: "red", size: "large" }
]); // red
