const favoriteColor = R.pipe(
  R.groupBy(R.prop("color")),
  // {
  //   red: [
  //    { color: 'red', size: 'small' },
  //    { color: 'red', size: 'large' },
  //   ],
  //   blue: [
  //    { color: 'blue', size: 'small' },
  //   ]
  // }
  R.map(R.length),
  R.toPairs,
  R.sortBy(R.last),
  R.last,
  R.head
);