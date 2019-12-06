
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
            digit = Math.floor(Math.random() * 10);
        } while (newTarget.includes(digit));
        newTarget.push(digit);
    }
    return newTarget;
}

let inputField = document.querySelector('.attempt');
inputField.addEventListener('keyup', handler
    // (e) => {
    // 		console.log(e.target.attributes.name.value);
    // 		// validate(e.target, patterns[e.target.attributes.name.value]);
        // }
        )

function handler() {
    console.log(targetNumber);
}

// const inputs = document.querySelectorAll('input');
// inputs.forEach((input) => {
// 	input.addEventListener('keyup', (e) => {
// 		console.log(e.target.attributes.name.value);
// 		// validate(e.target, patterns[e.target.attributes.name.value]);
// 	})
// })	


// main
// --------------------------------

const targetNumber = getNewTarget();

console.log(targetNumber);


