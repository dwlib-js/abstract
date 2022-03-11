import {
  MathFloor
} from '#primordials';
import ToNumber from './ToNumber.mjs';

const ToUint8Clamp = argument => {
  const number = ToNumber(argument);
  if (!number || number < 0) {
    return 0;
  }
  if (number >= 0xff) {
    return 0xff;
  }
  const integer = MathFloor(number);
  return integer + 0.5 < number ? integer + 1 :
    number < integer + 0.5 ? integer :
    integer % 2 ? integer + 1 : integer;
}
export default ToUint8Clamp;
