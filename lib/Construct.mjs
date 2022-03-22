import ReflectConstruct from '#primordials/ReflectConstruct';

const Construct = (...args) => {
  const numberOfArgs = args.length;
  const target = args[0];
  const argumentsList = numberOfArgs > 1 ? args[1] : [];
  const newTarget = numberOfArgs > 2 ? args[2] : target;
  return ReflectConstruct(target, argumentsList, newTarget);
}

export default Construct;
