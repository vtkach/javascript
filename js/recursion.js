/**
 * Created by alekseykravchenko on 08.05.15.
 */
/**
 * Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
 */
function sumTo1(n) {
    var result = n;
    while (n > 1) {
        result += (n - 1);
        n--;
    }
    return result;
}

function sumTo2(n) {
    if (n > 1) {
        return n + sumTo2(n - 1);
    } else {
        return n;
    }
}

function sumTo3(n) {
    return ((1 + n) / 2) * n;
}
console.log(sumTo1(100));

/**
 * Задача — написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.
 */
function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else {
        return n;
    }
}
console.log(factorial(5));

/**
 * Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
 */
function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2);
    } else {
        return n;
    }
}
console.log(fib(6));