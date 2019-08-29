const assert = require('assert');
const taxCal = require('../lib/Calculator');
const taxBracket = require('../lib/TaxBracket');


describe('Calculate tax', function () {
    it('Tax of salary 120000 should equal 922', function () {
        assert.equal(taxCal(120000, taxBracket), 2669)
    });

    it('Tax of salary 60050 should equal 922', function () {
        assert.equal(taxCal(60050, taxBracket), 922)
    });
});