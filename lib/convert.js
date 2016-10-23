'use strict';

const Big = require('big.js');
const units = {
    'BTC': new Big(1),
    'mBTC': new Big(0.001),
    'μBTC': new Big(0.000001),
    'Satoshi': new Big(0.00000001)
};

function convert(from, fromUnit, toUnit, representation) {
    let fromFactor = units[fromUnit];
    if (fromFactor === undefined) {
        throw new Error(`'${fromUnit}' is not a bitcoin unit`);
    }
    let toFactor = units[toUnit];
    if (toFactor === undefined) {
        throw new Error(`'${toUnit}' is not a bitcoin unit`);
    }

    let result = new Big(from).times(fromFactor).div(toFactor);

    if (!representation || representation === 'Number') {
        return Number(result);
    } else if (representation === 'Big') {
        return result;
    } else if (representation === 'String') {
        return result.toString();
    }

    throw new Error(`'${representation}' is not a valid representation`);
}

module.exports = convert;
