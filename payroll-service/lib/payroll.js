const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const employeeDatas = [];
const employeePayslips = [];
const csvWriter = createCsvWriter({
    path: 'employee_payslip.csv',
    header: [
        {id: 'name', title: 'name'},
        {id: 'payPeriod', title: 'pay period'},
        {id: 'grossIncome', title: 'gross income'},
        {id: 'incomeTax', title: 'income tax'},
        {id: 'netIncome', title: 'net income'},
        {id: 'super', title: 'super'},
    ]
});

fs.createReadStream('employee_data.csv')
    .pipe(csv())
    .on('data', (data) => employeeDatas.push(data))
    .on('end', () => {
        employeeDatas.forEach((employeeData) => {
            const employeePayslip = {};
            employeePayslip.name = employeeData.firstName + ' ' + employeeData.lastName;
            employeePayslip.payPeriod = employeeData.paymentStartDate;
            employeePayslip.grossIncome = calculateGrossIncome(employeeData.annualSalary);
            employeePayslip.incomeTax = calculateIncomeTax(employeeData.annualSalary);
            employeePayslip.netIncome = employeePayslip.grossIncome - employeePayslip.incomeTax;
            employeePayslip.super = calculateSuper(employeePayslip.grossIncome, employeeData.superRate);
            employeePayslips.push(employeePayslip);
        });
        csvWriter
            .writeRecords(employeePayslips)
            .then(()=> console.log('The CSV file was written successfully'));

    });

function calculateIncomeTax(annuSalary){
    var tax = 0;
    if (annuSalary > 180000) {
        tax = Math.round((54232 + (annuSalary - 180000) * .45) / 12)
    }
    else if (87000 < annuSalary && annuSalary <= 180000) {
        tax = Math.round((19822 + (annuSalary - 87000) * .37) / 12)
    }
    else if (37000 < annuSalary && annuSalary <= 87000){
        tax = Math.round((3572 + (annuSalary - 37000) * .325) /12)
    }
    else if (18200 < annuSalary && annuSalary <= 37000){
        tax = Math.round(((annuSalary - 18200) * .19) /12)
    }

    return tax;
}

function calculateGrossIncome(annuSalary) {
    return Math.round(annuSalary / 12)
}

function calculateSuper(grossIncome, superRate){
    return Math.round(grossIncome * superRate)
}
