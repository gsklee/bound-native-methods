Bound Native Methods
====================

This library exports a collection of bound native [**virtual methods**](http://babeljs.io/blog/2015/05/14/function-bind/#virtual-methods) - static methods of JavaScript standard built-in objects in their bound form - so that they can be used together with the [proposed **bind operator**](https://github.com/zenparsing/es-function-bind).

Install
-------

```bash
$ npm install bound-native-methods
```

Usage
-----

```javascript
import * from 'bound-native-methods';

// Or, be more specific and cut down the build size: //

import {assign, keys} from 'bound-native-methods/object';
```

```javascript
0::isInteger();
// true
```

```javascript
[3, 6, 9]::max()::is(9);
// true
```

```javascript
{'2015-06-01T15:30:00.000Z': 300}::assign({'2015-07-01T15:30:00.000Z': 42})
                                 ::keys()
                                  .map(x => x::toUnixOffset())
                                 ::toJSON();
// [1433172600000,1435764600000]
```

API
---

Most static methods have been exported as is, but a few have been renamed or excluded to better fit the context:

#### Object

| Bound Form | Native Form |
| ---------- | ----------- |
| ::assign()                   | Object.assign()                   |
| ::create()                   | Object.create()                   |
| ::defineProperties()         | Object.defineProperties()         |
| ::defineProperty()           | Object.defineProperty()           |
| ::freeze()                   | Object.freeze()                   |
| ::getOwnPropertyDescriptor() | Object.getOwnPropertyDescriptor() |
| ::getOwnPropertyNames()      | Object.getOwnPropertyNames()      |
| ::getOwnPropertySymbols()    | Object.getOwnPropertySymbols()    |
| ***::getPrototype()***       | ***Object.getPrototypeOf()***     |
| ::is()                       | Object.is()                       |
| ::isExtensible()             | Object.isExtensible()             |
| ::isFrozen()                 | Object.isFrozen()                 |
| ::isSealed()                 | Object.isSealed()                 |
| ::keys()                     | Object.keys()                     |
| ::observe()                  | Object.observe()                  |
| ::preventExtensions()        | Object.preventExtensions()        |
| ::seal()                     | Object.seal()                     |
| ***::setPrototype()***       | ***Object.setPrototypeOf()***     |

#### Symbol

| Bound Form | Native Form |
| ---------- | ----------- |
| ***::toSymbol()*** <sup>[1]</sup> | ***Symbol.for()***    |
| ***::key()***                     | ***Symbol.keyFor()*** |

#### Number

| Bound Form | Native Form |
| ---------- | ----------- |
| ::isFinite()                     | Number.isFinite()         |
| ::isInteger()                    | Number.isInteger()        |
| ::isNaN()                        | Number.isNaN()            |
| ::isSafeInteger()                | Number.isSafeInteger()    |
| ***::toFloat()*** <sup>[1]</sup> | ***Number.parseFloat()*** |
| ***::toInt()*** <sup>[1]</sup>   | ***Number.parseInt()***   |

#### Math

| Bound Form | Native Form |
| ---------- | ----------- |
| ::abs()    | Math.abs()                      |
| ::acos()   | Math.acos()                     |
| ::acosh()  | Math.acosh()                    |
| ::asin()   | Math.asin()                     |
| ::asinh()  | Math.asinh()                    |
| ::atan()   | Math.atan()                     |
| ::atan2()  | Math.atan2()                    |
| ::atanh()  | Math.atanh()                    |
| ::cbrt()   | Math.cbrt()                     |
| ::ceil()   | Math.ceil()                     |
| ::clz32()  | Math.clz32()                    |
| ::cos()    | Math.cos()                      |
| ::cosh()   | Math.cosh()                     |
| ::exp()    | Math.exp()                      |
| ::expm1()  | Math.expm1()                    |
| ::floor()  | Math.floor()                    |
| ::fround() | Math.fround()                   |
| ::hypot()  | Math.hypot()                    |
| ::imul()   | Math.imul()                     |
| ::log()    | Math.log()                      |
| ::log10()  | Math.log10()                    |
| ::log1p()  | Math.log1p()                    |
| ::log2()   | Math.log2()                     |
| ::max()    | Math.max()                      |
| ::min()    | Math.min()                      |
| ***×***    | ***Math.pow()*** <sup>[2]</sup> |
| ***×***    | ***Math.random()***             |
| ::round()  | Math.round()                    |
| ::sign()   | Math.sign()                     |
| ::sin()    | Math.sin()                      |
| ::sinh()   | Math.sinh()                     |
| ::sqrt()   | Math.sqrt()                     |
| ::tan()    | Math.tan()                      |
| ::tanh()   | Math.tanh()                     |
| ::trunc()  | Math.trunc()                    |

#### Date

| Bound Form | Native Form |
| ---------- | ----------- |
| ***×***                               | ***Date.UTC()***   |
| ***×***                               | ***Date.now()***   |
| ***::toUnixOffset()*** <sup>[1]</sup> | ***Date.parse()*** |

#### Array

| Bound Form | Native Form |
| ---------- | ----------- |
| × | Array.from() |
| × | Array.of()   |

#### ArrayBuffer

#### JSON

| Native Form | Bound Form |
| ----------- | ---------- |
| JSON.parse()     | ::toObject() <sup>[1]</sup> |
| JSON.stringify() | ::toJSON() <sup>[1]</sup>   |

> ###### Notes:
> 1. Bound methods whose names start with "to..." are to be applied to strings (with the exception of `::toJSON()` which can be applied to a variety of data types)
> 2. Please use the exponentiation operator `**` instead

License
-------

MIT © G. Kay Lee
