// добавляем во все карточки 
window.addEventListener('click', function (event) {
    // объявила константу
    let counter;
    // проверяем клик по кнопкам =/-
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        //  console.log(true)
        // находим обертку с сечиком
        const counterWrapper = event.target.closest('.counter-wrapper')

        // находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
    }

    // проверяем элемент (плюс)
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }
    // проверяем элемент (минус)
    if (event.target.dataset.action === 'minus') {
        // проверяем что бы чесло было больше 1
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
        // Проверка товар который находится в корзине (снижаем до 1)
        else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            // удаляем товар при нажатии меньше 1
            event.target.closest('.cart-item').remove();
            // отображение статуса корзины
            toggleCartStatus();
            // пересчет корзины (суммы)
            calcCartPrice();
        }
    }
// проверяем клик на +/- внутри корзины 
if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
    calcCartPrice();
}
});