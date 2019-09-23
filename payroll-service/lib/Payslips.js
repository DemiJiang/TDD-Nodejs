const calculation = require('./Calculator');

module.exports = async(employees) =>{
    const payslips = [];
    employees.forEach((employee) => {
        const payslip = {};
        payslip.name = employee.firstName + ' ' + employee.lastName;
        payslip.payPeriod = employee.paymentStartDate;
        payslip.grossIncome = calculation.getGrossIncome(employee.annualSalary);
        payslip.incomeTax = calculation.getIncomeTax(employee.annualSalary);
        payslip.netIncome = payslip.grossIncome - payslip.incomeTax;
        payslip.super = calculation.getSuper(payslip.grossIncome, employee.superRate);
        payslips.push(payslip);
    });
    return payslips;
};
