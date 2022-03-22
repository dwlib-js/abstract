# Abstract

## Install
`npm i --save @dwlib/abstract`

## Usage
```javascript
// CJS
const abstract = require('@dwlib/abstract');
const AbstractFunction = require('@dwlib/abstract/<FunctionName>');
const ToObject = require('@dwlib/abstract/ToObject');
const ToPropertyKey = require('@dwlib/abstract/ToPropertyKey');
// ESM
import initialized, * as abstract from '@dwlib/abstract';
import AbstractFunction from '@dwlib/abstract/<FunctionName>';
import ToObject from '@dwlib/abstract/ToObject';
import ToPropertyKey from '@dwlib/abstract/ToPropertyKey';
import PromiseThen from '@dwlib/primordials/PromiseThen';

PromiseThen(initialized, () => {
  const ToBigInt = abstract.ToBigInt;
});
```
