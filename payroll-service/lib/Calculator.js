const taxBracket = require('../lib/TaxBracket');

const getIncomeTax = (salary) => {
    const newArray = taxBracket.filter(element => salary > element.lowBand && salary <= element.highBand)
    return Math.round((newArray[0].amount + (salary - newArray[0].lowBand) * newArray[0].rate) / 12)
};

const getGrossIncome = (annuSalary) => {
    return Math.round(annuSalary / 12)
};

const getSuper = (grossIncome, superRate) => {
    return Math.round(grossIncome * superRate)
};

module.exports = {
    getIncomeTax,
    getGrossIncome,
    getSuper
};