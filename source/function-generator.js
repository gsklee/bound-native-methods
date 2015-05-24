export default functionGenerator = (object, names, rename = {}) =>
  names.reduce((m, name) => {
    m[rename[name] || name] = function (...s) {
      return object[name](this, ...s);
    };

    return m;
  }, {});
