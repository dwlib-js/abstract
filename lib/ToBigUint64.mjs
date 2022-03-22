import BigInt from '#primordials/BigInt';
import BigIntModulo from './BigIntModulo.mjs';

const MAX = BigInt('0x10000000000000000');

const ToBigUint64 = argument => BigIntModulo(argument, MAX);

export default ToBigUint64;
