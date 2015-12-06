$("#id_of_textbox").keyup(function(event){
    if(event.keyCode == 13){
        $("btn-up").click();
    }
});

$("#id_of_textbox").keyup(function(event){
    if(event.keyCode == 13){
        $("btn-down").click();
    }
});

function leftArrowPressed() {
   $("#btn-down").click()
}

function rightArrowPressed() {
   $("#btn-up").click()
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 38:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 40:
            rightArrowPressed();
            break;
    }
};
