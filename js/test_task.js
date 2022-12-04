'use strict'

const totalSpent = 2000;
let payment = 500;
let discount = 0;


if (totalSpent <100){
    console.log(`Не партнёр, скидка 0%`)
} else if (totalSpent >= 100 && totalSpent < 1000) {
    console.log (`Бронзовый партнёр, скидка 2%`);
    discount =0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    console.log (`Серебряный партнёр, скидка 2%`);
    discount =0.05;
} else {
    console.log(`Золотой партнёр, скидка 10%`);
    discount = 0.1;
}
console.log(
    `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
)