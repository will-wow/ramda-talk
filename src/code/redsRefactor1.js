const isRed = (marble) => marble.color === 'red';

function reds(marbles) {
  return R.filter(isRed, marbles);
}