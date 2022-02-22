import {
  DateNow,
  MathFloor
} from '@dwlib/primordials';

const UnixTime = () => {
  const timestamp = DateNow();
  return MathFloor(timestamp / 1e3);
}
export default UnixTime;
