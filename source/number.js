import functionGenerator from './function-generator';

export default functionGenerator(Number, [
  'isFinite',
  'isInteger',
  'isNaN',
  'isSafeInteger',
  'parseFloat',
  'parseInt'
], {
  parseFloat: 'toFloat',
  parseInt: 'toInt'
});
