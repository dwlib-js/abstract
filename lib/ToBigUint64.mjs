import {
  BigInt
} from '#primordials';
import BigIntModulo from './BigIntModulo.mjs';

let ToBigUint64;
if (BigInt) {
  const MAX = BigInt('0x10000000000000000');
  ToBigUint64 = argument => BigIntModulo(argument, MAX);
}
export default ToBigUint64;
