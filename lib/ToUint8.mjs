import Modulo from './Modulo.mjs';
import ToInteger from './ToInteger.mjs';

const ToUint8 = argument => {
  const integer = ToInteger(argument);
  return Modulo(integer, 0x100);
}

export default ToUint8;
