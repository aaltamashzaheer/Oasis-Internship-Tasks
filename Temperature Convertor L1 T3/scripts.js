const celsiusInput = document.querySelector('#celsius' ),
        fahrenheitInput = document.querySelector('#fahrenheit');

window.addEventListener('load', () => celsiusInput.focus());

celsiusInput.addEventListener('input', () => {
    fahrenheitInput.value = ((celsiusInput.value * 9 / 5) + 32).toFixed(2);
    if(!celsiusInput.value) fahrenheitInput.value = ''; 
});

fahrenheitInput.addEventListener('input', () => {
    celsiusInput.value = ((fahrenheitInput.value - 32) * 5 / 9).toFixed(2)

    if(!fahrenheitInput.value) celsiusInput.value = '';
});
