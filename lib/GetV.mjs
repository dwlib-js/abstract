import ToObject from './ToObject.mjs';

const GetV = (V, P) => {
  const O = ToObject(V);
  return O[P];
}
export default GetV;
