/*function plusQuantity(index) {
    const product = document.getElementById('product' + index);
    const quantity = product.getElementsByClassName('quantity')[0];

    const count = +quantity.value + 1;
    quantity.value = count;

    const cost = product.querySelector('input[name="order"]:checked').value;
    product.getElementsByClassName('total_price_product')[0].innerText = cost * count + 'грн.'
}

function minusQuantity(index) {
    // TODO Continue :)
    const product = document.getElementById('product' + index);
    const quantity = product.getElementsByClassName('quantity')[0];

    const count = +quantity.value - 1;
          count >= 1 ? quantity.value = count : '';

    const cost = product.querySelector('input[name="order"]:checked').value;
    let total_prod = product.getElementsByClassName('total_price_product')[0];
    const price = parseInt(total_prod.innerText);
    	  price > cost ? total_prod.innerText = price - cost + 'грн.' : ''
}
        

function changeSelectRadioButton(index) {
    // TODO
    const product = document.getElementById('product' + index);
    const quantity = product.getElementsByClassName('quantity')[0].value = 1;

    let choosecheked = product.querySelector('input[name="order"]:checked').value;
    product.getElementsByClassName('total_price_product')[0].innerText = choosecheked + 'грн.'
}

function additionOfGoods(index) {
    const product = document.getElementById('product' + index);
    const quantity = product.getElementsByClassName('quantity')[0];
    const basket = document.getElementById('basket_content_in');
    const basketnamepizza = basket.getElementsByClassName('name_pizza_on_basket itm110' + index)[0];
    const basketpricepizza = basket.getElementsByClassName('total_price_on_basket itm110' + index)[0];
    let productnamepizza = product.getElementsByClassName('name_product_pizza')[0];
    let totalpricepizza = product.getElementsByClassName('total_price_product')[0];
    
    if (basketnamepizza) {
        basketnamepizza.innerText = productnamepizza.innerText + ':';
    } else {
        let namePizza = document.createElement('div');
        namePizza.className = 'name_pizza_on_basket itm110' + index;
        basket.appendChild(namePizza, basket);
        basket.getElementsByClassName('name_pizza_on_basket itm110' + index)[0].innerText = productnamepizza.innerText + ':';
    }

    if (basketpricepizza) {
         basketpricepizza.innerText ='Кол-во: ' + quantity.value 
        + ' шт. ' + parseInt(totalpricepizza.innerText) + ' грн.';
    } else {
        let pricePizza = document.createElement('div');
        pricePizza.className = 'total_price_on_basket itm110' + index;
        basket.appendChild(pricePizza, basket);
        basket.getElementsByClassName('total_price_on_basket itm110' + index)[0].innerText ='Кол-во: ' + quantity.value 
        + ' шт. ' + parseInt(totalpricepizza.innerText) + ' грн.';
    }  
}*/


//Show and hidden composition
$(document).ready(function () {
    $('div').each(function (index) {
        $("#composition-pizza" + index).click(function () {
            $("#compositionpizza" + index).slideToggle(300);
        })
    });
});