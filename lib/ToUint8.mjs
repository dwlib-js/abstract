import ToInteger from './ToInteger.mjs';
import Modulo from './Modulo.mjs';

const ToUint8 = argument => {
  const integer = ToInteger(argument);
  return Modulo(integer, 0x100);
}
export default ToUint8;
