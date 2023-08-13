document.getElementById('get-btn').addEventListener('click', function () {
    const inputFeld = document.getElementById('input-num');
    const inputText = inputFeld.value;

    function addTex(price) {
        const findText = ((price / 95.5) * 4.5);
        const addTex = Number(price) + Number(findText);
        const fullNum = Math.round(addTex);
        return fullNum;
    }
    
    const theTex = addTex(inputText)

    document.getElementById('with-tex').innerText = theTex;
})