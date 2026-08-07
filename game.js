/*
=================================================

SURVIVE 30 DAYS

ФАЙЛ:

game.js


НАЗНАЧЕНИЕ:


Этот файл отвечает за логику игры.


Здесь находятся:


- нажатия кнопок;
- переходы между экранами;
- выбор персонажа.



Сейчас реализировано:


SCREEN 1

START GAME


↓

SCREEN 2

CHOOSE YOUR CHARACTER


↓

SCREEN 3

MAN START

или

GIRL START



Пока НЕ реализовано:


- история персонажа;
- карта острова;
- выбор места;
- предметы;
- дни выживания;
- события.


=================================================
*/





/*
=================================================

ПОЛУЧАЕМ ЭЛЕМЕНТЫ СТРАНИЦЫ


document.getElementById()

ищет элемент по его ID.



Например:


HTML:

id="start-button"



JavaScript:

document.getElementById("start-button")



=================================================
*/


const startButton =
document.getElementById("start-button");


const startScreen =
document.getElementById("start-screen");


const characterScreen =
document.getElementById("character-screen");






/*
=================================================

ПОЛУЧАЕМ НЕВИДИМЫЕ ЗОНЫ ВЫБОРА


Эти кнопки находятся поверх:

graphics/fon2.png



BOY:

id="boy-choice"



GIRL:

id="girl-choice"



Игрок их не видит.


=================================================
*/


const boyChoice =
document.getElementById("boy-choice");


const girlChoice =
document.getElementById("girl-choice");







/*
=================================================

SCREEN 3


Получаем третий экран.



intro-character-screen


Это экран, где появляется:


graphics/man Start.png


или


graphics/girl Start.png



intro-character-image


Это изображение персонажа.


=================================================
*/


const introCharacterScreen =
document.getElementById("intro-character-screen");



const introCharacterImage =
document.getElementById("intro-character-image");








/*
=================================================

SCREEN 1 → SCREEN 2


START GAME



Игрок нажимает прозрачную кнопку
на картинке fon1.png.



Происходит:


1.

Первый экран скрывается.



2.

Второй экран появляется.


=================================================
*/


startButton.addEventListener("click", function(){



    /*
    Убираем первый экран.
    */

    startScreen.style.display = "none";



    /*
    Показываем фон fon2.png.
    */

    characterScreen.style.display = "block";



});









/*
=================================================

SCREEN 2 → SCREEN 3


ВЫБОР BOY



Игрок нажал левую часть экрана.



Показываем:


graphics/man Start.png


=================================================
*/


boyChoice.addEventListener("click", function(){



    /*
    Скрываем экран выбора.
    */

    characterScreen.style.display = "none";



    /*
    Показываем третий экран.
    */

    introCharacterScreen.style.display = "flex";



    /*
    Загружаем картинку парня.

    Название файла должно
    полностью совпадать с папкой graphics.

    */

    introCharacterImage.src =
    "graphics/man Start.png";



});









/*
=================================================

SCREEN 2 → SCREEN 3


ВЫБОР GIRL



Игрок нажал правую часть экрана.



Показываем:


graphics/girl Start.png


=================================================
*/


girlChoice.addEventListener("click", function(){



    /*
    Скрываем экран выбора.
    */

    characterScreen.style.display = "none";



    /*
    Показываем третий экран.
    */

    introCharacterScreen.style.display = "flex";



    /*
    Загружаем картинку девушки.

    */

    introCharacterImage.src =
    "graphics/girl Start.png";



});