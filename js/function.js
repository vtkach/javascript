/**
 * Created by alekseykravchenko on 08.05.15.
 */

/**
 * Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:
 * Используя оператор '?'
 * Используя оператор ||
 */
var age = prompt('age:');
checkAge(age);
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
function checkAge(age) {
    age > 18 || confirm('Родители разрешили?');
}

/**
 * Задача «Hello World» для функций :)
 * Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
 */
console.log(min(12, 4));

function min(a, b) {
    return a < b ? a : b;
}

/**
 * Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и
 * возвращает результат.
 */
function pow(a, b) {
    var result = 0;
    while (b) {
        result += a * a;
        b--;
    }
    return result;
}
console.log(pow(3, 3));