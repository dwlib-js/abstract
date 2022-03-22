import BigInt from '#primordials/BigInt';
import RangeError from '#primordials/RangeError';
import ToBigInt from './ToBigInt.mjs';

const ZERO = BigInt(0);

const BigIntModulo = (x, y) => {
  const a = ToBigInt(x);
  const n = ToBigInt(y);
  if (n === ZERO) {
    throw new RangeError('Cannot divide by zero');
  }
  return ((a % n) + n) % n;
}

export default BigIntModulo;
