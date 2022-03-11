import {
  Object,
  ReflectConstruct
} from '#primordials';

const IsConstructor = argument => {
  try {
    ReflectConstruct(Object, [], argument);
    return true;
  } catch (e) {
    return false;
  }
}
export default IsConstructor;
