function favoriteColor(marbles) {
  const counts = {};

  _.forEach(marbles, marble => {
    counts[marble.color] = (counts[marble.color] || 0) + 1;
  });

  let biggestNumber = 0;
  let biggestColor;

  _.forEach(counts, (count, color) => {
    if (count > biggestNumber) {
      biggestColor = color;
      biggestNumber = count;
    }
  });

  return biggestColor;
}
