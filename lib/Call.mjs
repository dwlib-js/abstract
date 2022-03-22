import ReflectApply from '#primordials/ReflectApply';

const Call = (...args) => {
  const target = args[0];
  const thisArg = args[1];
  const argumentsList = args.length > 2 ? args[2] : [];
  return ReflectApply(target, thisArg, argumentsList);
}

export default Call;
