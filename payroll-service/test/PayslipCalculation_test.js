const assert = require('assert');
const payslipCalculation = require('../lib/PayslipCaliculation');

describe('Calculate Income Tax', function () {
    it('Income tax of annual salary 60050 should equal 922', function () {
        assert.equal(payslipCalculation.incomeTaxCal(60050), 922)
    });

    it('Income tax of annual salary 120000 should equal 2669', function () {
        assert.equal(payslipCalculation.incomeTaxCal(120000), 2669)
    });

});

describe('Calculate Gross Income', function () {
    it('Gross income of annual salary 60050 should equal 922', function () {
        assert.equal(payslipCalculation.grossIncomeCal(60050), 5004)
    });

    it('Gross income of annual salary 120000 should equal 2669', function () {
        assert.equal(payslipCalculation.grossIncomeCal(120000), 10000)
    });

});

