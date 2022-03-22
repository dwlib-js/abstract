import ToNumber from './ToNumber.mjs';

const Modulo = (x, y) => {
  const a = ToNumber(x);
  const n = ToNumber(y);
  return ((a % n) + n) % n;
}

export default Modulo;
