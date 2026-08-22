/*
=================================================

SURVIVALGAME

FILE:

game.js


RESPONSIBILITY:


GAME LOGIC ONLY


game.js controls:


- BUTTON ACTION;
- GAME STATE changes;
- SCREEN transitions;
- conditions;


game.js DOES NOT control:


- graphics;
- CSS;
- asset registry;
- story data;
- event data.



Architecture:


BUTTON

↓

ACTION

↓

GAME LOGIC

↓

GAME STATE

↓

NEXT SCREEN


=================================================
*/



/*
=================================================

GAME STATE


Central game memory.


All systems use only this object.


=================================================
*/


const gameState = {


    character: null,


    location: null,


    items: [],


    selectedItems: [],


    currentItemPreview: null,


    itemReturnScreen: null,


    day: 0,


        currentStory: null,


    currentStoryDay: 0,


    endingResult: null,


    health: 100,


    water: 100,


    food: 100,


    shelter: false,


    storyFlags: {}


};



/*
=================================================

ITEM ICON DATABASE

ITEM ID

↓

ICON FILE

=================================================
*/


const itemIcons = {


    first_aid_kit:
    "assets/icons/icon_first_aid_kit.png",


    headlamp:
    "assets/icons/icon_headlamp.png",


    fishing_rod:
    "assets/icons/icon_fishing_rod.png",


    pistol:
    "assets/icons/icon_pistol.png",


    mobile_phone:
    "assets/icons/icon_mobile_phone.png",


    warm_sweater:
    "assets/icons/icon_warm_sweater.png",


    machete:
    "assets/icons/icon_machete.png",


    coffee_cup:
    "assets/icons/icon_coffee_cup.png",


    tent:
    "assets/icons/icon_tent.png",


    bean_can:
    "assets/icons/icon_bean_can.png",


    cigarettes:
    "assets/icons/icon_cigarettes.png",


    radio:
    "assets/icons/icon_radio.png",


    sunscreen:
    "assets/icons/icon_sunscreen.png",


    binoculars:
    "assets/icons/icon_binoculars.png",


    book:
    "assets/icons/icon_book.png",


    toothpaste:
    "assets/icons/icon_toothpaste.png"


};






const itemData = {


headlamp:{
name:"Headlamp",
image:"assets/items/headlamp.png",
description:"Light source for darkness and night exploration."
},


fishing_rod:{
name:"Fishing Rod",
image:"assets/items/fishing_rod.png",
description:"Tool for fishing and food strategy."
},


first_aid_kit:{
name:"First Aid Kit",
image:"assets/items/first_aid_kit.png",
description:"Medical treatment for injuries and health problems."
},


pistol:{
name:"Pistol",
image:"assets/items/pistol.png",
description:"Emergency protection with limited ammunition."
},


mobile_phone:{
name:"Mobile Phone",
image:"assets/items/mobile_phone.png",
description:"Communication attempt and connection with previous life."
},


warm_sweater:{
name:"Warm Sweater",
image:"assets/items/warm_sweater.png",
description:"Protection from cold conditions."
},


machete:{
name:"Machete",
image:"assets/items/machete.png",
description:"Tool for processing resources and building."
},


coffee_cup:{
name:"Coffee Cup",
image:"assets/items/coffee_cup.png",
description:"Comfort item and possible container."
},


tent:{
name:"Tent",
image:"assets/items/tent.png",
description:"Protection from rain and wind."
},


bean_can:{
name:"Bean Can",
image:"assets/items/bean_can.png",
description:"Food source and future container."
},


cigarettes:{
name:"Cigarettes",
image:"assets/items/cigarettes.png",
description:"Psychological comfort item."
},


radio:{
name:"Radio",
image:"assets/items/radio.png",
description:"Communication and information device."
},


sunscreen:{
name:"Sunscreen",
image:"assets/items/sunscreen.png",
description:"Protection from sun exposure."
},


binoculars:{
name:"Binoculars",
image:"assets/items/binoculars.png",
description:"Observation tool with hidden possibilities."
},


book:{
name:"Book",
image:"assets/items/book.png",
description:"Mental support and possible resource."
},


toothpaste:{
name:"Toothpaste",
image:"assets/items/toothpaste.png",
description:"Personal hygiene and comfort."
}


};




/*
=================================================

STORY SELECTOR SYSTEM


Checks selected items
and chooses story  .

=================================================
*/

