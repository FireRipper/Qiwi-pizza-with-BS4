/*
Fixed basket
*/
$(window).scroll(function () {
    const heightHeader = $('header').outerHeight(true);
    const heightFooter = $('footer').outerHeight(true);
    const heightBasket = $('#basket').outerHeight(true);
    const heightWindow = $('body').height();
    const scrollTop = $(this).scrollTop();

    /*console.log(heightBasket)*/
    const isBot = scrollTop < heightWindow - heightFooter - heightBasket;

    if (scrollTop > heightHeader) {
        if (!isBot) {
            $('#basket').addClass('fixed-basket-footer');
            $('#basket').removeClass('fixed-basket')
        } else {
            $('#basket').addClass('fixed-basket');
            $('#basket').removeClass('fixed-basket-footer');
        }
    } else {
        $('.basket-outer').removeClass('fixed-basket-footer');
        $('#basket').removeClass('fixed-basket')
    }
});

//Show and hidden basket on mobile device 
$(document).ready(function () {
    $('#icon-mobile-basket').click(function () {
        if ($('#basket-mobile-fixed').hasClass('active-basket')) {
            $('#basket-mobile-fixed').removeClass('active-basket');
            $('#menu-overlay').removeClass('active-overlay');
        } else {
            $('#basket-mobile-fixed').addClass('active-basket');
            $('#menu-overlay').addClass('active-overlay');
            $('.active-overlay').click(function () {
                $('#basket-mobile-fixed').removeClass('active-basket');
                $('#menu-overlay').removeClass('active-overlay');
            });
        }
    });
});

function changeSelectRadioButton(index){
    const product = document.getElementById('product-' + index);
    const quantity = product.getElementsByClassName('quantity-product')[0].value = 1;

    let choosecheked = product.querySelector('input[name="order"]:checked').value;
    product.getElementsByClassName('total_price_product')[0].innerText = choosecheked + 'грн.'
}

//Form check
//Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();