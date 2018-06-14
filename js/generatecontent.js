// All categories
const products = {
    'pizza': {},
    'buggets': {},
    'set': {},
    'salads': {}
}

const generateProductsHtml = (obj) => {
    preloader()

    const productHtml = obj.productSkelet.clone()
    obj.content.html('')

    const offersFiltered = offers.filter(offer => {
        return offer.category === obj.name
    })

    console.log(asd)

    preloader(false)
}

const generatePizza = (asd) => {
    div.removeAttr('attr-id');
    div.attr('id', 'product-' + index);

    // Name
    div.find('[inner-name]').each(function () {
        this.innerText = pizza.name;
        $(this).removeAttr('inner-name');
    });

    // Image and alt for img
    div.find('[attr-img]').each(function () {
        $(this).attr('src', pizza.img);
        $(this).removeAttr('attr-img');
    });
    div.find('[attr-name]').each(function () {
        $(this).attr('alt', pizza.name);
        $(this).removeAttr('attr-name');
    });

    // Price
    div.find('[inner-price]').each(function () {
        this.innerText = pizza.choose[0].val + 'грн.';
        $(this).removeAttr('inner-price');
    });

    // Composition
    div.find('[block-composition]').each(function () {
        $(this).children().eq(0).click(function () {
            $(this).next().slideToggle(300);
        });
        $(this).children().eq(1).children().text(pizza.composition);
        $(this).removeAttr('event-composition');
    });

    // Form inputs
    div.find('[attr-inputs-form]').each(function () {
        $(this).find('[attr-form-id]').each(function () {
            $(this).attr('id', 'c-' + index + '-' + +$(this).attr('attr-form-id'));
            $(this).attr('onclick', 'changeSelectRadioButton(' + index + ');');
            $(this).removeAttr('attr-form-id');
        });
        $(this).find('[attr-form-for]').each(function (i) {
            $(this).html('<span class="mr-1"></span>' + pizza.choose[i].val + 'грн.' + pizza.choose[i].desc);
            $(this).attr('for', 'c-' + index + '-' + +$(this).attr('attr-form-for'));
            $(this).removeAttr('attr-form-for');
        });
    });

    div.find('.minus').each(function () {
        $(this).click(function () {
            const quantity = div.find('.quantity-product')[0]

            if (quantity.value > 1) {
                --quantity.value;

                // TODO get price:checked * quantity.value. Insert to .total_price_product.text(result)
            }
        });
    });

    div.find('.plus').each(function () {
        $(this).click(function () {
            const quantity = div.find('.quantity-product')[0];
            ++quantity.value;

            // TODO get price:checked * quantity.value. Insert to .total_price_product.text(result)
        });
    });

    contentPizzaHtml.append(div);
}

document.addEventListener("DOMContentLoaded", (event) => {
    Object.keys(products).forEach(key => {
        const content = $('#content-' + key)

        products[key].productSkelet = content.children()
        products[key].content = content
        products[key].name = key
        products[key].func = generatePizza
        content.html('')
    })

   /* console.log(products.pizza.func('sfgergerg'))*/
    
    generateProductsHtml(products.pizza)

    $('.tabs a').on('shown.bs.tab', (e) => {
        const category = e.target.hash.substr(1)
        for (const key in products) {
            if (key === category) {
                generateProductsHtml(products[key])
                return
            }
        }
    })
})

function generateBuggets(bugget, index) {

}

function preloader(start = true) {
    if (start) {
        $('.preloader').addClass('on');
        $('#myTabContent').addClass('d-none');
    } else {
        $('.preloader').removeClass('on');
        $('#myTabContent').removeClass('d-none');
    }
}
