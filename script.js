const themeBtn = document.getElementById('themeButton');
themeBtn.addEventListener('click', () => {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'black' ? '#f0f4f8' : 'black';
});
const button = document.getElementById('colorButton');
const title = document.querySelector('h1');

button.addEventListener('click', () => {
    title.style.color = 'hotpink';

    // --- NEW API CODE STARTS HERE ---
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote-text').innerText = data.slip.advice;
        })
        .catch(error => console.log("Messenger failed:", error));
    // --- NEW API CODE ENDS HERE ---
});
const blueBtn = document.getElementById('blueButton');

blueBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'royalblue';
});