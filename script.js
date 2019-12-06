
/**
 *функция генерирует случайный набор из 4-х не повторяющихся цифр
 *
 * @returns {Array}
 */
function getNewTarget() {
    let newTarget = [];
    for (let i = 0; i < 4; i++) {
        let digit;
        do {
            digit = (Math.floor(Math.random() * 10)).toString();
        } while (newTarget.includes(digit));
        newTarget.push(digit);
    }
    return newTarget;
}

/**
 *функция возвращает массив цифр, которые игрок может использовать при вводе
 *
 * @returns {Array}
 */
function getAllowDigits() {
    let allDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let usedDigits = inputField.value.split('');
    return allDigits.filter(el => !usedDigits.includes(el));
}

/**
 *функция не позволяет игроку вводить символы, кроме разрешенных
 *
 * @param {*} event
 */
function validator(event) {
    let allowDigits = getAllowDigits();
    const keyName = event.key;
    if (!allowDigits.includes(keyName)) {
        event.preventDefault();
    }
    // TODO при вводе 4-й цифры разблокировать кнопку ОТПРАВИТЬ
}


/**
 *функция подсчета очков и проверки на выигрыш
 *
 */
function checkAttempt() {
    let attempt = inputField.value.split('');
    let bulls = 0;
    let cows = 0;
    attempt.forEach((el, index) => {
        if (targetNumber.includes(el)) {
            if (index === targetNumber.indexOf(el)) {
                bulls++;
            } else {
                cows++;
            }
        }
    });
    if (bulls === 4) {
        showMessage('win');
    } else {
        showMessage('nextTurn', bulls, cows); //TODO сделать, чтобы функция могла принимать разные аргументы: либо строку, либо два числа
        inputField.value = '';
    }
}


/**
 *функция выводит сообщение о победе или строку с результатом последнего хода
 *
 * @param {*} str
 * @param {*} bulls
 * @param {*} cows
 */
function showMessage(str, bulls, cows) {
    let scoreboard = document.querySelector('.scoreboard');
    let congratulation = '<p>Вы победили!<p>';
    let attemptRecord = `<p><span>${inputField.value}</span><span>Б:${bulls} К:${cows}</span></p>`;
    if (str === 'win') {
        scoreboard.insertAdjacentHTML('afterbegin', congratulation);
    } else {
        scoreboard.insertAdjacentHTML('afterbegin', attemptRecord);
    }
}




// main
// --------------------------------

const targetNumber = getNewTarget();

const inputField = document.querySelector('.attempt');
inputField.addEventListener('keypress', validator);

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', checkAttempt);

console.log(targetNumber);


