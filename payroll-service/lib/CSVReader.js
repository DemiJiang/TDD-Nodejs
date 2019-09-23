const csv = require('csvtojson');

module.exports = async(filePath) => {
    const result = await csv().fromFile(filePath);
    return result
};