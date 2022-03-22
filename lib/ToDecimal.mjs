import ToNumber from './ToNumber.mjs';

const ToDecimal = argument => {
  const number = ToNumber(argument);
  return number && number !== Infinity && number !== -Infinity ? number : 0;
}

export default ToDecimal;
