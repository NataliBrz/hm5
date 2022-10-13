const form = document.querySelector('form');
const valInput = form.querySelector('[type="text"]');

/*valInput.addEventListener('input', (e) => {
    const val = e.target.value;
    const a = val.trim().toLowerCase();
    return a[0].toUpperCase() + a.slice(1);
})

console.log(valInput);


/*const fioLowerCase = name.trim().toLowerCase();

    return fioLowerCase[0].toUpperCase() + fioLowerCase.slice(1);*/

const prettifyName = (name) => {
    const fioLowerCase = name.trim().toLowerCase();

    return fioLowerCase[0].toUpperCase() + fioLowerCase.slice(1);
}

console.log(prettifyName(valInput))



/*const fio = ' БжЕзицКА    '*/

/*const prettifyName = (name) => {
    const fioLowerCase = name.trim().toLowerCase();

    return fioLowerCase[0].toUpperCase() + fioLowerCase.slice(1);
}

console.log(prettifyName(fio))*/

const text1 = document.getElementById('a');

function up(text1) {
    const text2 = text1.value.trim().toLowerCase();
    return text2.value[0].toUpperCase() + text2.value.slice(1);

    /*text1.value = text2;*/
}

console.log(text1.value)

const comm = document.querySelector('#comment');


const sum = () => {
    const a = comm.value;
    const b = a.replace(/viagra/i, "***");
    console.log(b)
}

console.log(comm)


/*str = "Пожалуйста, посетите веб-сайт viAgra!";
var n = str.replace(/viagra/i, "***");
console.log(n)*/

const formatDate = (date) => {
    const now = new Date();

    if (now.getTime() - date.getTime() < 1000) {
        console.log("Прямо сейчас")
    }
}

console.log(formatDate(new Date(2022, 9, 28, 20, 19, 30)))

let numberRandom = Math.round((Math.random() * 10));
document.write("Случайное число равно " + numberRandom.toString());

let arrayForNumbers = []

function enter() {

    for (i = 0; ; i++) {

        const value = +prompt("Введите число", '');
        if (!value) {
            break;
        }
        arrayForNumbers[i] = value;

        /*if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }*/

        console.log(value)

    }
}