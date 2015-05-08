/**
 * Created by alekseykravchenko on 08.05.15.
 */

/**
 * Напишите if..else, соответствующий следующему switch:
 */
var browser = prompt('Какой у вас браузер?');
if (browser === 'IE') {
    alert( 'О, да у вас IE!' );
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert( 'Да, и эти браузеры мы поддерживаем' );
} else {
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

/**
 * Перепишите код с использованием одной конструкции switch:
 */
var a = +prompt('a?', '');
switch (a) {
    case 0:
        alert('0');
        break;
    case 1:
        alert('1');
        break;
    case 2:
    case 3:
        alert('2, 3');
        break;
}