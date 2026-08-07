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


Сейчас реализовано:


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


Они будут добавляться постепенно.


=================================================
*/








/*
=================================================

ПОЛУЧАЕМ ЭЛЕМЕНТЫ СТРАНИЦЫ


document.getElementById()


Эта команда ищет элемент
по его имени ID.


Например:


HTML:

id="start-button"


JavaScript:

document.getElementById("start-button")



Получаем:


startButton

кнопка START GAME



startScreen

первый экран



characterScreen

второй экран



=================================================
*/


const startButton = document.getElementById("start-button");


const startScreen = document.getElementById("start-screen");


const characterScreen = document.getElementById("character-screen");









/*
=================================================

ПОЛУЧАЕМ НЕВИДИМЫЕ КНОПКИ ПЕРСОНАЖЕЙ


Эти кнопки находятся поверх картинок.


BOY:


id="boy-choice"



GIRL:


id="girl-choice"



Игрок их не видит.


Он нажимает на изображение персонажа.


=================================================
*/


const boyChoice = document.getElementById("boy-choice");


const girlChoice = document.getElementById("girl-choice");









/*
=================================================

SCREEN 3


ПОЛУЧАЕМ ТРЕТИЙ ЭКРАН


introCharacterScreen


Это экран, где появляется:

man start.png

или

girl start.png



introCharacterImage


Это сама картинка персонажа.


Позже здесь можно добавить:


- текст истории;
- кнопку продолжения;
- анимацию.


=================================================
*/


const introCharacterScreen = document.getElementById("intro-character-screen");


const introCharacterImage = document.getElementById("intro-character-image");









/*
=================================================

SCREEN 1 → SCREEN 2


ПЕРЕХОД START GAME


Когда игрок нажимает:


START GAME



Происходит:


1.

Первый экран скрывается.



2.

Появляется экран выбора персонажа.



=================================================
*/


startButton.addEventListener("click", function(){



    /*
    Скрываем стартовый экран.

    Он больше не показывается.
    */


    startScreen.style.display = "none";





    /*
    Показываем экран выбора персонажа.

    display:flex нужен,
    потому что в style.css
    этот экран построен через Flexbox.

    */


    characterScreen.style.display = "flex";



});









/*
=================================================

SCREEN 2 → SCREEN 3


ВЫБОР BOY


Если игрок нажал
на парня:


1.

Экран выбора персонажа скрывается.



2.

Показывается SCREEN 3.



3.

Загружается картинка:


graphics/man start.png



=================================================
*/


boyChoice.addEventListener("click", function(){



    /*
    Убираем экран выбора.

    */


    characterScreen.style.display = "none";





    /*
    Показываем третий экран.

    */


    introCharacterScreen.style.display = "flex";





    /*
    Загружаем изображение парня.

    Важно:

название файла должно полностью совпадать
с названием в папке graphics.


*/

    introCharacterImage.src = "graphics/man start.png";



});









/*
=================================================

SCREEN 2 → SCREEN 3


ВЫБОР GIRL


Если игрок нажал
на девушку:


Показываем:


graphics/girl start.png



=================================================
*/


girlChoice.addEventListener("click", function(){



    /*
    Скрываем экран выбора персонажа.

    */


    characterScreen.style.display = "none";





    /*
    Показываем третий экран.

    */


    introCharacterScreen.style.display = "flex";





    /*
    Загружаем изображение девушки.

    */

    introCharacterImage.src = "graphics/girl start.png";



});