function selectStory(){


    const items =
    gameState.items;


    const story1Items =
    [
        "mobile_phone",
        "cigarettes",
        "coffee_cup",
        "book"
    ];


    const story2Items =
    [
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
    ];



    const hasStory1 =
    items.every(
        item => story1Items.includes(item)
    );



    const hasStory2 =
    items.every(
        item => story2Items.includes(item)
    );



    if(hasStory1){

        gameState.currentStory =
        "STORY_1";


        console.log(
        "STORY SELECTED: STORY_1"
        );


        return;

    }



    if(hasStory2){

        gameState.currentStory =
        "STORY_2";


        console.log(
        "STORY SELECTED: STORY_2"
        );


        return;

    }



    gameState.currentStory =
    null;


    console.log(
    "NO STORY MATCH"
    );


}
















console.log("SURVIVALGAME STARTED");





/*
=================================================

SCREEN ELEMENTS


Each screen is identified by SCREEN number.


=================================================
*/


const screens = {


    screen001:
    document.getElementById("screen-001"),


    screen002:
    document.getElementById("screen-002"),


    screen003:
    document.getElementById("screen-003"),


    screen004:
    document.getElementById("screen-004"),


    screen005:
    document.getElementById("screen-005"),


    screen006:
    document.getElementById("screen-006"),


    screen007:
    document.getElementById("screen-007"),


    screen008:
    document.getElementById("screen-008"),


   screen009:
document.getElementById("screen-009"),


screen010:
document.getElementById("screen-010"),


screen011:
document.getElementById("screen-011"),


screen012:
document.getElementById("screen-012"),


screen013:
document.getElementById("screen-013"),


screen014:
document.getElementById("screen-014"),


screen015:
document.getElementById("screen-015"),


screen016:
document.getElementById("screen-016"),


screen017:
document.getElementById("screen-017"),


screen018:
document.getElementById("screen-018"),


screen019:
document.getElementById("screen-019"),


screen020:
document.getElementById("screen-020"),


screen021:
document.getElementById("screen-021"),

screen022:
document.getElementById("screen-022"),


screen023:
document.getElementById("screen-023"),

screen024:
document.getElementById("screen-024"),





screen030:
document.getElementById("screen-030"),


screen031:
document.getElementById("screen-031"),


screen032:
document.getElementById("screen-032"),


screen033:
document.getElementById("screen-033"),


screen034:
document.getElementById("screen-034"),


screen035:
document.getElementById("screen-035"),


screen036:
document.getElementById("screen-036"),


screen037:
document.getElementById("screen-037"),


screen038:
document.getElementById("screen-038")

};














/*
=================================================

CHARACTER IMAGES


SCREEN-003

SCREEN-004


Assets:

man Start.png

girl Start.png

man1.png

girl1.png


=================================================
*/


const introCharacterImage =
document.getElementById(
"intro-character-image"
);



const finalCharacterImage =
document.getElementById(
"final-character-image"
);

/*
=================================================

SCREEN-010

LOCATION CHARACTER RESULT IMAGE

Uses:

gameState.location

+

gameState.character


=================================================
*/


const locationCharacterImage =
document.getElementById(
"location-character-image"
);

/*
=================================================

SCREEN-012

SCREEN-013

SCREEN-014

ITEM SELECTION CHARACTER IMAGE


Uses:

gameState.character


=================================================
*/


const itemCharacterImage =
document.getElementById(
"item-character-image"
);



const itemResultCharacterImage =
document.getElementById(
"item-result-character-image"
);

const itemIntroImage =
document.getElementById(
"item-intro-image"
);


const itemIntroName =
document.getElementById(
"item-intro-name"
);


const itemIntroDescription =
document.getElementById(
"item-intro-description"
);

const rouletteArrow =
document.getElementById(
"roulette-arrow"
);





/*
=================================================

BUTTON ELEMENTS


BUTTON REGISTRY:


SCREEN-001

button-screen-001-01


SCREEN-002

button-screen-002-01
button-screen-002-02


etc.


=================================================
*/


