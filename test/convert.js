'use strict';

const convert = require('..');
require('should');

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

});
