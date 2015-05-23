export default [
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
  'observe',
  'preventExtensions',
  'seal',
  'setPrototypeOf'
].reduce((m, n) => {
  m[n.endsWith('Of') ? n.slice(0, -2) : n] = function (...s) {
    return Object[n](this, ...s);
  };

  return m;
}, {});
