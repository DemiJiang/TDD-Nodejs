const assert = require('assert');
const payslipCalculation = require('../lib/PayslipCaliculator');

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

describe('Calculate Super', function () {
    it('Super of annual salary 60050 should equal 922', function () {
        assert.equal(payslipCalculation.superCal(5004, 0.09), 450)
    });

    it('Super of annual salary 120000 should equal 2669', function () {
        assert.equal(payslipCalculation.superCal(10000, 0.1), 1000)
    });

});

