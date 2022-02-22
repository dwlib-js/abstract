'use strict';

const {
  DateNow,
  MathFloor
} = require('@dwlib/primordials');

const UnixTime = () => {
  const timestamp = DateNow();
  return MathFloor(timestamp / 1e3);
}
module.exports = UnixTime;
