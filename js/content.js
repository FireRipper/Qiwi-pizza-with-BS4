const offers = [
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "Бургер Пицца",
        "composition": "Фирменный соус, говяжий фарш, сыр моцарелла, маринованные огурчики, помидор",
        "category": "pizza",
        "choose": [
            { "val": 108, "desc": "(330г.)" },
            { "val": 145, "desc": "(610г.)" },
            { "val": 200, "desc": "(880г.)" }
        ]
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "Куриная",
        "composition": "Цезарь соус, сыр моцарелла, куриное филе, помидоры, сладкий перец, шампиньоны",
        "category": "pizza",
        "choose": [
            { "val": 98,  "desc": "(330г.)" },
            { "val": 147, "desc": "(610г.)" },
            { "val": 199, "desc": "(880г.)" }
        ]
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "Мясная ",
        "composition": "Соус пилати, бекон, помидоры, сыр моцарелла, сладкий перец, говядина, ветчина, пепперони",
        "category": "pizza",
        "choose": [
            { "val": 115, "desc": "(330г.)" },
            { "val": 151, "desc": "(610г.)" },
            { "val": 213, "desc": "(880г.)" }
        ]
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "Барбекю-Мясная",
        "composition": "Соус барбекю, говядина, сыр моцарелла, курица, сладкий перец, помидор",
        "category": "pizza",
        "choose": [
            { "val": 90, "desc": "(330г.)" },
            { "val": 142, "desc": "(610г.)" },
            { "val": 189, "desc": "(880г.)" }
        ]
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "Чили",
        "composition": "Соус пилати, сыр моцарелла, говядина, маслины, халапеньо, колбаски пепперони",
        "category": "pizza",
        "choose": [
            { "val": 120, "desc": "(330г.)" },
            { "val": 190, "desc": "(610г.)" },
            { "val": 240, "desc": "(880г.)" }
        ]
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "Четыре сыра",
        "composition": "Соус пилати, сыры: пармезан, маасдам, дор-блю, моцарелла",
        "category": "pizza",
        "choose": [
            { "val": 96,  "desc": "(330г.)" },
            { "val": 185, "desc": "(610г.)" },
            { "val": 215, "desc": "(880г.)" }
        ]
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "Грибная",
        "composition": "Цезарь соус, сыр моцарелла, чеснок, помидоры, шампиньоны",
        "category": "pizza",
        "choose": [
            { "val": 133, "desc": "(330г.)" },
            { "val": 195, "desc": "(610г.)" },
            { "val": 246, "desc": "(880г.)" }
        ]
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "Пепперони",
        "composition": "Соус пилати, сыр моцарелла, сладкий перец, шампиньоны, колбаски пепперони",
        "category": "pizza",
        "choose": [
            { "val": 140, "desc": "(330г.)" },
            { "val": 205, "desc": "(610г.)" },
            { "val": 268, "desc": "(880г.)" }
        ]
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "Гавайская",
        "composition": "Соус пилати, сыр моцарелла, ветчина, ананас",
        "category": "pizza",
        "choose": [
            { "val": 115, "desc": "(330г.)" },
            { "val": 187, "desc": "(610г.)" },
            { "val": 253, "desc": "(880г.)" }
        ]
    }
                                /* Buggets*/
    /*,
    {
        "img": "img/buggets-img/bugget-with-chicken.png",
        "name": "Сэндвич-багет с курицей",
        "composition": "Багет мягкий или багет мягкий темный, майонез, салат айсберг, сыр, помидоры, огурцы маринованные, филе курицы гриль",
        "category": "bugget",
        "price": 55,
    },
    {
        "img": "img/buggets-img/bugget-with-buzhenina.jpg",
        "name": "Сэндвич-багет с бужениной",
        "composition": "Багет мягкий или багет мягкий темный, буженина, сыр, кукуруза, помидор, майонез горчица.",
        "category": "bugget",
        "price": 40,
    },
    {
        "img": "img/buggets-img/bugget-with-vetchina.jpg",
        "name": "Сэндвич-багет с курицей",
        "composition": "Багет мягкий или багет мягкий темный, майонез, сыр, ветчина, зелень, базилик",
        "category": "bugget",
        "price": 43,
    },
    {
        "img": "img/buggets-img/bugget-with-cheese.png",
        "name": "Сэндвич-багет с сыром",
        "composition": "Багет мягкий или багет мягкий темный, помидоры, сыр, зелень, майонез",
        "category": "bugget",
        "price": 30,
    },
    {
        "img": "img/buggets-img/bugget-with-cheese-and-garlic.jpg",
        "name": "Сэндвич-багет с чесноком и сыром",
        "composition": "Багет мягкий или багет мягкий темный, сыр, чеснок, масло, зелень, специи",
        "category": "bugget",
        "price": 28,
    },
    {
        "img": "img/buggets-img/bugget-with-cheese-and-bacon.jpg",
        "name": "Сэндвич-багет с беконом и сыром",
        "composition": "Багет мягкий или багет мягкий темный, майонез, твердый сыр, бекон, зеленый лук",
        "category": "bugget",
        "price": 35,
    },
    */
                                    /* Set of*/
    /*{
        "img": "img/set-of-img/set-of-5chesse.png",
        "name": "Пицца сэт №1",
        "composition": "Мини Пицца 5 сыров, мини Пицца деревенская, мини Пицца болоньезе",
        "category": "set-of",
        "price": 190,
    },
    {
        "img": "img/set-of-img/set-of-margarita-paperoni.png",
        "name": "Пицца сэт №2",
        "composition": "Мини Пицца фирменная, мини Пицца Маргарита, мини Пицца Папперони",
        "category": "set-of",
        "price": 180,
    },
    {
        "img": "img/set-of-img/set-of-pizza-ckicken-firm-bavarskaya.png",
        "name": "Пицца сэт №3",
        "composition": "Мини Пицца куриная, мини Пицца испанка, мини Пицца Баварская",
        "category": "set-of",
        "price": 190,
    },
    */
                                /* Salads */
    /*{
        "img": "img/salads-img/salad-with-telyatina.jpg",
        "name": "Салат с телятиной",
        "composition": "Телятина, помидор, перец, лук крымский, салат, пекинская капуста",
        "category": "salad",
        "weight-salad": "150г.",
        "price": 42,
    },
    {
        "img": "img/salads-img/salad-with-semga.jpg",
        "name": "Салат с семгой",
        "composition": "Салат, помидор, огурец, семга, кунжут, соус унаги",
        "category": "salad",
        "weight-salad": "120г.",
        "price": 49,
    },
    {
        "img": "img/salads-img/salad-grecheskii.jpg",
        "name": "Салат греческий",
        "composition": "Салат, маслины, сыр "Фета", помидор, огурец, перец, масло оливковое",
        "category": "salad",
        "weight-salad": "120г.",
        "price": 36,
    },
    {
        "img": "img/salads-img/salad-tsezar-with-chicken.jpg",
        "name": "Салат цезарь с курицой",
        "composition": "Салат, пекинская капуста, помидор, курица, соус",
        "category": "salad",
        "weight-salad": "120г.",
        "price": 25,
    },
    {
        "img": "img/salads-img/salad-ovoschnoj.jpg",
        "name": "Салат овощной",
        "composition": "Перец, помидор, огурец, салат, пекинская капуста",
        "category": "salad",
        "weight-salad": "120г.",
        "price": 19,
    },*/
]