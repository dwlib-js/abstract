import {
  Object,
  ReflectConstruct
} from '@dwlib/primordials';

const IsConstructor = argument => {
  try {
    ReflectConstruct(Object, [], argument);
    return true;
  } catch (e) {
    return false;
  }
}
export default IsConstructor;
