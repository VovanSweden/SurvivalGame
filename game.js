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


    day: 0,


    health: 100,


    water: 100,


    food: 100,


    shelter: false,


    storyFlags: {}


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
document.getElementById("screen-011")

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
)





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

