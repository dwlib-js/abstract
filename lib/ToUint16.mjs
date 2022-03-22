import Modulo from './Modulo.mjs';
import ToInteger from './ToInteger.mjs';

const ToUint16 = argument => {
  const integer = ToInteger(argument);
  return Modulo(integer, 0x10000);
}

export default ToUint16;
