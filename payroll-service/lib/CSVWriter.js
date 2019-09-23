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

module.exports = async(payslips) => {
    const result = await csvWriter.writeRecords(payslips)
    console.log('The employee payslip is generated successfully');
};