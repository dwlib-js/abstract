import {
  MathCeil,
  MathFloor,
  MathRandom
} from '@dwlib/primordials';

const RandomInt = (...args) => {
  switch (args.length) {
    case 0: {
      const random = MathRandom();
      return MathFloor(random * 100);
    }
    case 1: {
      const [max] = args;
      const a = MathFloor(max);
      const random = MathRandom();
      return MathFloor(random * a);
    }
    default: {
      const [min, max] = args;
      const a = MathFloor(max);
      const b = MathCeil(min);
      const random = MathRandom();
      return MathFloor(random * (a - b)) + b;
    }
  }
}
export default RandomInt;
