function addTex(price) {
    const inputValue = parseFloat(document.getElementById('input-num').value);
    if (!isNaN(inputValue)) {
        const findText = ((price / 95.5) * 4.5);
        const result = Math.round(Number(price) + findText);
        document.getElementById('input-num').value = result;
    }
}

document.querySelectorAll('.numeric-button').forEach(button => {
    button.addEventListener('click', function () {
        const value = this.getAttribute('data-value');
        const inputField = document.getElementById('input-num');

        if (value === '=') {
            addTex(inputField.value);

        } else if (value === 'C') {
            inputField.value = '';
        } else {
            inputField.value += value;
        }
    });
});

// JavaScript to toggle between day and night modes
const toggleMode = document.getElementById('toggle-mode');
const body = document.body;
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

toggleMode.addEventListener('click', function () {
    if (body.classList.contains('night-mode')) {
        // Switch to day mode
        body.classList.remove('night-mode');
        moonIcon.style.display = 'inline-block';
        sunIcon.style.display = 'none';
    } else {
        // Switch to night mode
        body.classList.add('night-mode');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
    }
});
