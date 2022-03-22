import ToUint8 from './ToUint8.mjs';

const ToInt8 = argument => {
  const integer = ToUint8(argument);
  return integer > 0x7f ? integer - 0x100 : integer;
}

export default ToInt8;
