import functionGenerator from './function-generator';

export default functionGenerator(JSON, [
  'parse',
  'stringify'
], {
  parse: 'toObject',
  stringify: 'toJSON'
});
