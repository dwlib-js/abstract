import IsNumeric from '#types/isNumeric';
import ToNumber from './ToNumber.mjs';
import ToPrimitive from './ToPrimitive.mjs';

const ToNumeric = argument => {
  const value = ToPrimitive(argument, 'number');
  return IsNumeric(value) ? value : ToNumber(value);
}

export default ToNumeric;
