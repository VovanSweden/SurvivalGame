/*
====================================================

                STORY DATABASE SYSTEM

                File: stories.js

====================================================


НАЗНАЧЕНИЕ ФАЙЛА:

Этот файл является базой данных всех историй игры.

Он НЕ управляет игрой.
Он НЕ содержит кнопки.
Он НЕ содержит анимации.

Его задача:

1. Хранить список всех историй.
2. Хранить комбинацию предметов,
   которая открывает историю.
3. Хранить путь к папке истории.
4. Хранить номера экранов.
5. Передавать информацию игровому движку.

----------------------------------------------------

ПРИНЦИП РАБОТЫ:

Игрок выбирает 4 предмета.

Например:

tent
machete
fishing_rod
first_aid_kit


game.js проверяет:

Какая история содержит такую комбинацию?


Если найдено:

STORY_3


то игра получает:

folder:
Stories/story3


и начинает загружать:

story3manday1.png
story3manday2.png
story3manday3.png


----------------------------------------------------

ДОБАВЛЕНИЕ НОВОЙ ИСТОРИИ:

Чтобы добавить новую историю:

1. Создать папку:

Stories/story4


2. Добавить изображения.


3. Добавить новый блок:

STORY_4


Логику игры менять НЕ нужно.


====================================================

*/


const stories = {



/*
====================================================
STORY 1

Первая история.

====================================================
*/


STORY_1:{


    priority:100,

    // Какие предметы открывают историю

    items:[

        "mobile_phone",
        "cigarettes",
        "coffee_cup",
        "book"

    ],



    // Папка с файлами истории

  folder:

"Stories/story1",



characters:{


boy:{

folder:
"1storyman",

filePrefix:
"1storyman"

},


girl:{

folder:
"1storygirl",

filePrefix:
"1storygirl"

}


},


    



    // Первый экран истории

    screens:{

    day1:16,

    day2:17,

    day3:18,

    day4:19,

    day5:20,

    day6:21,

    roulette:22,

    result:23,

    author:24

},



    // Количество дней
    days:

    6,

},





/*
====================================================
STORY 2

Вторая история.

====================================================
*/



STORY_2:{


    priority:90,

    // Какие предметы открывают историю

    items:[

        "machete",
        "fishing_rod",
        "first_aid_kit",
        "tent"
    ],



    // Папка с файлами истории

  folder:

"Stories/story2",



characters:{


boy:{

folder:
"2storyman",

filePrefix:
"2storyman"

},


girl:{

folder:
"2storygirl",

filePrefix:
"2storygirl"

}


},


    



    // Первый экран истории

    screens:{

    day1:16,

    day2:17,

    day3:18,

    day4:19,

    day5:20,

    day6:21,

    roulette:22,

    result:23,

    author:24

},



    // Количество дней
    days:

    6,

},










STORY_4:{


priority:70,


items:[

"sunscreen",
"toothpaste",
"tent",
"book"

],


folder:

"Stories/story4",



characters:{


boy:{

folder:
"4storyman",

filePrefix:
"4storyman"

},


girl:{

folder:
"4storygirl",

filePrefix:
"4storygirl"

}


},


    // Первый экран истории

    screens:{

    day1:16,

    day2:17,

    day3:18,

    day4:19,

    day5:20,

    day6:21,

    roulette:22,

    result:23,

    author:24

},



    // Количество дней
    days:

    6,

},
























/*
STORY_3

Базовая тестовая история.

Используется для комбинаций предметов,
которые направляются в эту группу.

В будущем список items может быть изменён
или часть предметов может быть перенесена
в новые истории.

*/


STORY_3:{


    priority:1,

    // Какие предметы открывают историю

    items:[

       "mobile_phone",
        "cigarettes",
        "coffee_cup",
        "book",
        "headlamp",
        "fishing_rod",
        "first_aid_kit",
        "pistol",
        "warm_sweater",
        "machete",
        "tent",
        "bean_can",
        "radio",
        "sunscreen",
        "binoculars",
        "toothpaste"
    ],



    // Папка с файлами истории

  folder:

"Stories/story3",



characters:{


boy:{

folder:
"3storyman",

filePrefix:
"3storyman"

},


girl:{

folder:
"3storygirl",

filePrefix:
"3storygirl"

}


},


    



    // Первый экран истории

    screens:{

    day1:30,

    day2:31,

    day3:32,

    day4:33,

    day5:34,

    day6:35,

    roulette:36,

    result:37,

    author:38

},



    // Количество дней
    days:

    6,

},




















};


/*

====================================================

Экспорт базы

game.js будет получать данные
через переменную:

stories


====================================================

*/