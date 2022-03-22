import BigInt from '#primordials/BigInt';
import ToBigUint64 from './ToBigUint64.mjs';

const MAX = BigInt('0x10000000000000000');
const MIN = BigInt('0x7fffffffffffffff');

const ToBigInt64 = argument => {
  const bigint = ToBigUint64(argument);
  return bigint > MIN ? bigint - MAX : bigint;
}

export default ToBigInt64;
