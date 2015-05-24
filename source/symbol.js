import functionGenerator from './function-generator';

export default functionGenerator(Symbol, [
  'for',
  'keyFor'
], {
  for: 'toSymbol',
  keyFor: 'key'
});
