import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import ToIntegerOrInfinity from './ToIntegerOrInfinity.mjs';

const MAX_SAFE_INTEGER = GetIntrinsicOrThrow('Number.MAX_SAFE_INTEGER');

const ToLength = argument => {
  const number = ToIntegerOrInfinity(argument);
  return number <= 0 ? 0 : number >= MAX_SAFE_INTEGER ? MAX_SAFE_INTEGER : number;
}

export default ToLength;
