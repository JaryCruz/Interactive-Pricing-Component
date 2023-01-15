// DOM Elements
const viewsNumber = document.querySelector('[data-views]');
const perTime = document.querySelector('[data-month]');
const totalPrice = document.querySelector('[data-total-price]');
const sliderInput = document.querySelector('[data-slider-input]');
const switchContainer = document.querySelector('[data-switch-container]');
const checkboxInput = document.querySelector('[data-check-input]');
const circleToggle = document.querySelector('[data-circle-slider]');

// Event Listeners
sliderInput.addEventListener('input', changePrice);
checkboxInput.addEventListener('click', yearBilling);

// Update the price depending on the slider's place
function changePrice() {
    if(this.value === '5' && perTime.innerText === '/ month') {
        viewsNumber.innerHTML = '1M';
        totalPrice.innerHTML = '$36.00';
    } else if(this.value === '5' && perTime.innerText === '/ year') {
        viewsNumber.innerHTML = '1M';
        totalPrice.innerHTML = '$324.00';
    } else if(this.value === '4' && perTime.innerText === '/ month') {
        viewsNumber.innerHTML = '500K';
        totalPrice.innerHTML = '$24.00';
    } else if(this.value === '4' && perTime.innerText === '/ year') {
        viewsNumber.innerHTML = '500K';
        totalPrice.innerHTML = '$216.00';
    } else if(this.value === '3' && perTime.innerText === '/ month') {
        viewsNumber.innerHTML = '100K';
        totalPrice.innerHTML = '$16.00';
    } else if(this.value === '3' && perTime.innerText === '/ year') {
        viewsNumber.innerHTML = '100K';
        totalPrice.innerHTML = '$144.00';
    } else if(this.value === '2' && perTime.innerText === '/ month') {
        viewsNumber.innerHTML = '50K';
        totalPrice.innerHTML = '$12.00';
    } else if(this.value === '2' && perTime.innerText === '/ year') {
        viewsNumber.innerHTML = '50K';
        totalPrice.innerHTML = '$108.00';
    } else if(this.value === '1' && perTime.innerText === '/ month') {
        viewsNumber.innerHTML = '10K';
        totalPrice.innerHTML = '$8.00';
    } else if(this.value === '1' && perTime.innerText === '/ year') {
        viewsNumber.innerHTML = '10K';
        totalPrice.innerHTML = '$72.00';
    }
}

// Toggle the year billing
function yearBilling() {
    circleToggle.classList.toggle('translate');
    if(circleToggle.classList.contains('translate')) {
        switchContainer.style.backgroundColor = 'hsl(174, 86%, 45%)';
        perTime.innerText = '/ year';
    } else {
        switchContainer.style.backgroundColor = 'hsl(223, 50%, 87%)';
        perTime.innerText = '/ month';
    }
}