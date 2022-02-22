import {
  MathFloor
} from '@dwlib/primordials';
import ToNumber from './ToNumber.mjs';

const ToInteger = argument => {
  const number = ToNumber(argument);
  if (!number || number === Infinity || number === -Infinity || number > -1 && number < 1) {
    return 0;
  }
  const isNegative = number < 0;
  const integer = MathFloor(isNegative ? -number : number);
  return isNegative ? -integer : integer;
}
export default ToInteger;
