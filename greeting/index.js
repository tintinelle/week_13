"use strict";

function greetUser() {
    const message = 'Привет';
    const name = prompt('Как тебя зовут?', 'аноним');
    alert(`${message}, ${name}!`);
    return name;
}
