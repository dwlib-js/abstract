import {
  NumberMAX_SAFE_INTEGER,
  RangeError
} from '@dwlib/primordials';
import ToIntegerOrInfinity from './ToIntegerOrInfinity.mjs';

const ToIndex = argument => {
  const number = ToIntegerOrInfinity(argument);
  if (number < 0 || number > NumberMAX_SAFE_INTEGER) {
    throw new RangeError('Index out of range');
  }
  return number;
}
export default ToIndex;
