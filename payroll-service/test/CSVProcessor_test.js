const assert = require('assert');
const payslipCalculate = require('../lib/CSVProcessor');

describe('Calculate tax', function () {
    it('Tax of annual salary 60050 should equal 922', function () {
        assert.equal(payslipCalculate.incomeTaxCal(60050), 922)
    });

    it('Tax of annual salary 87,001 should equal 19822.37', function () {
        assert.equal(taxCalculate(87001), 19822.37)
    });

    it('Tax of annual salary 37,001 should equal 3572.325', function () {
        assert.equal(taxCalculate(37001), 3572.325)
    });

    it('Tax of annual salary 18,201 should equal 0.19', function () {
        assert.equal(taxCalculate(18201), 0.19)
    });

    it('Tax of annual salary 18,201 should equal 0', function () {
        assert.equal(taxCalculate(18200), 0)
    });
});