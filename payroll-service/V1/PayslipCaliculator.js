function calculateIncomeTax(annuSalary){
    var rate = 0;
    var amount = 0;
    var over = 0;
    if (annuSalary > 180000) {
        rate = 0.45;
        amount = 54232;
        over = 180000;
    }
    else if (annuSalary > 87000 && annuSalary <= 180000) {
        rate = 0.37;
        amount = 19822;
        over = 87000;
    }
    else if (annuSalary > 37000 && annuSalary <= 87000){
        rate = 0.325;
        amount = 3572;
        over = 37000;
    }
    else if (annuSalary > 18200 && annuSalary <= 37000){
        rate = 0.19;
        over = 18200;
    }
    return Math.round((amount + (annuSalary - over) * rate) / 12);
}

function calculateGrossIncome(annuSalary) {
    return Math.round(annuSalary / 12)
}

function calculateSuper(grossIncome, superRate){
    return Math.round(grossIncome * superRate)
}


module.exports = {
    incomeTaxCal: calculateIncomeTax,
    grossIncomeCal: calculateGrossIncome,
    superCal : calculateSuper
}