const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const submitBtn = document.querySelector('.btn');
const resultHeading = document.querySelector('h4');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');


loadEventListener();


function loadEventListener() {
    document.addEventListener('DOMContentLoaded', onRun);
    submitBtn.addEventListener('click', onSubmit);
}

function onRun() {
    resultHeading.style.display = 'none';
    monthlyPayment.parentElement.parentElement.style.display = 'none';
    totalPayment.parentElement.parentElement.style.display = 'none';
    totalInterest.parentElement.parentElement.style.display = 'none';
}

function onSubmit(e) {
    onRun();
    if(amount.value === '' || interest.value === '' || years.value === '') {
        const alert = document.createElement('div');
        alert.className = 'alert alert-danger';
        alert.textContent = 'Please fill all the fields!';
        document.querySelector('.card').insertBefore(alert, document.querySelector('.heading'));
        setTimeout(function() {
            alert.style.display = 'none';
        }, 3000);
    } else {
        const image = document.createElement('div');
        image.id = 'loading';
        image.innerHTML = '<img src="img/loading.gif">';
        document.querySelector('.card').appendChild(image);
        setTimeout(function() {
            image.style.display = 'none';

            monthlyPayment.value = `${amount.value/10}$`;
            totalPayment.value = `${amount.value * 5}$`;
            totalInterest.value = `${interest.value * 2}$`;
    
            resultHeading.style.display = 'block';
            monthlyPayment.parentElement.parentElement.style.display = 'block';
            totalPayment.parentElement.parentElement.style.display = 'block';
            totalInterest.parentElement.parentElement.style.display = 'block';
        }, 1000);
    }
    e.preventDefault();
}