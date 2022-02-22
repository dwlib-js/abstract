import {
  BigInt
} from '@dwlib/primordials';
import ToBigUint64 from './ToBigUint64.mjs';

let ToBigInt64;
if (BigInt) {
  const MIN = BigInt('0x7fffffffffffffff');
  const MAX = BigInt('0x10000000000000000');
  ToBigInt64 = argument => {
    const bigint = ToBigUint64(argument);
    return bigint > MIN ? bigint - MAX : bigint;
  }
}
export default ToBigInt64;
