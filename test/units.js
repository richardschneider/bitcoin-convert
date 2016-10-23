'use strict';

const convert = require('..');
const Big = require('big.js');
const should = require('should');

describe('Units', () => {
    it('should be array', () => {
        var units = convert.units();
        units.should.be.an.Array();
        units.should.containEql('BTC');
        units.should.containEql('mBTC');
        units.should.containEql('μBTC');
        units.should.containEql('Satoshi');
    });


});
