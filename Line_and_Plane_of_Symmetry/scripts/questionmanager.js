var question_maxAttempt = 3;
var question_attempted = 0;
var question_isRightOptionClicked = false;
var question_autocorrect = null;
var question_okclick = null;
question_id = null;
var question_optionsList = [];
var question_remainOptions = null;
var question_optionTextId = null;
var question_rightOptionTextId = null;

AFRAME.registerComponent('question', {

    schema: {
        enable: {
            type: 'string',
            default: 'true'
        },
        id: {
            type: 'string'
        },
        option: {
            type: 'string'
        },
        rightOption: {
            type: 'string'
        },
    },

    init: function() {

        var rightOption = this.data.rightOption;
        var option = this.data.option;

        var element = this.el;

        addOptionToList(element);

        element.addEventListener('click', callOnClick);

        function callOnClick(evt) {

            var isEnable = element.getAttribute('question', 'enable').enable;

            if (isEnable == 'true') {
                removeOptionFromList(element);
                element.setAttribute('question', 'enable', 'false');
                //this.setAttribute('click_sound','enable','false');

                var optionList = getQuestionOption(this.getAttribute('question').id);
                SetRemainOption(optionList);

                setId(this.getAttribute('question').id);

                var optionTextId = '#q'.concat(this.getAttribute('question').id).concat(this.getAttribute('question').option).concat('t');
                SetOptionTextId(optionTextId);

                var rightOptionTextId = '#q'.concat(this.getAttribute('question').id).concat(this.getAttribute('question').rightOption).concat('t');
                SetRightOptionTextId(rightOptionTextId);

                if (rightOption == option) {
                    clickedRightOption();
                    ChangeTextColorToGreen();
                } else {
                    clickedWrongOption();
                    ChangeTextColorToRed();
                }
            }


        }

    }
});


function SetOptionTextId(optionTextId) {
    this.question_optionTextId = optionTextId;
}

function SetRightOptionTextId(textId) {
    this.question_rightOptionTextId = textId;
}


function SetRemainOption(options) {
    this.question_remainOptions = options;
}


function DisableOptionInteration() {
    for (let i = 0; i < question_remainOptions.length; i++) {
        question_remainOptions[i].setAttribute('question', 'enable', 'false');
        question_remainOptions[i].setAttribute('click_sound', 'enable', 'false');
    }

    setTimeout(EnableOptionInteration, 2000);
}

function EnableOptionInteration() {
    for (let i = 0; i < question_remainOptions.length; i++) {
        question_remainOptions[i].setAttribute('question', 'enable', 'true');
        question_remainOptions[i].setAttribute('click_sound', 'enable', 'true');
    }
}


function DisableAllOptionInteraction() {
    for (let i = 0; i < question_remainOptions.length; i++) {
        question_remainOptions[i].setAttribute('question', 'enable', 'false');
        question_remainOptions[i].setAttribute('click_sound', 'enable', 'false');
    }
}


function addOptionToList(element) {
    question_optionsList.push(element);
}


function removeOptionFromList(element) {
    var index = question_optionsList.indexOf(element);
    if (index > -1) {
        question_optionsList.splice(index, 1);
    }
}



function setId(id) {
    this.question_id = id;
}


function getQuestionOption(id) {
    let arr = [];

    for (let i = 0; i < question_optionsList.length; i++) {
        if (question_optionsList[i].getAttribute('question').id == id) {
            arr.push(question_optionsList[i]);
        }

    }

    return arr;
}



function updateAttempt() {
    question_attempted++;

    console.log("Attemps now : ", question_attempted);
}


function clickedRightOption() {
    console.log("right option click");
    DisableAllOptionInteraction();
    question_isRightOptionClicked = true;
    updateAttempt();
    addScore(question_id, question_attempted);
    showWelldone();
    setTimeout(showOkButton, 3000);
}


function clickedWrongOption() {
    console.log("wrong option click");
    updateAttempt();

    showTryAgain();

    if (question_maxAttempt == question_attempted) {
        setTimeout(playCurrectOption, 3000);
        setTimeout(autoCurrect, 3000);
        setTimeout(showOkButton, 5000);
        DisableAllOptionInteraction();
    } else {
        DisableOptionInteration();
    }
}




function autoCurrect() {
    addScore(question_id, question_attempted);
    if (question_autocorrect == null)
        console.log("autoCurrect event is null");
    else
        question_autocorrect();
}


function playCurrectOption() {
    PlayVO2('#currectOption');
    ChangeTextColorToGreen();
}


function ok_click() {
    reset();
}


function reset() {
    console.log("All value of question manager reseted");
    question_attempted = 0;
    question_isRightOptionClicked = false;
    question_autocorrect = null;
    question_id = null;
}


function showTryAgain() {
    let entityId = '#tryagain_'.concat(question_id);
    SetActive(entityId, true);
    PlayVO2('#tryagain');
    setTimeout(tryagainWelldoneFalse, 2000);
}


function showWelldone() {
    let entityId = '#welldone_'.concat(question_id);
    SetActive(entityId, true);
    PlayVO2('#welldone');
    setTimeout(tryagainWelldoneFalse, 2000);
}


function tryagainWelldoneFalse() {
    let taId = '#tryagain_'.concat(question_id);
    let wdId = '#welldone_'.concat(question_id);
    SetActive(taId, false);
    SetActive(wdId, false);
}


function showOkButton() {
    let btn_ok = '#btn_ok_'.concat(question_id);
    SetActive(btn_ok, true);
}


function ChangeTextColorToRed() {
    var entity = GetEntityById(question_optionTextId);
    entity.setAttribute('color', 'red');
}

function ChangeTextColorToGreen() {
    var entity = GetEntityById(question_rightOptionTextId);
    entity.setAttribute('color', '#35ff35');
}