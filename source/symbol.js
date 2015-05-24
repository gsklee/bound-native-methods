export default [
  'for',
  'keyFor'
].reduce((m, n) => {
  m[
    n === 'for' ? 'symbol' :
    n === 'keyFor' ? 'symbolKey' :
    n
  ] = function (...s) {
    return Symbol[n](this, ...s);
  };

  return m;
}, {});
