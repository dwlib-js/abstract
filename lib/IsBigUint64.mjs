import {
  BigInt
} from '@dwlib/primordials';
import IsBigInt from './IsBigInt.mjs';

let IsBigUint64;
if (BigInt) {
  const ZERO = BigInt(0);
  const MAX = BigInt('0xffffffffffffffff');
  IsBigUint64 = argument => IsBigInt(argument) && argument >= ZERO && argument <= MAX;
} else {
  IsBigUint64 = () => false;
}
export default IsBigUint64;