const buttons = {


    start:
    document.getElementById(
    "button-screen-001-01"
    ),



    boy:
    document.getElementById(
    "button-screen-002-01"
    ),



    girl:
    document.getElementById(
    "button-screen-002-02"
    ),



    introContinue:
    document.getElementById(
    "button-screen-003-01"
    ),



    resultContinue:
    document.getElementById(
    "button-screen-004-01"
    ),



    coconut:
    document.getElementById(
    "button-screen-005-01"
    ),



    lake:
    document.getElementById(
    "button-screen-005-02"
    ),



    bamboo:
    document.getElementById(
    "button-screen-005-03"
    ),



    banana:
    document.getElementById(
    "button-screen-005-04"
   ),


    coconutNext:
document.getElementById(
"button-screen-006-01"
),

lakeNext:
document.getElementById(
"button-screen-007-01"
),

bambooNext:
document.getElementById(
"button-screen-008-01"
),

bananaNext:
document.getElementById(
"button-screen-009-01"
),

locationCharacterNext:
document.getElementById(
"button-screen-010-01"
),


firstEvent:
document.getElementById(
"button-screen-011-01"
),


chooseItems:
document.getElementById(
"button-screen-012-01"
),


confirmSelectedItems:
document.getElementById(
"button-screen-013-01"
),



itemFirstAidKitView:
document.getElementById(
"button-item-first_aid_kit-view"
),


itemFirstAidKitSelect:
document.getElementById(
"button-item-first_aid_kit-select"
),






confirmItems:
document.getElementById(
"button-screen-014-01"
),


itemIntroBack:
document.getElementById(
"button-screen-015-back"
),


story016Next:
document.getElementById(
"button-screen-016-01"
),


story017Next:
document.getElementById(
"button-screen-017-01"
),


story018Next:
document.getElementById(
"button-screen-018-01"
),


story019Next:
document.getElementById(
"button-screen-019-01"
),


story020Next:
document.getElementById(
"button-screen-020-01"
),


story021Next:
document.getElementById(
"button-screen-021-01"
),




roulette:
document.getElementById(
"button-screen-022-01"
),


story023Next:
document.getElementById(
"button-screen-023-01"
),


authorNext:
document.getElementById(
"button-screen-024-01"
),










story030Next:
document.getElementById("button-screen-030-01"),


story031Next:
document.getElementById("button-screen-031-01"),


story032Next:
document.getElementById("button-screen-032-01"),


story033Next:
document.getElementById("button-screen-033-01"),


story034Next:
document.getElementById("button-screen-034-01"),


story035Next:
document.getElementById("button-screen-035-01"),


roulette2:
document.getElementById(
"button-screen-036-01"
),


story037Next:
document.getElementById(
"button-screen-037-01"
),


author038Next:
document.getElementById(
"button-screen-038-01"
),


};















/*
=================================================

SCREEN TRANSITION SYSTEM


Only this function changes screens.


=================================================
*/


function showScreen(screen){



    Object.values(screens).forEach(
        function(item){


            if(item){

                item.style.display="none";

            }


        }
    );



    if(screen){

        screen.style.display="block";

    }


}







/*
=================================================

SCREEN-001

START GAME


ACTION:

start_game


NEXT:

SCREEN-002


=================================================
*/


buttons.start.addEventListener(
"click",
function(){



    showScreen(
        screens.screen002
    );


});







/*
=================================================

SCREEN-002

CHARACTER CHOICE


ACTION:

choose_character


VALUE:

boy


STATE:

gameState.character="boy"


=================================================
*/


buttons.boy.addEventListener(
"click",
function(){



    gameState.character="boy";



    introCharacterImage.src =
    "graphics/man Start.png";



    showScreen(
        screens.screen003
    );



});







/*
=================================================

SCREEN-002

CHARACTER CHOICE


ACTION:

choose_character


VALUE:

girl


STATE:

gameState.character="girl"


=================================================
*/


buttons.girl.addEventListener(
"click",
function(){



    gameState.character="girl";



    introCharacterImage.src =
    "graphics/girl Start.png";



    showScreen(
        screens.screen003
    );


});







/*
=================================================

SCREEN-003

CHARACTER INTRO START


ACTION:

continue_story


NEXT:

SCREEN-004


=================================================
*/


buttons.introContinue.addEventListener(
"click",
function(){



    if(gameState.character==="boy"){


        finalCharacterImage.src =
        "graphics/man1.png";


    }



    if(gameState.character==="girl"){


        finalCharacterImage.src =
        "graphics/girl1.png";


    }



    showScreen(
        screens.screen004
    );



});







/*
=================================================

SCREEN-004

CHARACTER RESULT


ACTION:

continue_story


NEXT:

SCREEN-005


=================================================
*/


