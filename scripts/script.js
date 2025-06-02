'use strict'
document.addEventListener('DOMContentLoaded', () => {
    // * 1. Начало.
    // * 2. Получаем все элементы изображений с описанием.
    // * 3. Для каждого изображения (проверяем есть ли такие изображения):
    // *    3.1. Добавляем обработчик наведения курсора на изображение:
    // *        3.1.1. Да:
    // *            3.1.1.1. показываем текст при наведении.
    // *            3.1.2. Нет: продолжаем.
    // *    3.2. Добавляем обработчик курсор уходит с изображения:
    // *        3.3.1. Да: 
    // *            3.3.1.1. Скрываем элемент с описание.
    // *        3.3.2. Нет: продолжаем.
    // * 4. Конец

});


const header = document.querySelector('.header');       // создаем переменную находя блок по классу
const heightHeader = header.offsetHeight;           // определяем высоту блока, включая внутренние отступы

document.addEventListener('scroll', () => {         // навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку

    console.log('Страница скролится');

    let scrollPageY = this.scrollY;                 // получаем значение насколько прокрутили страницу

    if (scrollPageY > heightHeader) {               // условие: если расстояние от верха страницы больше высоты элемента
        header.classList.add('header--scroll')      // устанавливаем класс модификатора на элемент
    } else {
        header.classList.remove('header--scroll')   // удаляем класс модификатора у элемента
    }

});


const CoachesContainer = document.querySelector(".coaches");

if (CoachesContainer) {
    const dataTitleCoaches = [
        "Павлова Елена",
        "Иванов Михаил",
        "Смирнова Мария",
        "Петров Дмитрий",
    ];

    const titleCoaches =
        CoachesContainer.querySelectorAll(".coaches__subtitle");

    titleCoaches.forEach((item, index) => {
        item.textContent = dataTitleCoaches[index];
    });
}

//Объявляем переменную welcоmeButtonModal и сохраняем в нее кнопку c классом welcome__button
const freelessonButtonModal = document.querySelector(".free-lesson__button");
//объявляем переменную modalApplication и сохраняем в нее модальное окно, которое хотим увидеть
const modalApplication = document.querySelector(".applications");

//Если есть такая кнопка и модальное окно
if (freelessonButtonModal && modalApplication) {
    //Для кнопки «Записаться на курс» добавляем обработчик события клика по этой кнопке:
    freelessonButtonModal.addEventListener("click", () => {
        // удаляем атрибут hidden у модального окна modalApplication и модальное окно становится видимым
        modalApplication.removeAttribute("hidden");
    });
}

// добавляем обработчик события при клике вне области формы. Тогда каждый раз, когда пользователь кликает где-либо на фоне вокруг появившейся формы, будет вызываться функция,
window.addEventListener("click", (event) => {
    // проверяем, был ли клик на фоне модального окна
    if (event.target === modalApplication) {
        //если условие выполняется, добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
        modalApplication.setAttribute("hidden", true);
    }
});

//Объявляем переменную closeModalButton и сохраняем в нее кнопку c классом application__button
const closeModalButton = document.querySelector(".application__close");

//Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
closeModalButton.addEventListener("click", () => {
    // Добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
    modalApplication.setAttribute("hidden", true);
});


//Объявляем переменную cardsPrice и сохраняем в нее элемент с классом price
const cardsPrice = document.querySelector('.price');

