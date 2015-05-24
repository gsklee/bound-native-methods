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

### Import

```javascript
import * from 'bound-native-methods';

// Or, be more specific and cut down build size: //

import {assign} from 'bound-native-methods/object';
```

###### Example

```javascript
0::isInteger();

// true //
```

```javascript
[3, 6, 9]::max();

// 9 //
```

```javascript
{name: 'G. Kay Lee'}::assign({age: 18})
                    ::keys()
                    ::toJSON()
                    ::isArray();

// false //
```

License
-------

MIT © G. Kay Lee