buttons.resultContinue.addEventListener(
"click",
function(){



    showScreen(
        screens.screen005
    );


});







/*
=================================================

SCREEN-005

LOCATION MAP


ACTION:

choose_location


STATE:

gameState.location


=================================================
*/


function chooseLocation(
location,
nextScreen
){



    gameState.location =
    location;



    showScreen(
        nextScreen
    );



}





buttons.coconut.addEventListener(
"click",
function(){



    chooseLocation(
        "coconut",
        screens.screen006
    );


});






buttons.lake.addEventListener(
"click",
function(){



    chooseLocation(
        "lake",
        screens.screen007
    );


});







buttons.bamboo.addEventListener(
"click",
function(){



    chooseLocation(
        "bamboo",
        screens.screen008
    );


});






buttons.banana.addEventListener(
"click",
function(){



    chooseLocation(
        "banana",
        screens.screen009
    );


});

/*
=================================================

SCREEN-006

COCONUT GROVE INTRO

NEXT:

SCREEN-010

=================================================
*/


buttons.coconutNext.addEventListener(
"click",
function(){

    updateLocationCharacter();





    showScreen(
        screens.screen010
    );

});





/*
=================================================

SCREEN-007

MOUNTAIN LAKE INTRO

NEXT:

SCREEN-010

=================================================
*/


buttons.lakeNext.addEventListener(
"click",
function(){

    updateLocationCharacter();

    showScreen(
        screens.screen010
    );

});





/*
=================================================

SCREEN-008

BAMBOO GROVE INTRO

NEXT:

SCREEN-010

=================================================
*/


buttons.bambooNext.addEventListener(
"click",
function(){

    updateLocationCharacter();

    showScreen(
        screens.screen010
    );

});





/*
=================================================

SCREEN-009

BANANA PLANTATION INTRO

NEXT:

SCREEN-010

=================================================
*/


buttons.bananaNext.addEventListener(
"click",
function(){

    updateLocationCharacter();

    showScreen(
        screens.screen010
    );

});




/*
=================================================

SCREEN-010

LOCATION CHARACTER RESULT


Select image:

LOCATION

+

CHARACTER


=================================================
*/


function updateLocationCharacter(){



    if(
    gameState.location==="coconut" &&
    gameState.character==="boy"
    ){

        locationCharacterImage.src =
        "graphics/LOCAL COCONUT man1.png";

    }



    if(
    gameState.location==="coconut" &&
    gameState.character==="girl"
    ){

        locationCharacterImage.src =
        "graphics/LOCAL COCONUT girl1.png";

    }



    if(
    gameState.location==="lake" &&
    gameState.character==="boy"
    ){

        locationCharacterImage.src =
        "graphics/LOCAL LAKE man1.png";

    }



    if(
    gameState.location==="lake" &&
    gameState.character==="girl"
    ){

        locationCharacterImage.src =
        "graphics/LOCAL LAKE girl1.png";

    }



    if(
    gameState.location==="bamboo" &&
    gameState.character==="boy"
    ){

        locationCharacterImage.src =
        "graphics/LOCAL BAMBOO man1.png";

    }



    if(
    gameState.location==="bamboo" &&
    gameState.character==="girl"
    ){

        locationCharacterImage.src =
        "graphics/LOCAL BAMBOO girl1.png";

    }



    if(
    gameState.location==="banana" &&
    gameState.character==="boy"
    ){

        locationCharacterImage.src =
        "graphics/LOCAL BANANA man1.png";

    }



    if(
    gameState.location==="banana" &&
    gameState.character==="girl"
    ){

        locationCharacterImage.src =
        "graphics/LOCAL BANANA girl1.png";

    }


}


   




/*
=================================================

ITEM SCREEN CHARACTER SELECTOR

Uses:

gameState.character

=================================================
*/


function updateItemCharacter(){


    if(gameState.character==="boy"){


        // SCREEN-013 ITEM SELECTION
        itemCharacterImage.src =
        "graphics/man2.png";


        // SCREEN-014 ITEM RESULT
        itemResultCharacterImage.src =
        "graphics/man item.png";


    }



    if(gameState.character==="girl"){


        // SCREEN-013 ITEM SELECTION
        itemCharacterImage.src =
        "graphics/girl2.png";


        // SCREEN-014 ITEM RESULT
        itemResultCharacterImage.src =
        "graphics/girl item.png";


    }


}


/*
=================================================

SCREEN-010

BUTTON

NEXT:

SCREEN-011


=================================================
*/


