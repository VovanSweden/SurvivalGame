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


first_aid_kit: {

name:"First Aid Kit",

image:"assets/items/first_aid_kit.png",

description:
"Medical treatment. Helps with injuries and health problems."

},


machete: {

name:"Machete",

image:"assets/items/machete.png",

description:
"Tool for processing resources and building."

},


tent: {

name:"Tent",

image:"assets/items/tent.png",

description:
"Shelter protection from rain and wind."

},


binoculars: {

name:"Binoculars",

image:"assets/items/binoculars.png",

description:
"Observation tool with hidden fire creation possibility."

},


radio: {

name:"Radio",

image:"assets/items/radio.png",

description:
"Communication and information device."

}


};




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
document.getElementById("screen-015")



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
"button-item-first-aid-kit-view"
),


itemFirstAidKitSelect:
document.getElementById(
"button-item-first-aid-kit-select"
),


confirmItems:
document.getElementById(
"button-screen-014-01"
),


itemIntroBack:
document.getElementById(
"button-screen-015-back"
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


    // максимум 4 предмета

    if(gameState.selectedItems.length >= 4){

        return;

    }



    // нельзя выбрать один предмет два раза

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

function updateItemSelectionVisual(){


    if(
    gameState.selectedItems.includes(
    "first_aid_kit"
    )
    ){

        buttons.itemFirstAidKitSelect.innerHTML = "✓";


    }
    else{


        buttons.itemFirstAidKitSelect.innerHTML = "";


    }


}


function openItemIntro(itemID){


gameState.currentItemPreview = itemID;


gameState.itemReturnScreen =
screens.screen013;



itemIntroImage.src =
itemIcons[itemID];


itemIntroName.innerText =
itemData[itemID].name;


itemIntroDescription.innerText =
itemData[itemID].description;


showScreen(
screens.screen015
);


}


/*
=================================================

FIRST AID KIT TEST BUTTON

SCREEN-013

=================================================
*/


buttons.itemFirstAidKitView.addEventListener(
"click",
function(){


openItemIntro(
"first_aid_kit"
);


});

buttons.itemFirstAidKitSelect.addEventListener(
"click",
function(){

selectItem(
"first_aid_kit"
);

});





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

INITIAL STATE


START GAME


Only SCREEN-001 visible.


=================================================
*/




showScreen(
screens.screen001
);

