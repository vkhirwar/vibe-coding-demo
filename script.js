const themeBtn = document.getElementById('themeButton');
themeBtn.addEventListener('click', () => {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'black' ? '#f0f4f8' : 'black';
});
const button = document.getElementById('colorButton');
const title = document.querySelector('h1');

button.addEventListener('click', () => {
    title.style.color = 'hotpink';
});