buttons.locationCharacterNext.addEventListener(
"click",
function(){


    updateLocationCharacter();


    showScreen(
    screens.screen011
    );


});


/*
=================================================

SCREEN-011

FIRST SURVIVAL EVENT


TEMPORARY TEST


=================================================
*/


buttons.firstEvent.addEventListener(
"click",
function(){


    gameState.day =
    gameState.day + 1;


    console.log(
    "DAY:",
    gameState.day
    );


    updateItemCharacter();


    showScreen(
    screens.screen012
    );


});

/*
=================================================

SCREEN-012

CHOOSE ITEMS

NEXT:

SCREEN-013


=================================================
*/


buttons.chooseItems.addEventListener(
"click",
function(){


    updateItemCharacter();


    showScreen(
    screens.screen013
    );


});





/*
=================================================

ITEM SELECTION SYSTEM

ADD ITEM TO SELECTED ITEMS

=================================================
*/


function selectItem(itemID){


    if(gameState.selectedItems.length >= 4){

        return;

    }


    if(
    gameState.selectedItems.includes(itemID)
    ){

        return;

    }


    gameState.selectedItems.push(itemID);


    console.log(
    "SELECTED ITEMS:",
    gameState.selectedItems
    );


    updateItemSelectionVisual();


}




/*
=================================================

ITEM SELECTION VISUAL SYSTEM

Reads:

gameState.selectedItems

Updates:

all ITEM SELECT buttons

=================================================
*/


function updateItemSelectionVisual(){


    const itemSelectButtons =
    document.querySelectorAll(
    ".item-select-button"
    );


    itemSelectButtons.forEach(
    function(button){


        const itemID =
        button.dataset.itemId;


        if(
        gameState.selectedItems.includes(itemID)
        ){


            button.classList.add(
            "selected"
            );


        }
        else{


            button.classList.remove(
            "selected"
            );


        }


    });


}

/*
=================================================

UNIVERSAL ITEM INTRO SYSTEM

Receives:

ITEM ID

Writes:

gameState.currentItemPreview
gameState.itemReturnScreen

Opens:

SCREEN-015

=================================================
*/


function openItemIntro(itemID, returnScreen){


    gameState.currentItemPreview =
    itemID;


    if(returnScreen){

        gameState.itemReturnScreen =
        returnScreen;

    }
    else{

        gameState.itemReturnScreen =
        screens.screen013;

    }


    itemIntroImage.src =
    itemData[itemID].image;


    itemIntroName.innerText =
    itemData[itemID].name;


    itemIntroDescription.innerText =
    itemData[itemID].description;


    showScreen(
    screens.screen015
    );

    itemIntroName.style.display="none";

itemIntroDescription.style.display="none";


}






















/*
=================================================

UNIVERSAL ITEM VIEW BUTTONS

SCREEN-013

All items:

VIEW ITEM

↓

ITEM ID

↓

SCREEN-015


=================================================
*/


const itemViewButtons =
document.querySelectorAll(
".item-view-button"
);



itemViewButtons.forEach(
function(button){


button.addEventListener(
"click",
function(){


const itemID =
button.dataset.itemId;


openItemIntro(itemID);


});


});





const itemSelectButtons =
document.querySelectorAll(
".item-select-button"
);



itemSelectButtons.forEach(
function(button){


button.addEventListener(
"click",
function(){


const itemID =
button.dataset.itemId;


console.log(
"CLICK ITEM:",
itemID
);


selectItem(itemID);




});


});


/*
=================================================

SCREEN-014 ITEM ICON DISPLAY

Loads selected item icons

=================================================
*/

function updateResultItems(){

    const selected =
    gameState.selectedItems;


    for(let i = 0; i < 4; i++){


        const icon =
        document.getElementById(
        "result-item-" + (i + 1)
        );


        if(selected[i]){


            icon.src =
            itemIcons[selected[i]];


            icon.dataset.itemId =
            selected[i];

            icon.style.zIndex = 100;
            icon.style.cursor = "pointer";


            icon.onclick = function(){


                openItemIntro(
            this.dataset.itemId,
            screens.screen014
           );


            };


        }


    }


}






/*
=================================================

SCREEN-013

CONFIRM SELECTED ITEMS


NEXT:

SCREEN-014


=================================================
*/


