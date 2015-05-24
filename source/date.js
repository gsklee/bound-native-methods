import functionGenerator from './function-generator';

export default functionGenerator(Date, [
  'parse'
], {
  parse: 'toUnixOffset'
});
