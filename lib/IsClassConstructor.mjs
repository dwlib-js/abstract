import {
  FunctionToString,
  StringStartsWith
} from '@dwlib/primordials';
import IsFunction from './IsFunction.mjs';

const IsClassConstructor = argument => {
  try {
    const sourceText = FunctionToString(argument);
    return StringStartsWith(sourceText, 'class');
  } catch (e) {
    return false;
  }
};
export default IsClassConstructor;
