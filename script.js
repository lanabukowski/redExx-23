'use strict';

let regexp = /(^|\s)\b\d+\b\s/gm;

let str = "привет 12 ываыва34 98 3423ыавыа";

console.log(str.match(regexp));

let regexpSecond = /^(25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{2}|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{2}|[0-9])){3}$/;

// ^ - начало строки, в первых скобках описаны вариации допустимых чисел через | - или, далее идет заэкранированный символ точки 
// и во вторых аналогично первому вариации числовых значений допустимых в ipv4, 
// за скобки в фигурных скобках указываем количество повторений 
// $ - конец строки

let ipA = "127.0.0.0";
let ipB = "127.0.155.1000";
let ipC = "127.0т155.10";


console.log(checkIp(ipA));
console.log(checkIp(ipB));
console.log(checkIp(ipC));

function checkIp(str) {
    if (str.match(regexpSecond)) {
        return true
    } else {
        return false
    }
}