const offers = [
    {
        "img": "img/pizza-img/pizza-img-size-for-card/burger-pizza-bg-card.png",
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
        "img": "img/pizza-img/pizza-img-size-for-card/kurinaya-pizza-bg-card.png",
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
        "img": "img/pizza-img/pizza-img-size-for-card/masnaya-pizza-bg-card.png",
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
        "img": "img/pizza-img/pizza-img-size-for-card/barbeku-pizza-bg-card.png",
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
        "img": "img/pizza-img/pizza-img-size-for-card/chili-pizza-bg-card.png",
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
        "img": "img/pizza-img/pizza-img-size-for-card/4-cheese-pizza-bg-card.png",
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
        "img": "img/pizza-img/pizza-img-size-for-card/gribnaya-pizza-bg-card.png",
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
        "img": "img/pizza-img/pizza-img-size-for-card/peperonyy-pizza-bg-card.png",
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
        "img": "img/pizza-img/pizza-img-size-for-card/gavayskaya-pizza-bg-card.png",
        "name": "Гавайская",
        "composition": "Соус пилати, сыр моцарелла, ветчина, ананас",
        "category": "pizza",
        "choose": [
            { "val": 115, "desc": "(330г.)" },
            { "val": 187, "desc": "(610г.)" },
            { "val": 253, "desc": "(880г.)" }
        ]
    },
                                /* Buggets*/
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "С курицей",
        "composition": "Багет, майонез, салат айсберг, сыр, помидоры, огурцы маринованные, филе курицы гриль",
        "category": "buggets",
        "price": 55,
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "С бужениной",
        "composition": "Багет, буженина, сыр, кукуруза, помидор, майонез горчица.",
        "category": "buggets",
        "price": 40,
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "С ветчиной",
        "composition": "Багет, майонез, сыр, ветчина, зелень, базилик",
        "category": "buggets",
        "price": 43,
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "С сыром и помидорами",
        "composition": "Багет, помидоры, сыр, зелень, майонез",
        "category": "buggets",
        "price": 30,
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "С чесноком и сыром",
        "composition": "Багет, сыр, чеснок, масло, зелень, специи",
        "category": "buggets",
        "price": 28,
    },
    {
        "img": "img/pizza-img/no-photo-small.jpg",
        "name": "С беконом и сыром",
        "composition": "Багет, майонез, твердый сыр, бекон, зеленый лук",
        "category": "buggets",
        "price": 35,
    },
                                    /* Set of */
    {
        "img": "img/set-of-img/set-of-img-size-for-card/set-of-number-1-bg-card.png",
        "name": "Пицца сэт №1",
        "composition": "Мини Пицца \"Грибная\", мини Пицца \"Чили\", мини Пицца \"Мясная\"",
        "category": "set-of",
        "price": 295,
    },
    {
        "img": "img/set-of-img/set-of-img-size-for-card/set-of-number-2-bg-card.png",
        "name": "Пицца сэт №2",
        "composition": "Мини Пицца \"Гавайская\", мини Пицца \"Барбекю-Мясная\", мини Пицца \"Четыре сыра\"",
        "category": "set-of",
        "price": 220,
    },
    {
        "img": "img/set-of-img/set-of-img-size-for-card/set-of-number-3-bg-card.png",
        "name": "Пицца сэт №3",
        "composition": "Мини Пицца \"Пепперони\", мини Пицца \"Бургер Пицца\", мини Пицца \"Куриная\"",
        "category": "set-of",
        "price": 280,
    },
                                /* Salads */
    {
        "img": "img/salads-img/salads-img-size-for-card/with-telyatina-salad-bg-card.png",
        "name": "С телятиной",
        "composition": "Телятина, помидор, перец, лук крымский, салат, пекинская капуста",
        "category": "salads",
        "choose": [
            { "val": 42, "desc": "(150г.)" },
            { "val": 78, "desc": "(215г.)" },
            { "val": 98, "desc": "(300г.)" }
        ]
    },
    {
        "img": "img/salads-img/salads-img-size-for-card/with-semga-salad-bg-card.png",
        "name": "С семгой",
        "composition": "Салат, помидор, огурец, семга, кунжут, соус унаги",
        "category": "salads",
        "choose": [
            { "val": 49, "desc": "(150г.)" },
            { "val": 83, "desc": "(215г.)" },
            { "val": 106, "desc": "(300г.)" }
        ]
    },
    {
        "img": "img/salads-img/salads-img-size-for-card/grecheskiy-salad-bg-card.png",
        "name": "Греческий",
        "composition": "Салат, маслины, сыр \"Фета\", помидор, огурец, перец, масло оливковое",
        "category": "salads",
        "choose": [
            { "val": 38, "desc": "(150г.)" },
            { "val": 60, "desc": "(215г.)" },
            { "val": 89, "desc": "(300г.)" }
        ]
    },
    {
        "img": "img/salads-img/salads-img-size-for-card/tsezar-with-chicken-salad-bg-card.png",
        "name": "Цезарь с курицой",
        "composition": "Салат, пекинская капуста, помидор, курица, соус",
        "category": "salads",
        "choose": [
            { "val": 27, "desc": "(150г.)" },
            { "val": 45, "desc": "(215г.)" },
            { "val": 64, "desc": "(300г.)" }
        ]
    },
    {
        "img": "img/salads-img/salads-img-size-for-card/ovoschnoj-salad-bg-card.png",
        "name": "Овощной",
        "composition": "Перец, помидор, огурец, салат, пекинская капуста",
        "category": "salads",
        "choose": [
            { "val": 21, "desc": "(150г.)" },
            { "val": 37, "desc": "(215г.)" },
            { "val": 59, "desc": "(300г.)" }
        ]
    }
]