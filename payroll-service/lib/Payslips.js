const collectInfo = require('./CSVReader');
const payslipCalculation = require('./PayslipCaliculator');
const calculation = require('./Calculator');

const collectPayslips = async() =>{
    const payslips = [];
    const employees = await collectInfo();
    employees.forEach((employee) => {
        const payslip = {};
        payslip.name = employee.firstName + ' ' + employee.lastName;
        payslip.payPeriod = employee.paymentStartDate;
        payslip.grossIncome = calculation.getGrossIncome(employee.annualSalary);
        payslip.incomeTax = payslipCalculation.incomeTaxCal(employee.annualSalary);
        payslip.netIncome = payslip.grossIncome - payslip.incomeTax;
        payslip.super = calculation.getSuper(payslip.grossIncome, employee.superRate);
        payslips.push(payslip);
    });

    return payslips
};

module.exports = collectPayslips

// async function test (){
//     const a = await pay()
//     console.log(a);
// }
//
// test()