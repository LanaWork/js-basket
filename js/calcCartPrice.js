function calcCartPrice() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItem = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');

    
    let totalPrice = 0;

cartItem.forEach(function(item) {
 const amoutEl = item.querySelector('[data-counter]');
 const priceEl = item.querySelector('.price__currency');
 const currencyPrice = parseInt(amoutEl.innerText) * parseInt(priceEl.innerText);
 totalPrice += currencyPrice;
});
// отображаем цену на странице
totalPriceEl.innerText = totalPrice;
}