$(document).ready(function () {
    'use strict'

    const quantityProduct = $('#pizza-products .count-product').length
    const limitProductsOnPage = 6
    const pagination = $('.pagination')
    $('#pizza-products .count-product:gt(' + (limitProductsOnPage - 1) + ')').hide()
    const totalProducts = Math.round(quantityProduct / limitProductsOnPage)
    $(pagination).append('<li class="page-item current-page active-page"><a class="page-link" href="javascript:void(0)">' + 1 + '</a></li>')

    for (let i = 2; i <= totalProducts; i++) {
        $(pagination).append('<li class="page-item current-page"><a class="page-link" href="javascript:void(0)">' + i + '</a></li>')
    }
    $(pagination).append('<li class="page-item"><a id="next-page" class="page-link" href="javascript:void(0)" aria-label="Next"><span aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li>')

    $('.pagination li.current-page').on('click', function () {
        if ($(this).hasClass('active-page')) {
            return false
        } else {
            let currentPage = $(this).index()
            $('.pagination li').removeClass('active-page')
            $(this).addClass('active-page')
            $('#pizza-products .count-product').hide()

            let grandTotal = limitProductsOnPage * currentPage
            for (let i = grandTotal - limitProductsOnPage; i < grandTotal; i++) {
                $('#pizza-products .count-product:eq(' + i + ')').show();
            }
        }
    })

    $('#previous-page').on('click', function () {
        let currentActivePage = $('.pagination li.active-page').index()

        if (currentActivePage === 1) {
            return false
        } else {
            --currentActivePage
            $('.pagination li').removeClass('active-page')
            $('#pizza-products .count-product').hide()

            let grandTotal = limitProductsOnPage * currentActivePage
            for (let i = grandTotal - limitProductsOnPage; i < grandTotal; i++) {
                $('#pizza-products .count-product:eq(' + i + ')').show();
            }
            $('.pagination li.current-page:eq('+ (currentActivePage - 1) +')').addClass('active-page')
        }
    })

    $('#next-page').on('click', function () {
        let currentActivePage = $('.pagination li.active-page').index()
        
        if (currentActivePage === totalProducts) {
            return false
        } else {
            ++currentActivePage
            $('.pagination li').removeClass('active-page')
            $('#pizza-products .count-product').hide()

            let grandTotal = limitProductsOnPage * currentActivePage
            for (let i = grandTotal - limitProductsOnPage; i < grandTotal; i++) {
                $('#pizza-products .count-product:eq(' + i + ')').show();
            }
            $('.pagination li.current-page:eq('+ (currentActivePage - 1) +')').addClass('active-page')
        }
    })
})
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

{/* 
<li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li> */}

function changeSelectRadioButton(index){
    const product = $('#product-' + index);
    product.find('.quantity-product').eq(0).val(1)

    const choosecheked = product.find('input[name="order"]:checked').val()
    product.find('.total_price_product').eq(0).text(choosecheked + ' грн.')
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

