import {
  NumberMAX_SAFE_INTEGER
} from '@dwlib/primordials';
import ToIntegerOrInfinity from './ToIntegerOrInfinity.mjs';

const ToLength = argument => {
  const number = ToIntegerOrInfinity(argument);
  return number <= 0 ? 0 : number >= NumberMAX_SAFE_INTEGER ? NumberMAX_SAFE_INTEGER : number;
}
export default ToLength;
