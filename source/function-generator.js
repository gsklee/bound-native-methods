export default functionGenerator = (object, names, rename = {}) =>
  names.reduce((m, name) => {
    m[rename[name] || name] = function (...s) {
      return this.constructor === Array ? object[n](...this, ...s) :
                                          object[n](this, ...s);
    };

    return m;
  }, {});
