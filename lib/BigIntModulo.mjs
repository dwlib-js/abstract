import {
  BigInt,
  RangeError
} from '#primordials';
import ToBigInt from './ToBigInt.mjs';

let BigIntModulo;
if (BigInt) {
  const ZERO = BigInt(0);
  BigIntModulo = (x, y) => {
    const a = ToBigInt(x);
    const n = ToBigInt(y);
    if (n === ZERO) {
      throw new RangeError('Cannot divide by zero');
    }
    return ((a % n) + n) % n;
  }
}
export default BigIntModulo;
