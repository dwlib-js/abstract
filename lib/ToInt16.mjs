import ToUint16 from './ToUint16.mjs';

const ToInt16 = argument => {
  const integer = ToUint16(argument);
  return integer > 0x7fff ? integer - 0x10000 : integer;
}
export default ToInt16;
