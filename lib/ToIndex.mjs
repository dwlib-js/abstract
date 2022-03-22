import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import RangeError from '#primordials/RangeError';
import ToIntegerOrInfinity from './ToIntegerOrInfinity.mjs';

const MAX_SAFE_INTEGER = GetIntrinsicOrThrow('Number.MAX_SAFE_INTEGER');

const ToIndex = argument => {
  const number = ToIntegerOrInfinity(argument);
  if (number < 0 || number > MAX_SAFE_INTEGER) {
    throw new RangeError('Index out of range');
  }
  return number;
}

export default ToIndex;
