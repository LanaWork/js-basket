const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {
    // находим кнопку купить
    if (event.target.hasAttribute('data-cart')) {

        const card = event.target.closest('.card');
        // собираем данные о товаре
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,

        };
        // проверка есть ли такой товар в корзине
         const itemInCart = cartWrapper.querySelector('[data-id="'+ productInfo.id +'"]');
       
    //    если товар в корзине
    if (itemInCart) {
        const counterElement = itemInCart.querySelector('[data-counter]');
        counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    }
    // если товара нет в корзине 
    else{

 
       
         // проставляем в шаблон карзины

        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
        <!--< div class="cart-item__top" >-->
             <div class="cart-item__img">
            <img src="${productInfo.imgSrc}" alt="">
         </div>
         <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
                <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

            <!-- cart-item__details -->
            <div class="cart-item__details">

                <div class="items items--small counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                    <div class="price__currency">${productInfo.price}</div>
                </div>


            </div>
            <!-- // cart-item__details -->
           
        </div>
    </div >
</div >`;
        // оеобразим товар в корзине
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }
// сбрасываем товар на единицу
card.querySelector('[data-counter]').innerText = '1';
// отображение статуса корзины
toggleCartStatus();
// пересчет общей стоимости
calcCartPrice();
    }

});