buttons.confirmSelectedItems.addEventListener(
"click",
function(){


if(
gameState.selectedItems.length !== 4
){

return;

}


updateResultItems();


showScreen(
screens.screen014
);


});





/*
=================================================

SCREEN-014

CONFIRM ITEMS




NEXT:

SCREEN-015


=================================================
*/


buttons.confirmItems.addEventListener(
"click",
function(){

    gameState.items =
    gameState.selectedItems;


    console.log(
    "ITEMS:",
    gameState.items
    );


    selectStory();



if(
gameState.currentStory === "STORY_1"
){

    if(gameState.character === "boy"){

        document.getElementById(
        "story-day-image"
        ).src =
        "Stories/story1/1storyman/1storymanday1.png";

    }


    if(gameState.character === "girl"){

        document.getElementById(
        "story-day-image"
        ).src =
        "Stories/story1/1storygirl/1storygirlday1.png";

    }


    showScreen(
    screens.screen016
    );

}








if(
gameState.currentStory === "STORY_2"
){

    if(gameState.character === "boy"){

        document.getElementById(
        "story-day-image-030"
        ).src =
        "Stories/story2/2storyman/2storymanday1.png";

    }


    if(gameState.character === "girl"){

        document.getElementById(
        "story-day-image-030"
        ).src =
        "Stories/story2/2storygirl/2storygirlday1.png";

    }


    showScreen(
    screens.screen030
    );

}

});





buttons.itemIntroBack.addEventListener(
"click",
function(){


showScreen(
gameState.itemReturnScreen
);


});




















/*
=================================================

STORY 1 DAY FLOW

DAY 1 → DAY 6

Каждый NEXT:

1. Проверяет персонажа
2. Загружает следующую картинку
3. Открывает следующий экран


=================================================
*/


// DAY 1 → DAY 2

buttons.story016Next.addEventListener(
"click",
function(){


    if(gameState.character === "boy"){

        document.getElementById(
        "story-day-image-017"
        ).src =
        "Stories/story1/1storyman/1storymanday2.png";

    }


    if(gameState.character === "girl"){

        document.getElementById(
        "story-day-image-017"
        ).src =
        "Stories/story1/1storygirl/1storygirlday2.png";

    }


    showScreen(
    screens.screen017
    );


});




// DAY 2 → DAY 3

buttons.story017Next.addEventListener(
"click",
function(){


    if(gameState.character === "boy"){

        document.getElementById(
        "story-day-image-018"
        ).src =
        "Stories/story1/1storyman/1storymanday3.png";

    }


    if(gameState.character === "girl"){

        document.getElementById(
        "story-day-image-018"
        ).src =
        "Stories/story1/1storygirl/1storygirlday3.png";

    }


    showScreen(
    screens.screen018
    );


});




// DAY 3 → DAY 4

buttons.story018Next.addEventListener(
"click",
function(){


    if(gameState.character === "boy"){

        document.getElementById(
        "story-day-image-019"
        ).src =
        "Stories/story1/1storyman/1storymanday4.png";

    }


    if(gameState.character === "girl"){

        document.getElementById(
        "story-day-image-019"
        ).src =
        "Stories/story1/1storygirl/1storygirlday4.png";

    }


    showScreen(
    screens.screen019
    );


});




// DAY 4 → DAY 5

buttons.story019Next.addEventListener(
"click",
function(){


    if(gameState.character === "boy"){

        document.getElementById(
        "story-day-image-020"
        ).src =
        "Stories/story1/1storyman/1storymanday5.png";

    }


    if(gameState.character === "girl"){

        document.getElementById(
        "story-day-image-020"
        ).src =
        "Stories/story1/1storygirl/1storygirlday5.png";

    }


    showScreen(
    screens.screen020
    );


});




// DAY 5 → DAY 6

buttons.story020Next.addEventListener(
"click",
function(){


    if(gameState.character === "boy"){

        document.getElementById(
        "story-day-image-021"
        ).src =
        "Stories/story1/1storyman/1storymanday6.png";

    }


    if(gameState.character === "girl"){

        document.getElementById(
        "story-day-image-021"
        ).src =
        "Stories/story1/1storygirl/1storygirlday6.png";

    }


    showScreen(
    screens.screen021
    );


});

buttons.story021Next.addEventListener(
"click",
function(){

    showScreen(
    screens.screen022
    );

});









/*
=================================================

ROULETTE SYSTEM

REAL ANGLE RESULT

=================================================
*/

let rouletteCurrentAngle = 0;

