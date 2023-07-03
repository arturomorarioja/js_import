'use strict';

document.querySelector('#frmMain').addEventListener('submit', (e) => {
    e.preventDefault();

    const grossSalary = document.querySelector('#txtSalary').value;
    const tax = document.querySelector('#txtTax').value;

    import('./calc.js')
        .then((calc) => {
            document.querySelector('#net').innerText = calc.calculateNetSalary(grossSalary, tax);
        });
});