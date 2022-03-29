import HasIntrinsic from '#intrinsics/HasIntrinsic';
import Abs from './Abs.mjs';
import BufferSourceAsUint8Array from './BufferSourceAsUint8Array.mjs';
import Call from './Call.mjs';
import Construct from './Construct.mjs';
import Floor from './Floor.mjs';
import GetMethod from './GetMethod.mjs';
import GetV from './GetV.mjs';
import Invoke from './Invoke.mjs';
import LengthOfArrayLike from './LengthOfArrayLike.mjs';
import Modulo from './Modulo.mjs';
import OrdinaryToPrimitive from './OrdinaryToPrimitive.mjs';
import RandomInt from './RandomInt.mjs';
import RandomIntWithin from './RandomIntWithin.mjs';
import RequireTargetObject from './RequireTargetObject.mjs';
import RequireThisObject from './RequireThisObject.mjs';
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
import ToNumeric from './ToNumeric.mjs';
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

const ImportFunction = async name => {
  const module = await import(`./${name}.mjs`);
  return module.default;
}

const hasBigInt = HasIntrinsic('BigInt');

const BigIntModulo = hasBigInt ? await ImportFunction('BigIntModulo') : undefined;
const ToBigInt = hasBigInt ? await ImportFunction('ToBigInt') : undefined;
const ToBigInt64 = hasBigInt ? await ImportFunction('ToBigInt64') : undefined;
const ToBigUint64 = hasBigInt ? await ImportFunction('ToBigUint64') : undefined;

export {
  Abs,
  BigIntModulo,
  BufferSourceAsUint8Array,
  Call,
  Construct,
  Floor,
  GetMethod,
  GetV,
  Invoke,
  LengthOfArrayLike,
  Modulo,
  OrdinaryToPrimitive,
  RandomInt,
  RandomIntWithin,
  RequireTargetObject,
  RequireThisObject,
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
