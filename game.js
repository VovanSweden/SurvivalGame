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

ищет элемент по ID.


Например:


HTML:

id="start-button"


JavaScript:

document.getElementById("start-button")



=================================================
*/



const startButton = document.getElementById("start-button");


const startScreen = document.getElementById("start-screen");


const characterScreen = document.getElementById("character-screen");





/*
=================================================

ПОЛУЧАЕМ НЕВИДИМЫЕ ЗОНЫ ПЕРСОНАЖЕЙ


Эти кнопки находятся поверх изображения fon2.png.


BOY:

id="boy-choice"



GIRL:

id="girl-choice"



Игрок их не видит.


Он просто нажимает
на левую или правую часть картинки.


=================================================
*/


const boyChoice = document.getElementById("boy-choice");


const girlChoice = document.getElementById("girl-choice");





/*
=================================================

SCREEN 3


Получаем третий экран.


intro-character-screen


Это экран, где появляется:


graphics/man start.png


или


graphics/girl start.png




intro-character-image


Это изображение персонажа.


=================================================
*/


const introCharacterScreen = document.getElementById("intro-character-screen");


const introCharacterImage = document.getElementById("intro-character-image");






/*
=================================================

SCREEN 1 → SCREEN 2


START GAME


Когда игрок нажимает на изображение START GAME:


1.

SCREEN 1 скрывается.


2.

SCREEN 2 появляется.


=================================================
*/


startButton.addEventListener("click", function(){



    /*
    Убираем первый экран.
    */

    startScreen.style.display = "none";



    /*
    Показываем выбор персонажа.
    */

    characterScreen.style.display = "block";



});








/*
=================================================

SCREEN 2 → SCREEN 3


ВЫБОР BOY



Игрок нажал на левую часть экрана.


Показываем:


graphics/man start.png



=================================================
*/


boyChoice.addEventListener("click", function(){



    /*
    Скрываем экран выбора.
    */

    characterScreen.style.display = "none";



    /*
    Открываем экран персонажа.
    */

    introCharacterScreen.style.display = "flex";



    /*
    Загружаем картинку парня.
    */

    introCharacterImage.src = "graphics/man start.png";



});








/*
=================================================

SCREEN 2 → SCREEN 3


ВЫБОР GIRL



Игрок нажал на правую часть экрана.


Показываем:


graphics/girl start.png



=================================================
*/


girlChoice.addEventListener("click", function(){



    /*
    Скрываем экран выбора.
    */

    characterScreen.style.display = "none";



    /*
    Открываем экран персонажа.
    */

    introCharacterScreen.style.display = "flex";



    /*
    Загружаем картинку девушки.
    */

    introCharacterImage.src = "graphics/girl start.png";



});