// Если такой элемент существует
if (cardsPrice) {
    //Объявляем переменную priceList и сохраняем в нее элемент с классом price__list, чтобы мы могли добавить новые элементы
    const priceList = cardsPrice.querySelector('.price__list');

    //Создаем объект cardsPriceData, которая содержит данные для трех карточки.
    const cardsPriceData = {
        // каждая ссылка содержит level (название тарифа), price (цена), description (описание тарифа), button (кнопку для оформления заявки).
        price1: {
            level: '– PRO –',
            price: '11 000 ₽',
            description: '3 месяца',
            button: 'Оставить заявку'
        },
        price2: {
            level: '– POBO –',
            price: '7 900 ₽',
            description: '2 месяцев',
            button: 'Оставить заявку'
        },
        price3: {
            level: '– PROG –',
            price: '4 050 ₽',
            description: '1 месяц',
            button: 'Оставить заявку'
        }
    }

    //Создаем функцию createCard, которая будет добавлять карточку. Внутри функции 4 переменные: level (название тарифа), price (цена), description (описание тарифа), button (кнопку для оформления заявки)
    const createCard = (level, price, description, button) => {
        // Создаем переменную  card, которая будет содержать HTML-код карточки и вставляем туда 4 переменные
        const card = `
            <li class="price__item">
                <p class="price__level">${level}</p>
                <p class="price__price">${price}</p>
                <p class="price__description">${description}</p>
                <button class="price__button button">${button}</button>
            </li>
        `;
        //  Возвращаем значение переменной card
        return card;
    }
    // Создаем цикл for и проходим по всем элементам объекта cardsPriceData.
    for (const cardKey in cardsPriceData) {
        //Получаем данные одной карточки из объекта cardsPriceData 
        const card = cardsPriceData[cardKey];
        //создаем переменную cardElement и вызываем функцию createLink, куда передаем тариф, цену, описание и кнопку (то, из чего будет состоять ваша карточка).
        const cardElement = createCard(card.level, card.price, card.description, card.button);
        // с помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка priceList.
        priceList.insertAdjacentHTML('beforeend', cardElement);
    }
}


//Объявляем переменную buttonsи сохраняем в нее все кнопки для фильтрации с классом .price__btn
const buttons = document.querySelectorAll(".price__btn");
//Объявляем переменную cardsFilterи сохраняем в нее все карточки с курсами с классом .price__item
const cardsFilter = document.querySelectorAll(".price__item");
// Проходим по каждой кнопке фильтрации
buttons.forEach((button) => {
    //добавляем обработчик события клика по кнопке фильтрации:
    button.addEventListener("click", () => {
        // Получаем значение атрибута data-filter нажатой кнопки
        const filter = button.getAttribute("data-filter"); // Получаем значение data-filter
        // Проходим по каждой карточке курса
        cardsFilter.forEach((card) => {
            // Если кнопка "все", показываем все карточки
            if (filter === "all") {
                // Убираем класс hidden
                card.classList.remove("hidden");
            } else {
                // Проверяем, содержит ли карточка нужный класс
                if (card.classList.contains(filter)) {
                    // Убираем класс hidden, если карточка соответствует фильтру
                    card.classList.remove("hidden");
                } else {
                    // Добавляем класс hidden, если карточка не соответствует фильтру
                    card.classList.add("hidden");
                }
            }
        });
    });
});





//Объявляем переменную headerMenu и сохраняем в нее header__menu
const headerMenu = document.querySelector('.header__menu');
// Если такой элемент существует
if (headerMenu) {
    //Объявляем переменную headerList и сохраняем в нее header__list, чтобы мы могли добавить новые элементы
    const headerList = headerMenu.querySelector('.header__list');

    //Создаем объект menuData, который содержит данные для трех ссылок меню.
    const menuData = {
        // Каждая ссылка содержит link (адрес ссылки; если ссылка никуда не ведет, то можно оставить #) и title (текст ссылки).
        link1: {
            link: '#',
            title: 'Главная',
        },
        link2: {
            link: '#',
            title: 'Услуги',
        },
        link3: {
            link: '#',
            title: 'Тренеры',
        }
    }

    //Создаем функцию createLink, которая будет добавлять ссылку в меню. Внутри функции 2 переменные: UrlLink – адрес, а title — текст ссылки.
    const createLink = (UrlLink, title) => {
        // создаем переменную  link, которая будет содержать HTML-код ссылки и вставляем в него 2 переменные
        const link = `
            <li class="header__item"><a href="${UrlLink}" class="header__link">${title}</a></li>
            `;
        return link;
    }

    // Создаем цикл for и проходим по всем элементам объекта menuData.
    for (const linkItem in menuData) {
        //Получаем данные для ссылки и сохраняем в переменную link.
        const link = menuData[linkItem];
        //Создаем переменную linkIndex и вызываем функцию createLink, куда передаем адрес и заголовок.
        const linkIndex = createLink(link.UrlLink, link.title);
        // С помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка headerList.
        headerList.insertAdjacentHTML('beforeend', linkIndex);

    }
}

