# bitcoin-convert
[![Travis build status](https://travis-ci.org/richardschneider/bitcoin-convert.svg)](https://travis-ci.org/richardschneider/bitcoin-convert)
[![Coverage Status](https://coveralls.io/repos/github/richardschneider/bitcoin-convert/badge.svg?branch=master)](https://coveralls.io/github/richardschneider/bitcoin-convert?branch=master)
[![npm version](https://badge.fury.io/js/bitcoin-convert.svg)](https://badge.fury.io/js/bitcoin-convert) 

Conversion between the bitcoin base unit (BTC) and other units (Satoshi,  μBTC, ...)

## Features

- Avoids rounding errors by using a [big number](https://www.npmjs.com/package/big.js) package
- Converts from/to a [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), 
  [Big](https://www.npmjs.com/package/big.js) or 
  [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- Units can be added or removed

## Getting started

**bitcoin-convert** is available for [Node.js](https://nodejs.org) and most modern browsers.  If you want to know if your currrent browser is compatible, run the [online test suite](https://unpkg.com/bitcoin-convert/test/index.html).

Install with [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)

    > npm install bitcoin-convert --save

### Node usage

    var btcConvert = require('bitcoin-convert');    
    var coins = btcConvert(4.6, 'Satoshi', 'BTC');  
    
### Browser usage

Include the package from your project

    <script src="./node_modules/bitcoin-convert/dist/bitcoin-convert.min.js" type="text/javascript"></script>

or from the [unpkg CDN](https://unpkg.com)

    <script src="https://unpkg.com/bitcoin-convert/dist/bitcoin-convert.min.js"></script>

This will provide `btcConvert` as a global object, or `define` it if you are using [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition).

    var coins = btcConvert(4.6, 'Satoshi', 'BTC');  

## API

### btcConvert (from, fromUnit, toUnit, [representation])

Converts an amount from one unit to another unit.

- `from` (number | string | [Big](https://www.npmjs.com/package/big.js)) - the amount to convert
- `fromUnit` (string) - the unit of the amount
- `toUnit` (string) - the unit to convert to
- `representation` (string) - the type of value to return, defaults to 'Number'.
   - 'Number' - returns a standard javascript [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
   -  'Big' - returns a [Big](https://www.npmjs.com/package/big.js) number
   -  'String' - returns a [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
   
#### Examples

    btcConvert(2, 'BTC', 'bits') // returns 2000000
    btcConvert(2, 'BTC', 'bits', 'String') // returns '2000000'
    
### btcConvert.units()

Returns an Array of unit symbols that can be used for conversion.

#### Example

    console.log(btcConvert.units())
    // produces
    // ['BTC', 'mBTC', 'μBTC', 'bits', 'bit', 'Satoshi', 'sat']
    
### btcConvert.addUnit (unit, factor)

Adds a new `unit` for conversion.  Throws when `unit` already exists and the factors are different.

- `unit` (string) - the new unit symbol
- `factor` (number | string | Big) - conversion factor to yield a `BTC`.

#### Example

    convert.addUnit('finney', 0.0000001);
    convert(30, 'finney', 'BTC') // produces 0.000003
    
    // 10 satoshis can be expressed as 1 finney
    convert(20, 'Satoshi', 'finney') // produces 2

### btcConvert.removeUnit (unit)

Removes the `unit` from conversion.  Throws when `unit` is pre-defined. Removing a non-existing symbol is allowed.

- `unit` (string) - the unit symbol to remove.