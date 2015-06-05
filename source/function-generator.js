export default (object, names, rename = {}) =>
  names.reduce((m, name) => {
    m[rename[name] || name] = function (...s) {
      return this.constructor === Array && object === Math ? object[name](...this, ...s) :
                                                             object[name](this, ...s);
    };

    return m;
  }, {});
