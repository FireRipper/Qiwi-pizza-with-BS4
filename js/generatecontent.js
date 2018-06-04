let contentPizzaHtml;
let productHtml;

document.addEventListener("DOMContentLoaded", (event) => {
    contentPizzaHtml = $('#content-pizza');
    productHtml = $('#content-pizza > div');

    generateProductsHtml();

    $('.tabs a').on('shown.bs.tab', function (e) {
        // e.target.hash.substr(1) - name
        generateProductsHtml(); // TODO name tab
    });
});

function generateProductsHtml(category = null) {
    contentPizzaHtml.html('');

    // TODO Filter category
    // TODO Structure, functions*
    // TODO Perfomance?
    // TODO Process (loading)

    offers.forEach(function (o, index) {
        const div = productHtml.clone();
        div.removeAttr('attr-id');
        div.attr('id', 'product-' + index);

        // Name
        div.find('[inner-name]').each(function () {
            this.innerText = o.name;
            $(this).removeAttr('inner-name');
        });

        // Image
        div.find('[attr-img]').each(function () {
            $(this).attr('src', o.img);
            $(this).removeAttr('attr-img');
        });

        // Price
        div.find('[inner-price]').each(function () {
            this.innerText = o.choose[0].val + 'грн.';
            $(this).removeAttr('inner-price');
        });

        // Product composition
        div.find('[attr-composition-0]').each(function () {
            $(this).attr('id', 'composition-pizza' + index);
            $(this).removeAttr('attr-composition-0');
        });

        // Button Composition
        div.find('[attr-composition-1]').each(function () {
            $(this).attr('id', 'compositionpizza' + index);
            $(this).removeAttr('attr-composition-1');
        });

        // Composition
        div.find('[inner-composition]').each(function () {
            this.innerText = o.composition;
            $(this).removeAttr('inner-composition');
        });

        // Form inputs
        div.find('[attr-inputs-form]').each(function () {
            $(this).find('[attr-form-id]').each(function () {
                $(this).attr('id', 'c-' + index + '-' + +$(this).attr('attr-form-id'));
                $(this).attr('onclick', 'changeSelectRadioButton(' + index + ');');
                $(this).removeAttr('attr-form-id');
            });
            $(this).find('[attr-form-for]').each(function (i) {
                $(this).html('<span class="mr-1"></span>' + o.choose[i].val + 'грн.' + o.choose[i].desc);
                $(this).attr('for', 'c-' + index + '-' + +$(this).attr('attr-form-for'));
                $(this).removeAttr('attr-form-for');
            });
        });

        div.find('[event-minus-quantity]').each(function () {
            $(this).attr('onclick', 'minusQuantity(' + index + ');');
        });

        div.find('[event-plus-quantity]').each(function () {
            $(this).attr('onclick', 'plusQuantity(' + index + ');');
        });

        contentPizzaHtml.append(div);
    });

    // TODO End process loading
}
