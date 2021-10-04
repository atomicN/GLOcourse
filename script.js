
// 1
const lang = prompt('choose your language','"ru" or "en"').toLowerCase();
const ruWeak = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
const enWeak = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

if (lang == "ru") log(ruWeak);
if (lang == "en") log(enWeak);


switch (lang){
    case "ru":
        log(ruWeak);
        break;
    case "en":
        log(enWeak);
        break;
}

let langArray = [];

langArray['ru'] = ruWeak;
langArray['en'] = enWeak;
log(langArray[lang]);






//2

const namePerson = prompt('Ваше имя?');

namePerson.toLowerCase() == "артем" ? log("директор") :
            namePerson == "александр" ? log("преподаватель"): log("студент");



function log(elem){
    console.log(elem);
}