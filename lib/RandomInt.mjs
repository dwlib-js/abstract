import MathCeil from '#primordials/MathCeil';
import MathFloor from '#primordials/MathFloor';
import MathRandom from '#primordials/MathRandom';

const RandomInt = (...args) => {
  if (args.length > 1) {
    const min = args[0];
    const max = args[1];
    const b = MathCeil(min);
    const a = MathFloor(max);
    const random = MathRandom();
    return MathFloor(random * (a - b)) + b;
  }
  const max = args[0];
  const factor = max === undefined ? 100 : MathFloor(max);
  const random = MathRandom();
  return MathFloor(random * factor);
}

export default RandomInt;
