function addTex(price) {
    const findText = ((price / 95.5) * 4.5);
    const finalPrice = Math.round(parseFloat(price) + findText);
    return finalPrice;
}

document.getElementById('add-tax-btn').addEventListener('click', function () {
    const priceWithTax = addTex(document.getElementById('input-num').value)
    if (priceWithTax < 1) {
        alert('Please, Use numbers greater than 0 for tax. Thank you.');
        document.getElementById('input-num').value = '';
        return;
    } else {
        document.getElementById('num-with-tax').innerText = priceWithTax;
    }
})

document.getElementById('input-num').addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        const priceWithTax = addTex(document.getElementById('input-num').value)
        if (priceWithTax < 1) {
            alert('Please, Use numbers greater than 0 for tax. Thank you.');
            document.getElementById('input-num').value = '';
            return;
        } else {
            document.getElementById('num-with-tax').innerText = priceWithTax;
        }
    }
})

document.getElementById('clean-btn').addEventListener('click', function () {
    document.getElementById('input-num').value = '';
    document.getElementById('num-with-tax').innerText = '00';

})