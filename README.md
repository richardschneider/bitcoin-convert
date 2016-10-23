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