let rouletteSpinning = false;



/*
=================================================

STORY 2 ROULETTE SYSTEM

=================================================
*/


let rouletteCurrentAngle2 = 0;

let rouletteSpinning2 = false;


const rouletteArrow2 =
document.getElementById(
"roulette-arrow-2"
);





buttons.roulette.addEventListener(
"click",
function(){


    if(rouletteSpinning){

        return;

    }


    rouletteSpinning = true;



   let finalAngle;


if(Math.random() < 0.7){

    // GREEN ZONE
    finalAngle =
    Math.floor(
    Math.random() * 180
    );

}
else{

    // RED ZONE
    finalAngle =
    180 +
    Math.floor(
    Math.random() * 180
    );

}


  const spins = 5 + Math.floor(Math.random() * 3);



    rouletteCurrentAngle += spins * 360 + finalAngle;


rouletteArrow.style.transition =
"transform 4s ease-out";


rouletteArrow.style.transform =
"translate(-50%,-50%) rotate("
+ rouletteCurrentAngle +
"deg)";





    setTimeout(
    function(){



        checkRouletteResult(
        finalAngle
        );


        rouletteSpinning=false;


    },
    4200
    );



});





function checkRouletteResult(angle){


    console.log(
    "ROULETTE ANGLE:",
    angle
    );



    if(angle < 180){


        console.log(
        "GREEN ZONE - SURVIVAL"
        );



        if(gameState.character === "boy"){


            document.getElementById(
            "story-day-image-023"
            ).src =
            "Stories/story1/1storyman/1storymanday7.png";


        }



        if(gameState.character === "girl"){


            document.getElementById(
            "story-day-image-023"
            ).src =
            "Stories/story1/1storygirl/1storygirlday7.png";


        }



    }
    else{


        console.log(
        "RED ZONE - DEATH"
        );



        if(gameState.character === "boy"){


            document.getElementById(
            "story-day-image-023"
            ).src =
            "Stories/story1/1storyman/1storymanday8.png";


        }



        if(gameState.character === "girl"){


            document.getElementById(
            "story-day-image-023"
            ).src =
            "Stories/story1/1storygirl/1storygirlday8.png";


        }



    }



    showScreen(
    screens.screen023
    );

buttons.story023Next.addEventListener(
"click",
function(){


showScreen(
screens.screen024
);


});
}






/*
=================================================

STORY 2 ROULETTE

SCREEN-036

=================================================
*/


buttons.roulette2.addEventListener(
"click",
function(){


    if(rouletteSpinning2){

        return;

    }


    rouletteSpinning2 = true;



    let finalAngle2;


    if(Math.random() < 0.7){


        finalAngle2 =
        Math.floor(
        Math.random() * 180
        );


    }
    else{


        finalAngle2 =
        180 +
        Math.floor(
        Math.random() * 180
        );


    }



    const spins2 =
    5 +
    Math.floor(
    Math.random() * 3
    );



    rouletteCurrentAngle2 +=
    spins2 * 360 +
    finalAngle2;



    rouletteArrow2.style.transition =
    "transform 4s ease-out";



    rouletteArrow2.style.transform =
    "translate(-50%,-50%) rotate("
    +
    rouletteCurrentAngle2
    +
    "deg)";



    setTimeout(
    function(){


        checkRouletteResult2(
        finalAngle2
        );


        rouletteSpinning2=false;


    },
    4200
    );


});


/*
=================================================

STORY 2 ROULETTE RESULT

GREEN:
DAY 7

RED:
DAY 8

=================================================
*/


function checkRouletteResult2(angle){


    console.log(
    "STORY 2 ROULETTE ANGLE:",
    angle
    );



    if(angle < 180){


        console.log(
        "STORY 2 GREEN ZONE"
        );


        if(gameState.character === "boy"){


            document.getElementById(
            "story-day-image-037"
            ).src =
            "Stories/story2/2storyman/2storymanday7.png";


        }



        if(gameState.character === "girl"){


            document.getElementById(
            "story-day-image-037"
            ).src =
            "Stories/story2/2storygirl/2storygirlday7.png";


        }



    }
    else{


        console.log(
        "STORY 2 RED ZONE"
        );


        if(gameState.character === "boy"){


            document.getElementById(
            "story-day-image-037"
            ).src =
            "Stories/story2/2storyman/2storymanday8.png";


        }



        if(gameState.character === "girl"){


            document.getElementById(
            "story-day-image-037"
            ).src =
            "Stories/story2/2storygirl/2storygirlday8.png";


        }


    }



    showScreen(
    screens.screen037
    );


}

