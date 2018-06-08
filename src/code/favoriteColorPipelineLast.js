const favoriteColor = R.pipe(
  R.groupBy(R.prop("color")),
  R.map(length),
  R.toPairs,
  R.sortBy(last),
  R.last,
  // ['red', 2],
  R.head
);