//Объявляем переменную cardsImages и сохраняем в нее элементы секции images
const cardsImages = document.querySelector(".images");
//  проверяем существует ли элемент cardsImages, если он существует то переходим далее
if (cardsImages) {
    //Объявляем переменную cardListImages и сохраняем в нее список с классом images__list, куда будут добавляться изображения
    const cardListImages = cardsImages.querySelector(".images__list");
    // Пример URL для получения данных с сервера (откуда загружаются данные)
    const apiUrl = "images.json";
    // Функция для создания карточки
    // объявляем функцию, принимает 3 параметра imageUrl, imageAlt, imageWidth

    const createCard = (imageUrl, imageAlt, imageWidth) => {
        // создается переменная image, которая содержит HTML-код для карточки изображения. Внутри <li> (элемента списка) создаются два элемента <img>:
        // 1) Первое изображение (imageUrl[0]) отображается по умолчанию.
        //2) Второе изображение (imageUrl[1]) скрыто изначально с помощью стиля style="display: none;". Это изображение будет показано при клике.
        //
        const image = `
         <li class="images__item">
             <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
             <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
         </li>
     `;
        //возвращает строку image, которая содержит HTML-код для карточки изображения
        return image;
    };

    // Запрос к серверу с помощью метода fetch
    fetch(apiUrl)
        // После того как запрос выполнен, возвращается объект Response, где вызывается метод json(), который преобразует ответ в формат JSON
        .then((response) => response.json())
        //получение данных 
        .then((images) => {
            console.log(images); // Вывод данных в консоль
            console.log(typeof images); // Вывод в консоль Типа полученных данных

            images.forEach((item) => {
                // создается переменная cardElement, где для каждого элемента массива вызывается функция createCard и передаются параметры
                const cardElement = createCard(
                    item.imgUrl,
                    item.imgAlt,
                    item.imgWidth
                );
                console.log(item);
                // Добавление карточки на страницу в список cardListImages  с помощью метода insertAdjacentHTML beforeend указывает, что карточка должна быть добавлена в конец списка
                cardListImages.insertAdjacentHTML("beforeend", cardElement);
            });
            //Объявляем переменную pictures и сохраняем в нее все изображения с классом images__picture 
            const pictures = document.querySelectorAll(".images__picture");
            if (pictures) {
                // Пройдемся по каждому элементу массива pictures, с помощью цикла forEach. 
                pictures.forEach((picture) => {
                    //добавляем обработчик события клика по изображению:
                    picture.addEventListener("click", () => {
                        // получаем родительский элемент текущего изображения
                        const parentItem = picture.parentElement;

                        // Получаем все изображения в родительском элементе, для того чтобы работать только с изображениями, которые находятся в одной карточке
                        const parentPictures =
                            parentItem.querySelectorAll(".images__picture");

                        // проходимся по всем изображениям, найденным в карточке
                        parentPictures.forEach((parentPictures) => {
                            //проверка условия если на текущее изображение не кликали, то оставляем это изображение видимым, иначе скрываем
                            if (parentPictures !== picture) {
                                parentPictures.style.display = "block"; // Показываем другое изображение
                            } else {
                                parentPictures.style.display = "none"; // Скрываем текущее изображение
                            }
                        });
                    });
                });

            }



        });

}

//Объявляем переменную preloader и сохраняем в нее блок с классом .preloader
const preloader = document.querySelector(".preloader");
//Объявляем переменную content и сохраняем в нее блок с классом .content
const content = document.querySelector(".content");
const bodyTag = document.querySelector('body');
bodyTag.style.backgroundColor = "#FFFFFF";

//проверяем существуют ли эти блоки
if (preloader && content) {
    // функция, которая позволяет выполнять код через определенный промежуток времени.
    setTimeout(() => {
        // Скрываем предзагрузчик
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        // и показываем контент
        content.style.display = "block";
        bodyTag.style.backgroundColor = "#fff4c4";

        // Удаляем элемент предзагрузчика со страницы
        preloader.remove();
    }, 3000); // Задержка 3 секунды
}

