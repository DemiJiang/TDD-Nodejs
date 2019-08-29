const taxBracket = require('../lib/TaxBracket');
const employees = require('../lib/CSVReader');

const getIncomeTax = (salary, taxBracket) => {
    var result;
    taxBracket.forEach(element => {
        if (salary > element.lowBand && salary <= element.highBand) {
            result = Math.round((element.amount + (salary - element.lowBand) * element.rate) / 12)
        }
    });
    return result;
};

const getGrossIncome = (annuSalary) => {
    return Math.round(annuSalary / 12)
};

const getSuper = (grossIncome, superRate) => {
    return Math.round(grossIncome * superRate)
};


// console.log(getIncomeTax(80000, taxBracket));

module.exports = {
    getIncomeTax,
    getGrossIncome,
    getSuper

};