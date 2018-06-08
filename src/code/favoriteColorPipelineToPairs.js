const favoriteColor = R.pipe(
  R.groupBy(R.prop("color")),
  R.map(length),
  R.toPairs,
  // [
  //   ['red', 2],
  //   ['blue', 1],
  // }
  R.sortBy(last),
  R.last,
  R.head
);