var swiper = new Swiper(".myswiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// объявляем переменную sliders,куда помещаем элемент с классом swiper
const sliders = document.querySelector('.swiper');
//проверяем существует ли элемент
if (sliders) {
    const swiper1 = new Swiper(sliders, {
        // Пагинация
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
        },

        // Навигационные стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}



//ИСПОЛЬЗОВАНИЕ LOCALSTORAGE задание 3.7
// Объявляем переменную formApplication и помещаем в нее элемент с id "formApplication"
const formApplication = document.querySelector("#formApplication");
// Проверяем, существует ли элемент formApplication
if (formApplication) {
    // Добавляем обработчик события для отправки формы
    formApplication.addEventListener("submit", (event) => {
        event.preventDefault(); // Предотвращаем отправку формы
        // Объявляем переменные "username", "tel","email",   и помещаем в нее элементы с id из формы
        const username = formApplication.querySelector("#username").value;
        const tel = formApplication.querySelector("#tel").value;
        const email = formApplication.querySelector("#email").value;

        // Объявляем переменную modalMessage и помещаем в нее элемент для отображения сообщений о статусе заявки
        const modalMessage = modalApplication.querySelector("#application-message");

        // Проверка длины имени пользователя
        if (username.length < 3) {
            modalMessage.textContent = "Имя пользователя должно содержать не менее 3 символов";
            modalMessage.style.color = "black"; // Устанавливаем цвет сообщения об ошибке
            return;
        }

        // Проверка номера телефона
        if (!/^\d{10,}$/.test(tel)) {
            modalMessage.textContent = "Номер телефона должен содержать только цифры и быть не менее 10 символов";
            modalMessage.style.color = "black"; // Устанавливаем цвет сообщения
            return;
        }

        // Здесь можно добавить отправку данных на сервер
        modalMessage.textContent = "Заявка отправлена!";
        modalMessage.style.color = "green"; // Устанавливаем цвет сообщения для успешной отправки

        // Записываем данные в localStorage
        window.localStorage.setItem("username", username);
        window.localStorage.setItem("tel", tel);
        window.localStorage.setItem("email", email);
    });
}


// ЗАДАНИЕ 3.6.ЧАСТЬ 2    Объявляем переменную cardsCon и сохраняем в нее элементы секции job
const cardsCon = document.querySelector(".job");
//  проверяем существует ли элемент cardsContainer, если он существует то переходим далее
if (cardsCon) {
    //Объявляем переменную cardList и сохраняем в нее список с классом 
    const cardList = cardsCon.querySelector(".job__list");
    // Пример URL для получения данных с сервера (откуда загружаются данные)
    const apiUrl = "data.json";
    // Функция для создания карточки
    // объявляем функцию, принимает 3 параметра imageUrl, imageAlt, imageWidth, iconHeight, title,description
    const createCard = (
        imageUrl,
        iconAlt,
        iconWidth,
        iconHeight,
        title,
        description
    ) => {
        // Шаблонные строки и подстановки
        // создается переменная card, которая содержит HTML-код для карточки изображения. Внутри <li> (элемента списка) создаются три элемента <img>(изображение), <h3>  (заголовок с названием вакансии), <p> (описание вакансии):
        const card = `
                <li class="job__item" href="#">
                      <img class="job__img" src="${imageUrl}" alt="${iconAlt}" width="${iconWidth}" height="${iconHeight}">
                    <h3 class="job__title">${title}</h3>
                    <p class="job__description">${description}</p>
                </li>
            `;
        //возвращает строку card, которая содержит HTML-код для карточки изображения
        return card;

    };
    // Запрос к серверу с помощью метода fetch
    fetch(apiUrl)
        // После того как запрос выполнен, возвращается объект Response, где вызывается метод json(), который преобразует ответ в формат JSON
        .then((response) => response.json())
        //получение данных 
        .then((data) => {
            console.log(data); // Вывод данных в консоль
            console.log(typeof data); // Вывод в консоль Типа полученных данных

            data.forEach((item) => {
                // создается переменная cardElement, где для каждого элемента массива вызывается функция createCard и передаются параметры
                const cardElement = createCard(
                    item.image,
                    item.iconAlt,
                    item.iconWidth,
                    item.iconHeight,
                    item.title,
                    item.description
                );
                // Добавление карточки на страницу в список cardListImages  с помощью метода insertAdjacentHTML beforeend указывает, что карточка должна быть добавлена в конец списка
                cardList.insertAdjacentHTML("beforeend", cardElement);
            });
        })
        //в консоли выводится ошибка если у вас файл не загружается
        .catch((error) => {
            console.error("Ошибка при загрузке данных:", error);
        });
}
