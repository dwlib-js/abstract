'use strict';

const DateNow = require('#primordials/DateNow');
const MathFloor = require('#primordials/MathFloor');

const UnixTime = () => {
  const timestamp = DateNow();
  return MathFloor(timestamp / 1e3);
}

module.exports = UnixTime;
