/*
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
    const basketNamePizza = basket.getElementsByClassName('name_pizza_on_basket itm110' + index)[0];
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

/*$(document).ready(function() {
    $('.mobile-basket').click(function() {
       if ($('#basket').is(':hidden')){
            $('#basket').show('slow'); 
        } else {
            $('#basket').hide('slow'); 
        }
    })
});*/

//Fixed basket
$(window).scroll(function(){
        if ($(this).scrollTop() > 55) {
            $('#basket').addClass('fixed-basket');
        } else {
            $('#basket').removeClass('fixed-basket')
        }
    });

//Form check
//Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
