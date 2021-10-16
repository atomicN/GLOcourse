const books = document.querySelectorAll('.book');
const chapter3Title = books[4].querySelector('a');
const chapterTwoContent = books[0].querySelectorAll('li'),
    chapterFiveContent = books[5].querySelectorAll('li'),
    chapterSixContent = books[2].querySelectorAll('li');

chapterTwoContent[3].after(chapterTwoContent[6]);
chapterTwoContent[6].after(chapterTwoContent[8]);

chapterFiveContent[1].after(chapterFiveContent[9]);
chapterFiveContent[4].after(chapterFiveContent[2]);

chapterSixContent[8].insertAdjacentHTML('afterend','<li>Глава 8: За пределами ES6</li>');

books[0].before(books[1]);
books[2].before(books[4]);
books[2].before(books[5]);
books[5].before(books[3]);
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
document.querySelector('.adv').style.display = 'none';
chapter3Title.textContent = 'Книга 3. this и Прототипы Объектов';