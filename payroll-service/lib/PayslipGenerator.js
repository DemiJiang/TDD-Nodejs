const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const payslipCalculation = require('../lib/PayslipCaliculation');
const employeeDatas = [];
const employeePayslips = [];
const csvWriter = createCsvWriter({
    path: '../output_csv/employee_payslip.csv',
    header: [
        {id: 'name', title: 'name'},
        {id: 'payPeriod', title: 'pay period'},
        {id: 'grossIncome', title: 'gross income'},
        {id: 'incomeTax', title: 'income tax'},
        {id: 'netIncome', title: 'net income'},
        {id: 'super', title: 'super'},
    ]
});

fs.createReadStream('../input_csv/employee_data.csv')
    .pipe(csv())
    .on('data', (data) => employeeDatas.push(data))
    .on('end', () => {
        employeeDatas.forEach((employeeData) => {
            const employeePayslip = {};
            employeePayslip.name = employeeData.firstName + ' ' + employeeData.lastName;
            employeePayslip.payPeriod = employeeData.paymentStartDate;
            employeePayslip.grossIncome = payslipCalculation.grossIncomeCal(employeeData.annualSalary);
            employeePayslip.incomeTax = payslipCalculation.incomeTaxCal(employeeData.annualSalary);
            employeePayslip.netIncome = employeePayslip.grossIncome - employeePayslip.incomeTax;
            employeePayslip.super = payslipCalculation.superCal(employeePayslip.grossIncome, employeeData.superRate);
            employeePayslips.push(employeePayslip);
        });
        csvWriter
            .writeRecords(employeePayslips)
            .then(()=> console.log('The employee payslip was generated successfully'));
    });