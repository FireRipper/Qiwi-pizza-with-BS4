// Отображение или скрытие прилоадера для пользователя
const preloader = (start = true) => {
    if (start) {
        $('.preloader').addClass('on')
        $('#myTabContent').addClass('d-none')
    } else {
        $('.preloader').removeClass('on')
        $('#myTabContent').removeClass('d-none')
    }
}

const generateGeneral = (obj, offer, index) => {
    const skelet = obj.skelet.html.clone()

    skelet.removeAttr('attr-id')
    skelet.attr('id', 'product-' + index)

    // Name
    skelet.find('[inner-name]').each(function () {
        this.innerText = offer.name
        $(this).removeAttr('inner-name')
    })

    // Image and alt for img
    skelet.find('[attr-img]').each(function () {
        $(this).attr('src', offer.img)
        $(this).removeAttr('attr-img')
    })
    skelet.find('[attr-name]').each(function () {
        $(this).attr('alt', offer.name)
        $(this).removeAttr('attr-name')
    })

    // Price
    skelet.find('[inner-price]').each(function () {
        this.innerText = offer.choose[0].val + 'грн.'
        $(this).removeAttr('inner-price')
    })

    // Composition
    skelet.find('[block-composition]').each(function () {
        $(this).children().eq(0).click(function(){
            $(this).next().slideToggle(300)
        })
        $(this).children().eq(1).children().text(offer.composition)
        $(this).removeAttr('event-composition')
    })

    // Form inputs
    skelet.find('[attr-inputs-form]').each(function () {
        $(this).find('[attr-form-id]').each(function () {
            $(this).attr('id', 'c-' + index + '-' + +$(this).attr('attr-form-id'))
            $(this).removeAttr('attr-form-id')
        })
        $(this).find('[attr-form-input-value]').each(function(i){
            $(this).attr('value', offer.choose[i].val)
            $(this).removeAttr('attr-form-input-value')
        })
        $(this).find('[attr-form-for]').each(function (i) {
            $(this).html('<span class="mr-1"></span>' + offer.choose[i].val + 'грн.' + offer.choose[i].desc)
            $(this).attr('for', 'c-' + index + '-' + +$(this).attr('attr-form-for'))
            $(this).removeAttr('attr-form-for')
        })
        $(this).removeAttr('attr-inputs-form')
    })

    skelet.find('.minus').each(function () {
        $(this).click(function() {
            const quantity = skelet.find('.quantity-product')[0]

            if (quantity.value > 1) {
                --quantity.value

                // TODO get price:checked * quantity.value. Insert to .total_price_product.text(result)
            }
        })
    })

    skelet.find('.plus').each(function () {
        $(this).click(function() {
            const quantity = skelet.find('.quantity-product')[0]
            ++quantity.value

            // TODO get price:checked * quantity.value. Insert to .total_price_product.text(result)
        })
    })

    obj.content.append(skelet)
}

const generateOther = (obj, offer, index) => {
    const skelet = obj.skelet.html.clone()

    skelet.removeAttr('attr-id')
    skelet.attr('id', 'product-' + index)

    // Name
    skelet.find('[inner-name]').each(function () {
        this.innerText = offer.name
        $(this).removeAttr('inner-name')
    })

    // Image and alt for img
    skelet.find('[attr-img]').each(function () {
        $(this).attr('src', offer.img)
        $(this).removeAttr('attr-img')
    })
    skelet.find('[attr-name]').each(function () {
        $(this).attr('alt', offer.name)
        $(this).removeAttr('attr-name')
    })

    // Price
    skelet.find('[inner-price]').each(function () {
        this.innerText = offer.price + 'грн.'
        $(this).removeAttr('inner-price')
    })

    // Composition
    skelet.find('[block-composition]').each(function () {
        $(this).children().eq(0).click(function () {
            $(this).next().slideToggle(300)
        })
        $(this).children().eq(1).children().text(offer.composition)
        $(this).removeAttr('event-composition')
    })

    skelet.find('.minus').each(function () {
        $(this).click(function () {
            const quantity = skelet.find('.quantity-product')[0]

            if (quantity.value > 1) {
                --quantity.value

                // TODO get price:checked * quantity.value. Insert to .total_price_product.text(result)
            }
        })
    })

    skelet.find('.plus').each(function () {
        $(this).click(function () {
            const quantity = skelet.find('.quantity-product')[0]
            ++quantity.value

            // TODO get price:checked * quantity.value. Insert to .total_price_product.text(result)
        })
    })
    obj.content.append(skelet)
}

/*
 * Все типы карточек с нужным методом для обработки
 */
const skelets = {
    'general': {
        method: generateGeneral,
        html: null
    },
    'other': {
        method: generateOther,
        html: null
    }
}

/*
 * Все категории, которые заполняются при загрузке DOM
 * Необходимо указать скелет (html) с нужным методом для обработки
 */
const products = {
    'pizza': {
        skelet: skelets.general
    },
    'buggets': {
        skelet: skelets.other
    },
    'set-of': {
        skelet: skelets.other
    },
    'salads': {
        skelet: skelets.general
    }
}

const generateProductsHtml = (obj) => {
    // Отображаем лоадер пользователю
    preloader()

    // Удаляем старые продукты
    obj.content.html('')

    // Проходим по каждому продукту и добавляем в html
    offers.forEach((offer, index) => {
        if (offer.category === obj.name) {
            obj.skelet.method(obj, offer, index)
        }
    })

    preloader(false)
}

document.addEventListener("DOMContentLoaded", (event) => {
    // Получаем скелеты, для последующего клонирования и генерации товаров.
    skelets.general.html = $('#skelet-general > div')
    skelets.other.html = $('#skelets-other > div')

    // Удаляем блок, содержащий все скелеты.
    $('#skelets_card_all_products').remove()

    Object.keys(products).forEach(key => {
        products[key].content = $(`#${key} > div`)
        products[key].name = key
    })

    // После первой загрузки DOM генерируем товары с категорий "Pizza"
    generateProductsHtml(products.pizza)

    // После переключение вкладки находим нужный объект и начинаем генерацию продуктов
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
