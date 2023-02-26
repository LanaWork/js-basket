// находим элементы на странице кнопка минус , кнопка плюс на странице
const batnMinus = document.querySelector('[data-action="minus"]');
const batnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// отслеживаем клик на кнопку минус
batnMinus.addEventListener('click' , function(){
// условия прикотором не уменьшается меньше 1
if( parseInt(counter.innerText) > 1 ) {
    counter.innerText = --counter.innerText;
}
});
// отслеживаем клик на кнопку плюс
batnPlus.addEventListener('click' , function(){
    console.log('Plus click');
    // увеличиваем счетчик
    counter.innerText = ++counter.innerText;
    });