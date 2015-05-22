"use strict";

exports.__esModule = true;
var keys = function keys() {
  return Object.keys(this);
};

exports.keys = keys;
var create = function create() {
  for (var _len = arguments.length, s = Array(_len), _key = 0; _key < _len; _key++) {
    s[_key] = arguments[_key];
  }

  return Object.create.apply(Object, [this].concat(s));
};

exports.create = create;
var assign = function assign() {
  for (var _len2 = arguments.length, s = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    s[_key2] = arguments[_key2];
  }

  return Object.assign.apply(Object, [this].concat(s));
};
exports.assign = assign;