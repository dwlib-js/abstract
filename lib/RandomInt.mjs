import MathFloor from '#primordials/MathFloor';
import MathRandom from '#primordials/MathRandom';

const RandomInt = max => {
  const factor = max === undefined ? 100 : MathFloor(max);
  const random = MathRandom();
  return MathFloor(random * factor);
}

export default RandomInt;
