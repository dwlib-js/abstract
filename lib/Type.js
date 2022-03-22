'use strict';

const Type = argument => {
  switch (typeof argument) {
    case 'undefined': return 'Undefined';
    case 'object': {
      if (argument === null) {
        return 'Null';
      }
    }
    case 'function': return 'Object';
    case 'number': return 'Number';
    case 'string': return 'String';
    case 'boolean': return 'Boolean';
    case 'symbol': return 'Symbol';
    case 'bigint': return 'BigInt';
  }
}

module.exports = Type;
