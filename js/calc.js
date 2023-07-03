'use strict';

export const calculateNetSalary = (grossSalary, tax) => {
    const taxAmount = tax * grossSalary / 100;
    
    return (grossSalary - taxAmount).toFixed(2);
}