'use strict';

const convert = require('..');
const Big = require('big.js');
const should = require('should');

describe('Convert', () => {
    it('should default to returning a Number', () => {
        convert(2, 'BTC', 'BTC')
            .should.be.a.Number()
            .and.equal(2);
    });

    it('should return a Number', () => {
        convert(2, 'BTC', 'BTC', 'Number')
            .should.be.a.Number()
            .and.equal(2);
    });

    it('should return a Big number', () => {
        convert(2, 'BTC', 'BTC', 'Big')
            .should.be.an.instanceof(Big)
            .and.eql(new Big(2));
    });

    it('should return a String', () => {
        convert(2100, 'mBTC', 'BTC', 'String')
            .should.be.an.instanceof(String)
            .and.equal('2.1');
    });

    it('should convert an integer', () => {
        convert(123456789012345, 'Satoshi', 'BTC', 'Number')
            .should.be.a.Number()
            .and.equal(1234567.89012345);
    });

    it('should convert a number', () => {
        convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')
            .should.be.a.Number()
            .and.equal(123456789012345);
    });

    it('should convert a string', () => {
        convert('2', 'BTC', 'BTC', 'Number')
            .should.be.a.Number()
            .and.equal(2);
    });

    it('should convert a Big number', () => {
        convert(new Big(2), 'BTC', 'BTC', 'Number')
            .should.be.a.Number()
            .and.equal(2);
    });

    it('should handle rounding errors', () => {
        convert(4.6, 'Satoshi', 'BTC', 'Number')
            .should.be.a.Number()
            .and.equal(0.000000046);
        convert(0.000000046, 'BTC', 'Satoshi', 'Number')
            .should.be.a.Number()
            .and.equal(4.6);
    });

    it('should throw when unit is undefined', () => {
        should.throws(() => convert(new Big(2), 'x', 'BTC', 'Number'));
        should.throws(() => convert(new Big(2), 'BTC', 'x', 'Number'));
    });

    it('should throw when representaion is undefined', () => {
        should.throws(() => convert(2, 'BTC', 'mBTC', 'x'));
    });

});
