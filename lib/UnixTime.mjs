import DateNow from '#primordials/DateNow';
import MathFloor from '#primordials/MathFloor';

const UnixTime = () => {
  const timestamp = DateNow();
  return MathFloor(timestamp / 1e3);
}

export default UnixTime;
