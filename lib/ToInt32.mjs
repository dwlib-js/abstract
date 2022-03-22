import ToUint32 from './ToUint32.mjs';

const ToInt32 = argument => {
  const integer = ToUint32(argument);
  return integer > 0x7fffffff ? integer - 0x100000000 : integer;
}

export default ToInt32;
