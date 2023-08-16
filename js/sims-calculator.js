function billTex(price) {
    const findText = ((price / 95.5) * 4.5);
    const billTex = Math.round(findText)
    return billTex;
}

function topSheetTex(price) {
    const findText = ((price / 100) * 4.5);
    const topSheetTex = Math.round(findText);
    return topSheetTex;
}

function addTex(price) {
    const findText = ((price / 95.5) * 4.5);
    const addTex = Math.round(Number(price) + findText);
    return addTex;
}

document.getElementById('get-tax-btn').addEventListener('click', function () {
    const priceTax = billTex(document.getElementById('input-num').value)
    const priceTax2 = topSheetTex(document.getElementById('input-num').value)
    const priceWithTax = addTex(document.getElementById('input-num').value)
    if (priceWithTax < 1) {
        alert('Please, type numbers greater than 0 for tax. Thank you.');
        document.getElementById('input-num').value = '';
        return;
    } else {
        document.getElementById('num-tax').innerText = priceTax;
        document.getElementById('num-tax2').innerText = priceTax2;
        document.getElementById('num-with-tax').innerText = priceWithTax;
    }
})

document.getElementById('input-num').addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        const priceTax = billTex(document.getElementById('input-num').value)
        const priceTax2 = topSheetTex(document.getElementById('input-num').value)
        const priceWithTax = addTex(document.getElementById('input-num').value)
        if (priceWithTax < 1) {
            alert('Please, type numbers greater than 0 for tax. Thank you.');
            document.getElementById('input-num').value = '';
            return;
        } else {
            document.getElementById('num-tax').innerText = priceTax;
            document.getElementById('num-tax2').innerText = priceTax2;
            document.getElementById('num-with-tax').innerText = priceWithTax;
        }
    }
})

document.getElementById('clean-btn').addEventListener('click', function () {
    document.getElementById('input-num').value = '';
    document.getElementById('num-tax').innerText = '00';
    document.getElementById('num-tax2').innerText = '00';
    document.getElementById('num-with-tax').innerText = '00';
})