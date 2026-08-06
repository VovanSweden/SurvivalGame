/*
=================================================
SURVIVE 30  DAYS

ФАЙЛ: game.js

Назначение:

Этот файл отвечает за игровую логику.

Сейчас реализована первая функция:

START GAME

После нажатия:

- стартовый экран скрывается;
- экран выбора персонажа появляется.

Позже здесь будут:

- выбор персонажа;
- выбор предметов;
- симуляция дней;
- события;
- победа и поражение.

=================================================
*/


/*
=================================================
Получаем необходимые элементы страницы.

document.getElementById()

ищет элемент по его id.

=================================================
*/

const startButton = document.getElementById("start-button");

const startScreen = document.getElementById("start-screen");

const characterScreen = document.getElementById("character-screen");

/*
=================================================
Получаем элементы третьего экрана.


introScreen

сам экран истории персонажа.


introImage

картинка выбранного персонажа.


=================================================
*/


const introScreen = document.getElementById("intro-screen");

const introImage = document.getElementById("intro-image");



/*
Получаем кнопки выбора персонажа.


boy-character

карточка парня.


girl-character

карточка девушки.


=================================================
*/


const boyCharacter = document.getElementById("boy-character");

const girlCharacter = document.getElementById("girl-character");


/*
=================================================
Обрабатываем нажатие кнопки START GAME.

=================================================
*/

startButton.addEventListener("click", function () {

    /*
    Скрываем стартовый экран.
    */

    startScreen.style.display = "none";


    /*
    Показываем экран выбора персонажа.
    */

    characterScreen.style.display = "flex";

});

/*
=================================================
ВЫБОР ПЕРСОНАЖА


Если игрок выбирает парня:


- экран выбора скрывается;
- появляется INTRO SCREEN;
- загружается man2.png.


=================================================
*/


boyCharacter.addEventListener("click", function () {


    characterScreen.style.display = "none";


    introScreen.style.display = "flex";


    introImage.src = "graphics/man2.png";


});







/*
=================================================
ВЫБОР ДЕВУШКИ


Если игрок выбирает девушку:


- экран выбора скрывается;
- появляется INTRO SCREEN;
- загружается girl2.png.


=================================================
*/


girlCharacter.addEventListener("click", function () {


    characterScreen.style.display = "none";


    introScreen.style.display = "flex";


    introImage.src = "graphics/girl2.png";


});