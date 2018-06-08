const favoriteColor = R.pipe(
  R.groupBy(R.prop("color")),
  R.map(R.length),
  R.toPairs,
  R.sortBy(R.last),
  R.last,
  R.head
  // 'red'
);
