import {
  NumberMAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER
} from '@dwlib/primordials';
import ToIntegerOrInfinity from './ToIntegerOrInfinity.mjs';

const ToSafeInteger = argument => {
  const number = ToIntegerOrInfinity(argument);
  return number <= NumberMIN_SAFE_INTEGER ? NumberMIN_SAFE_INTEGER :
    number >= NumberMAX_SAFE_INTEGER ? NumberMAX_SAFE_INTEGER : number;
}
export default ToSafeInteger;
