const assert = require('assert');
const payslipCalculate = require('../lib/CSVProcessor');

describe('Calculate Income Tax', function () {
    it('Tax of annual salary 60050 should equal 922', function () {
        assert.equal(payslipCalculate.incomeTaxCal(60050), 922)
    });

    it('Tax of annual salary 120000 should equal 2669', function () {
        assert.equal(payslipCalculate.incomeTaxCal(120000), 2669)
    });

});

describe('Calculate Gross Income', function () {
    it('Tax of annual salary 60050 should equal 922', function () {
        assert.equal(payslipCalculate.grossIncomeCal(60050), 5004)
    });

    it('Tax of annual salary 120000 should equal 2669', function () {
        assert.equal(payslipCalculate.grossIncomeCal(120000), 10000)
    });

});

