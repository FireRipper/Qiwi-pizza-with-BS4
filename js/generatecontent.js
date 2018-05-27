document.addEventListener("DOMContentLoaded", (event) => {
    let blockContent = document.getElementById('blockcontent');
    blockContent.innerText = '';

    offers.forEach((offer, index) => {
        const i = index % 2 === 0 ? 1 : 2;

        let div = document.createElement('div');
        div.id = 'product' + index;
        div.className = 'content content' + i;

        div.appendChild(getImg(offer));
        div.appendChild(getNamePizza(offer, i));
        div.appendChild(getDescription(offer));
        div.appendChild(getChoosePizza(offer, index));
        div.appendChild(getAmountOrder(index));

        blockContent.appendChild(div)
    })
});

function getImg(offer) {
    let img = document.createElement('img');

    img.src = offer.img;
    img.alt = offer.alt;
    img.title = offer.alt;

    return img
}

function getNamePizza(offer, i) {
    let div = document.createElement('div');
    div.className = 'name_pizza_c' + i;

    let nameProduct = document.createElement('div');
    nameProduct.className = 'name_product_pizza';
    nameProduct.innerHTML = offer.name;

    let totalPrice = document.createElement('div');
    totalPrice.className = 'total_price';
    totalPrice.innerHTML = `<span>Цена:<br><span class="total_price_product">${offer.choose[0].val}грн.</span></span>`;

    div.appendChild(nameProduct);
    div.appendChild(totalPrice);

    return div
}

function getDescription(offer) {
    let p = document.createElement('p');
    p.innerHTML = `<span>Состав:</span><br>${offer.composition}`;

    return p
}

function getChoosePizza(offer, i) {
    let div = document.createElement('div');
    div.className = 'choosesizepizza';

    let form = document.createElement('form');
    form.name = 'formchoose';
    form.className = 'product';

    offer.choose.forEach((c, index) => {
        const id = 'c-' + index + '-' + i;
        form.innerHTML += `<input type="radio" id="${id}" name="order" value="${c.val}" ${index === 0 ? 'checked' : ''}
                                onclick="changeSelectRadioButton(${i});" />`;
        form.innerHTML += `<label for="${id}"><span></span>${c.val}грн. ${c.desc}</label><br>`
    });

    div.appendChild(form);

    return div
}

function getAmountOrder(index) {
    let div = document.createElement('div');

    div.className = 'amountorder';
    div.innerHTML = '<div class="colvo">Количество:</div>' +
        '            <div class="product-quantity">' +
        '              <span class="btn minus" onclick="minusQuantity(' + index + ')">-</span>' +
        '              <input value="1" class="quantity" readonly>' +
        '              <span class="btn plus" onclick="plusQuantity(' + index + ')">+</span>' +
        '            </div>' +
        '            <a class="buttonz" onclick="additionOfGoods(' + index + ')">Заказать</a>';

    return div
}
