import functionGenerator from './function-generator';

export default functionGenerator(Symbol, [
  'for',
  'keyFor'
], {
  for: 'symbol',
  keyFor: 'symbolKey'
});
