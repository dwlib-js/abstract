import IsPropertyKey from '#types/isPropertyKey';
import ToPrimitive from './ToPrimitive.mjs';
import ToString from './ToString.mjs';

const ToPropertyKey = argument => {
  const key = ToPrimitive(argument, 'string');
  return IsPropertyKey(key) ? key : ToString(key);
}

export default ToPropertyKey;
