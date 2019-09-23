const getEmployees = require('./CSVReader');
const collectPayslips = require('./Payslips');
const exportPayslipsToCSV = require('./CSVWriter');

generatePayslips('../input_csv/employee_data.csv');

async function generatePayslips(filePath) {
    const employees = await getEmployees(filePath);
    const payslips = await collectPayslips(employees);
    await exportPayslipsToCSV(payslips);
}
