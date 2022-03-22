import ToObject from './ToObject.mjs';

const GetV = (value, propertyKey) => {
  const object = ToObject(value);
  return object[propertyKey];
}

export default GetV;
