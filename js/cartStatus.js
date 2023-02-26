// скрываем/открываем блок корзина пуста, Оформить заказ
function toggleCartStatus(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadg = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');


    if (cartWrapper.children.length > 0){
        cartEmptyBadg.classList.add('none');
        orderForm.classList.remove('none');
    }
     else{
        cartEmptyBadg.classList.remove('none'); 
        orderForm.classList.add('none');

}
}