/*
=================================================

STORY 2 RESULT → AUTHOR

SCREEN-037

=================================================
*/


buttons.story037Next.addEventListener(
"click",
function(){


showScreen(
screens.screen038
);


});











/*
=================================================

STORY 2 DAY FLOW

DAY 1 → DAY 6

=================================================
*/


// DAY 1 → DAY 2

buttons.story030Next.addEventListener(
"click",
function(){


    if(gameState.character==="boy"){

        document.getElementById(
        "story-day-image-031"
        ).src =
        "Stories/story2/2storyman/2storymanday2.png";

    }


    if(gameState.character==="girl"){

        document.getElementById(
        "story-day-image-031"
        ).src =
        "Stories/story2/2storygirl/2storygirlday2.png";

    }


    showScreen(
    screens.screen031
    );


});




// DAY 2 → DAY 3

buttons.story031Next.addEventListener(
"click",
function(){


    if(gameState.character==="boy"){

        document.getElementById(
        "story-day-image-032"
        ).src =
        "Stories/story2/2storyman/2storymanday3.png";

    }


    if(gameState.character==="girl"){

        document.getElementById(
        "story-day-image-032"
        ).src =
        "Stories/story2/2storygirl/2storygirlday3.png";

    }


    showScreen(
    screens.screen032
    );


});




// DAY 3 → DAY 4

buttons.story032Next.addEventListener(
"click",
function(){


    if(gameState.character==="boy"){

        document.getElementById(
        "story-day-image-033"
        ).src =
        "Stories/story2/2storyman/2storymanday4.png";

    }


    if(gameState.character==="girl"){

        document.getElementById(
        "story-day-image-033"
        ).src =
        "Stories/story2/2storygirl/2storygirlday4.png";

    }


    showScreen(
    screens.screen033
    );


});




// DAY 4 → DAY 5

buttons.story033Next.addEventListener(
"click",
function(){


    if(gameState.character==="boy"){

        document.getElementById(
        "story-day-image-034"
        ).src =
        "Stories/story2/2storyman/2storymanday5.png";

    }


    if(gameState.character==="girl"){

        document.getElementById(
        "story-day-image-034"
        ).src =
        "Stories/story2/2storygirl/2storygirlday5.png";

    }


    showScreen(
    screens.screen034
    );


});




// DAY 5 → DAY 6

buttons.story034Next.addEventListener(
"click",
function(){


    if(gameState.character==="boy"){

        document.getElementById(
        "story-day-image-035"
        ).src =
        "Stories/story2/2storyman/2storymanday6.png";

    }


    if(gameState.character==="girl"){

        document.getElementById(
        "story-day-image-035"
        ).src =
        "Stories/story2/2storygirl/2storygirlday6.png";

    }


    showScreen(
    screens.screen035
    );



});


/*
=================================================

STORY 2 DAY 6 → ROULETTE

NEXT:

SCREEN-036

=================================================
*/


buttons.story035Next.addEventListener(
"click",
function(){


    showScreen(
    screens.screen036
    );


});





buttons.authorNext.addEventListener(
"click",
function(){


gameState.character = null;

gameState.location = null;

gameState.items = [];

gameState.selectedItems = [];


// Убираем зелёные галочки
updateItemSelectionVisual();


// очищаем картинки выбранных предметов
for(let i = 1; i <= 4; i++){

    const icon =
    document.getElementById(
    "result-item-" + i
    );

    if(icon){

        icon.src = "";

    }

}



showScreen(
screens.screen001
);


});




/*
=================================================

STORY 2 AUTHOR → RESTART

SCREEN-038

=================================================
*/


buttons.author038Next.addEventListener(
"click",
function(){


gameState.character = null;

gameState.location = null;

gameState.items = [];

gameState.selectedItems = [];


// убрать зелёные галочки

updateItemSelectionVisual();


// очистить выбранные предметы

for(let i = 1; i <= 4; i++){


const icon =
document.getElementById(
"result-item-" + i
);


if(icon){

icon.src = "";

}


}



showScreen(
screens.screen001
);


});



















/*
=================================================

INITIAL STATE


START GAME


Only SCREEN-001 visible.


=================================================
*/



showScreen(
screens.screen001
);

