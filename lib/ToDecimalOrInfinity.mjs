import ToNumber from './ToNumber.mjs';

const ToDecimalOrInfinity = argument => {
  const number = ToNumber(argument);
  return number || 0;
}

export default ToDecimalOrInfinity;
