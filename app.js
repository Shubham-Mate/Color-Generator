let body = document.getElementsByTagName("body")[0];
let showColorCode = document.getElementsByTagName('h2')[0];
let genBtn = document.getElementById("gen-btn");

// String for Hex Color Codes
let hexValues = '123456789abcdef';


genBtn.addEventListener("click", () => {
    let randColor = generateColor();
    showColorCode.style.display = 'block';
    showColorCode.textContent = `#${randColor}`;
    body.style.backgroundColor = `#${randColor}`;
})


function generateColor () {
    let finColor = '';
    for (let i = 0; i < 6; i++) {
        let randNo = Math.floor(Math.random() * hexValues.length);
        let character = hexValues[randNo];
        finColor += character
    }
    return finColor
}