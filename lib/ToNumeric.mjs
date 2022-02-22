import ToPrimitive from './ToPrimitive.mjs';
import IsNumeric from './IsNumeric.mjs';
import ToNumber from './ToNumber.mjs';

const ToNumeric = argument => {
  const value = ToPrimitive(argument, 'number');
  return IsNumeric(value) ? value : ToNumber(value);
}
export default ToNumeric;
