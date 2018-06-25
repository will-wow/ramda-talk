export const mode = R.pipe(
  // ["red", "blue", "red"]
  R.groupBy(R.identity),
  // {red: ["red", "red"], blue: ["blue"]}
  R.map(R.length),
  // {red: 2, blue: 1}
  R.toPairs,
  // [["red", 2], ["blue", 1]]
  sortByCount,
  // [["blue", 1], ["red", 2]]
  highestPair,
  // ["red", 2]
  valueFromPair
  // "red"
)(["red", "blue", "red"]);
