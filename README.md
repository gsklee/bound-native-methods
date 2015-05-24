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

// Or, be more specific and cut down build size: //

import {assign, keys} from 'bound-native-methods/object';
```

```javascript
0::isInteger();
// true
```

```javascript
[3, 6, 9]::max()
         ::is(9);
// true
```

```javascript
{name: 'G. Kay Lee'}::assign({age: 18})
                    ::keys()
                    ::toJSON()
                    ::isArray();
// false
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
| Symbol.for()    | ::toSymbol() |
| Symbol.keyFor() | ::key()      |

#### Number

| Native Form | Bound Form |
| ----------- | ---------- |
| Number.parseFloat() | ::toFloat() |
| Number.parseInt()   | ::toInt()   |

#### Math

| Native Form | Bound Form |
| ----------- | ---------- |
| Math.random() | × |

#### Date

| Native Form | Bound Form |
| ----------- | ---------- |
| Date.UTC()   | ×                |
| Date.now()   | ×                |
| Date.parse() | ::toUnixOffset() |

#### Array

| Native Form | Bound Form |
| ----------- | ---------- |
| Array.from() | × |
| Array.of()   | × |

#### ArrayBuffer

#### JSON

| Native Form | Bound Form |
| ----------- | ---------- |
| JSON.parse()     | ::toObject() |
| JSON.stringify() | ::toJSON()   |

License
-------

MIT © G. Kay Lee
