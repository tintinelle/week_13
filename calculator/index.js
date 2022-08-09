"use strict";

function calcSum() {
    const firstNumber = prompt("Введите первое число", 1);
    const secondNumber = prompt("Введите второе число", 2);
    const result = (+firstNumber + +secondNumber);
    alert (`Сумма ${firstNumber} и ${secondNumber} равна ${result}!`);
    return result;
}

function calcSubtract() {
    const firstNumber = prompt("Введите первое число", 1);
    const secondNumber = prompt("Введите второе число", 2);
    const result = (firstNumber - secondNumber);
    alert (`Разность ${firstNumber} и ${secondNumber} равна ${result}!`);
    return result;
}

function calcMultiply() {
    const firstNumber = prompt("Введите первое число", 1);
    const secondNumber = prompt("Введите второе число", 2);
    const result = (firstNumber * secondNumber);
    alert (`Произведение ${firstNumber} и ${secondNumber} равно ${result}!`);
    return result;
}

function calcDivide() {
    const firstNumber = prompt("Введите первое число", 1);
    const secondNumber = prompt("Введите второе число", 2);
    const result = (firstNumber / secondNumber);
    alert (`Результат деления ${firstNumber} на ${secondNumber} равен ${result}!`);
    return result;
}