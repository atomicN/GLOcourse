const btn = document.querySelector('#btn'),
    input = document.querySelector('#text'),
    square = document.querySelector('#square'),
    range = document.querySelector('#range'),
    e_btn = document.querySelector('#e_btn'),
    circle = document.querySelector('#circle');

e_btn.style.display = 'none';

btn.addEventListener('click', event => {
    if (input.value) square.style.backgroundColor = `${input.value}`;
});

range.addEventListener('input', event => {
    circle.style.width = `${range.value}%`;
    circle.style.height = `${range.value}%`;
});




