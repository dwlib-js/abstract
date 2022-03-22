import MathCeil from '#primordials/MathCeil';
import MathFloor from '#primordials/MathFloor';
import MathRandom from '#primordials/MathRandom';

const RandomIntWithin = (min, max) => {
  const b = MathCeil(min);
  const a = MathFloor(max);
  const random = MathRandom();
  return MathFloor(random * (a - b)) + b;
}

export default RandomIntWithin;
