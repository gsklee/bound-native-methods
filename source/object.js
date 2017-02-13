import functionGenerator from './function-generator';

export default functionGenerator(Object, [
  'assign',
  'create',
  'defineProperties',
  'defineProperty',
  'freeze',
  'getOwnPropertyDescriptor',
  'getOwnPropertyNames',
  'getOwnPropertySymbols',
  'getPrototypeOf',
  'is',
  'isExtensible',
  'isFrozen',
  'isSealed',
  'keys',
  'preventExtensions',
  'seal',
  'setPrototypeOf'
], {
  getPrototypeOf: 'getPrototype',
  setPrototypeOf: 'setPrototype'
});
