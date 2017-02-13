export default (object, names, rename = {}) => {
  const ns = Object.prototype.toString.call(object).slice(8, -1)

  names.reduce((memo, name) => {
    if (object === Math) {
      memo[rename[name] || name] = fromMath(object, ns, name)
    } else {
      memo[rename[name] || name] = fromOther(object, ns, name)
    }

    return memo;
  }, {});
};

function fromMath(object, ns, name) {
  return function (...rest) {
    if (this != null) throw new TypeError(`${ns}.${name} called on null or undefined`);
    if (Array.isArray(this)) {
      rest = this.concat(rest);
    } else {
      rest = [this].concat(rest);
    }
    return object[name](...rest)
  };
}

function fromOther(object, ns, name) {
  return function (...rest) {
    if (this != null) throw new TypeError(`#{ns}.#{name} called on null or undefined`);
    return object[name](this, ...rest);
  };
}
