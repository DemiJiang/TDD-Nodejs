const collectPayslips = require('./Payslips');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
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

generatePayslips()

async function generatePayslips(){
    const payslips = await collectPayslips()
    csvWriter
        .writeRecords(payslips)
        .then(()=> console.log('The employee payslip was generated successfully'));
}