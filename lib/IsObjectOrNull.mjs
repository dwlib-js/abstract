const IsObjectOrNull = argument => {
  const type = typeof argument;
  return type === 'object' || type === 'function';
}
export default IsObjectOrNull;
