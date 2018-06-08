const favoriteColor = R.pipe(
  R.groupBy(R.prop("color")),
  R.map(length),
  R.toPairs,
  R.sortBy(last),
  // [
  //   ['blue', 1],
  //   ['red', 2],
  // }
  R.last,
  R.head
);
