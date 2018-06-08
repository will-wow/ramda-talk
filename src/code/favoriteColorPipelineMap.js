const favoriteColor = R.pipe(
  R.groupBy(R.prop("color")),
  R.map(length),
  // {
  //   red: 2,
  //   blue: 1
  // }
  R.toPairs,
  R.sortBy(last),
  R.last,
  R.head
);