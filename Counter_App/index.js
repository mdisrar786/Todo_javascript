document.addEventListener('DOMContentLoaded', () => {
    const countDisplay = document.getElementById('count-display');
    const incrementButton = document.getElementById('increment-button');
    const decrementButton = document.getElementById('decrement-button');
    const resetButton = document.getElementById('reset-button');

    let count = 0;

    incrementButton.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    decrementButton.addEventListener('click', () => {
        count--;
        updateDisplay();
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });

    function updateDisplay() {
        countDisplay.textContent = count;
    }
});
