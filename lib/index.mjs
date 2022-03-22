import HasIntrinsic from '#intrinsics/HasIntrinsic';
import ArrayMap from '#primordials/ArrayMap';
import Promise from '#primordials/Promise';
import PromiseAll from '#primordials/PromiseAll';
import PromiseThen from '#primordials/PromiseThen';
import BufferSourceAsUint8Array from './BufferSourceAsUint8Array.mjs';
import GetMethod from './GetMethod.mjs';
import GetV from './GetV.mjs';
import Modulo from './Modulo.mjs';
import OrdinaryToPrimitive from './OrdinaryToPrimitive.mjs';
import RandomInt from './RandomInt.mjs';
import RandomIntWithin from './RandomIntWithin.mjs';
import ToBoolean from './ToBoolean.mjs';
import ToDecimal from './ToDecimal.mjs';
import ToDecimalOrInfinity from './ToDecimalOrInfinity.mjs';
import ToIndex from './ToIndex.mjs';
import ToInt8 from './ToInt8.mjs';
import ToInt16 from './ToInt16.mjs';
import ToInt32 from './ToInt32.mjs';
import ToInteger from './ToInteger.mjs';
import ToIntegerOrInfinity from './ToIntegerOrInfinity.mjs';
import ToLength from './ToLength.mjs';
import ToNumber from './ToNumber.mjs';
import ToObject from './ToObject.mjs';
import ToPrimitive from './ToPrimitive.mjs';
import ToPropertyKey from './ToPropertyKey.mjs';
import ToSafeInteger from './ToSafeInteger.mjs';
import ToString from './ToString.mjs';
import ToStringTag from './ToStringTag.mjs';
import ToUint8 from './ToUint8.mjs';
import ToUint8Clamp from './ToUint8Clamp.mjs';
import ToUint16 from './ToUint16.mjs';
import ToUint32 from './ToUint32.mjs';
import Type from './Type.mjs';
import UnixTime from './UnixTime.mjs';

const hasBigInt = HasIntrinsic('BigInt');

let BigIntModulo = hasBigInt ? null : undefined;
let ToBigInt = hasBigInt ? null : undefined;
let ToBigInt64 = hasBigInt ? null : undefined;
let ToBigUint64 = hasBigInt ? null : undefined;
let ToNumeric = hasBigInt ? null : undefined;

const InitializeAbstractFunctions = new Promise(resolve => {
  const promises = ArrayMap([
    [BigIntModulo, 'BigIntModulo', $ => { BigIntModulo = $; }],
    [ToBigInt, 'ToBigInt', $ => { ToBigInt = $; }],
    [ToBigInt64, 'ToBigInt64', $ => { ToBigInt64 = $; }],
    [ToBigUint64, 'ToBigUint64', $ => { ToBigUint64 = $; }],
    [ToNumeric, 'ToNumeric', $ => { ToNumeric = $; }],
  ], args => {
    if (args[0] !== undefined) {
      const name = args[1];
      const setter = args[2];
      const promise = import(`./${name}.mjs`);
      return PromiseThen(promise, module => {
        setter(module.default);
      });
    }
  });
  const initialized = PromiseAll(promises);
  PromiseThen(initialized, () => {
    resolve(true);
  });
});

export {
  BigIntModulo,
  BufferSourceAsUint8Array,
  GetMethod,
  GetV,
  Modulo,
  OrdinaryToPrimitive,
  RandomInt,
  RandomIntWithin,
  ToBigInt,
  ToBigInt64,
  ToBigUint64,
  ToBoolean,
  ToDecimal,
  ToDecimalOrInfinity,
  ToIndex,
  ToInt8,
  ToInt16,
  ToInt32,
  ToInteger,
  ToIntegerOrInfinity,
  ToLength,
  ToNumber,
  ToNumeric,
  ToObject,
  ToPrimitive,
  ToPropertyKey,
  ToSafeInteger,
  ToString,
  ToStringTag,
  ToUint8,
  ToUint8Clamp,
  ToUint16,
  ToUint32,
  Type,
  UnixTime
};
export default InitializeAbstractFunctions;
