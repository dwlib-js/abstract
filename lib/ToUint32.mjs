import ToInteger from './ToInteger.mjs';
import Modulo from './Modulo.mjs';

const ToUint32 = argument => {
  const integer = ToInteger(argument);
  return Modulo(integer, 0x100000000);
}
export default ToUint32;
