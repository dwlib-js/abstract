import ToLength from './ToLength.mjs';

const LengthOfArrayLike = object => {
  const length = object.length;
  return ToLength(length);
}

export default LengthOfArrayLike;
