export const keys = function () {
  return Object.keys(this);
};

export const create = function (...s) {
  return Object.create(this, ...s);
};

export const assign = function (...s) {
  return Object.assign(this, ...s);
};
