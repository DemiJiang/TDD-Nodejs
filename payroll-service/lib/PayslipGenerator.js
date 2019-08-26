const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const payslipCalculation = require('./PayslipCaliculator');
const employees = [];
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
    .on('data', (data) => employees.push(data))
    .on('end', () => {
        employees.forEach((employee) => {
            const employeePayslip = {};
            employeePayslip.name = employee.firstName + ' ' + employee.lastName;
            employeePayslip.payPeriod = employee.paymentStartDate;
            employeePayslip.grossIncome = payslipCalculation.grossIncomeCal(employee.annualSalary);
            employeePayslip.incomeTax = payslipCalculation.incomeTaxCal(employee.annualSalary);
            employeePayslip.netIncome = employeePayslip.grossIncome - employeePayslip.incomeTax;
            employeePayslip.super = payslipCalculation.superCal(employeePayslip.grossIncome, employee.superRate);
            employeePayslips.push(employeePayslip);
        });
        csvWriter
            .writeRecords(employeePayslips)
            .then(()=> console.log('The employee payslip was generated successfully'));
    });

