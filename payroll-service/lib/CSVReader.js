const csv = require('csvtojson');
const csvFilePath='../input_csv/employee_data.csv'

module.exports = async() => {
    const result = await csv().fromFile(csvFilePath);
    return result
}