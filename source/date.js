import functionGenerator from './function-generator';

export default functionGenerator(Date, [
  'UTC',
  'now',
  'parse'
]);
