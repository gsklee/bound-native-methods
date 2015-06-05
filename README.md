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

| Native Form | Bound Form |
| ----------- | ---------- |
| Object.getPrototypeOf() | ::getPrototype() |
| Object.setPrototypeOf() | ::setPrototype() |

#### Symbol

| Native Form | Bound Form |
| ----------- | ---------- |
| Symbol.for()    | ::toSymbol() <sup>[1]</sup> |
| Symbol.keyFor() | ::key()                     |

#### Number

| Native Form | Bound Form |
| ----------- | ---------- |
| Number.parseFloat() | ::toFloat() <sup>[1]</sup> |
| Number.parseInt()   | ::toInt() <sup>[1]</sup>   |

#### Math

| Native Form | Bound Form |
| ----------- | ---------- |
| Math.pow() <sup>[2]</sup> | × |
| Math.random()             | × |

#### Date

| Native Form | Bound Form |
| ----------- | ---------- |
| Date.UTC()   | ×                               |
| Date.now()   | ×                               |
| Date.parse() | ::toUnixOffset() <sup>[1]</sup> |

#### Array

| Native Form | Bound Form |
| ----------- | ---------- |
| Array.from() | × |
| Array.of()   | × |

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
