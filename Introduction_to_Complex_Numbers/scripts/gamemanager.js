///___________________  MainMenu Functions
// <script src="scripts/scoremanager.js"></script>
var p_lookAtTheShapeId = '#p_lookAtTheShape';
var butterflyShapeId = '#shape_Butterfly';
var butterflyShapeLeftId = '#shape_Butterfly_left';
var butterflyShapeRightId = '#shape_Butterfly_right';
var leafShapeId = '#shape_leaf';
var leafShapeLeftId = '#shape_leaf_left';
var leafShapeRightId = '#shape_leaf_right';
var i_clickTheLineToSplitId = '#i_clickTheLineToSplit';
////////////----------------------------------------faiz----------------
var b_L1_completedActivity = '#p_L1';
var s_activityComplete = '#s_p_L1';
////////////---------------------------------/faiz------------

var p_completeId = '#p_complete';

var main_cameraId = '#main_camera';

//////////////// Variable used in AS
var p_score_instId = '#p_score_inst';
var p_comp_asId = '#p_comp_as';
var p_lessthanId = '#p_lessthan';
var p_greaterthanId = '#p_greaterthan';
var l_scoreId = '#l_score';

var isDragClick = false;
var is2attempt = false;
var isClicked = true;
var L_Conj = true;
var R_Conj = false;
var DragCount = 0;

//==============================================================

function EnableWASD_Controls() {
    var entity = document.querySelector(main_cameraId);
    if (entity != null) {
        entity.setAttribute('wasd-controls', 'enabled', 'true');
        entity.setAttribute('wasd-controls', 'adEnabled', 'false');
    }
}



//--------------------------------------Faiz------------------------------

function OnClickLevelL2() {

    // SetActive('#MainMenu',false);
    // SetActive('#L2',true);
    // PlayVO2("#p_L2_ScoreIns");
    // PlayVO2("#Scoring_inst");
}

function clickOnAssessUrKnowledge() {
    SetActive('#L1', false);
    StopVO2(5);
    SetActive('#MainMenu', false);
    SetActive('#L2', true);
    PlayVO2("#p_L2_Scoring");
}

function L1_AnimComplete() {
    SetActive('#MainMenu', false);
    // SetActive('#L1',true);




    setTimeout(() => {
        SetActive(b_L1_completedActivity, true);

        SetActive('#m1', false);
        //SetActive('#L1',false);
        PlayVO2("#p_L1");
    }, 90000)

}



function clickOnScoreIns() {

    SetActive('#p_L2_ScoreIns', false);
    SetActive("#p_L2_MoveToHighlighted", true, .1);
    EnableWASD_Controls();
    PlayVO2("#p_L2_MoveToHighlighted");
    SetActive('#Highlighhted', true);
    SetActive('#l_score', true, .1);

    // let ent=GetEntityById('#Highlighhted');
    // ent.setAttribute('id','Highlighhted_up');

}

function ClickOnHighlighted() {

    var a = document.querySelector('#player');
    a.setAttribute('animation', 'enabled', 'true');
    SetActive('#Highlighhted', false);
    SetActive("#p_L2_MoveToHighlighted", false);
    setTimeout(() => {

        SetActive("#p_L2_ClickOnLamp", true, .1);
        PlayVO2("#p_L2_ClickOnLapm");
        SetActive('#Q1', true);


    }, 3500)



}

function q1_okActivity() {
    console.log("Question attempted" + question_maxAttempt);
    ok_click();
    is2attempt = true;
    SetActive("#p_L2_ClickOnLamp", false);
    SetActive('#Q1', false);
    SetActive('#p_L2_ClickRealPart', true, .1);
    PlayVO2('#p_L2_ClickRealPart');
    SetActive('#Q2', true);


}




function q2_Wrong() {


    addScore(question_id, 2);
    showTryAgain();
    setTimeout(playCurrectOption, 3000);
    setTimeout(autoCurrect, 3000);
    setTimeout(showOkButton, 5000);
    DisableAllOptionInteraction();

}


function q2_okActivity() {

    ok_click();
    is2attempt = true;
    SetActive("#p_L2_ClickRealPart", false);
    SetActive('#Q2', false);
    SetActive('#p_L2_ClickImgPart', true, .1);
    PlayVO2('#p_L2_ClickImgPart');
    SetActive('#Q3', true);

}

function q3_okActivity() {

    ok_click();
    is2attempt = true;
    SetActive("#p_L2_ClickImgPart", false);
    SetActive('#Q3', false);
    SetActive('#p_L2_FindConjugate', true, .1);
    PlayVO2('#p_L2_FindConjugate');
    SetActive('#Q4', true);

}

function ClickOnLdropDwn() {
    SetActive("#L_DropDwn", true);

}

function ClickOnRdropDwn() {
    SetActive("#R_DropDwn", true);

}

function L_CorrectDropDwn() {
    utility_changeText("#L_text", "-");
    SetActive("#L_DropDwn", false);
    L_Conj = true;
}

function L_WrongDropDwn() {

    utility_changeText("#L_text", "+");
    SetActive("#L_DropDwn", false);
    L_Conj = false;

}

function R_CorrectDropDwn() {

    utility_changeText("#R_text", "+");
    SetActive("#R_DropDwn", false);
    R_Conj = true;

}

function R_WrongDropDwn() {

    utility_changeText("#R_text", "-");
    SetActive("#R_DropDwn", false);
    R_Conj = false;

}

function q4_okActivity() {

    ok_click();
    is2attempt = true;
    SetActive("#btn_ok_4", false);
    SetActive('#p_L2_FindConjugate', false, .1);
    if (R_Conj & L_Conj) {
        addScore(4, 1)
        SetActive("#welldone_4", true);
        setTimeout(() => {
            SetActive("#welldone_4", false);
        }, 2000)

        setTimeout(() => {
            SetActive('#p_L2_FindConjugate', false);
            SetActive("#Q4", false);


            SetActive('#Drop_Panel', true);
            SetActive('#p_L2_ClickTheButton', true, .1);

        }, 3000)

    } else {

        addScore(4, 2)
        SetActive("#tryagain_4", true);
        setTimeout(() => {
            SetActive("#tryagain_4", false);
            SetActive("#Q4_RightAns", true);
            PlayVO2('#currectOption');

        }, 3000)

        setTimeout(() => {
            SetActive('#p_L2_FindConjugate', false);
            SetActive("#Q4", false);


            SetActive('#Drop_Panel', true);
            SetActive('#p_L2_ClickTheButton', true, .1);

        }, 7000)

    }



}


function UpperRightMark() {
    isDragClick = true;

    PlayVO2('#p_L2_FindInverse');
    SetActive('#p_L2_FindInverse', true, .1);
    SetActive('#p_L2_ClickTheButton', false);
    DragCount++;
    SetActive("#Drag_Panel", true);
    SetActive('#Q5', true);
    SetActive("#UR_mark", false);

}

function LowerRightMark() {
    isDragClick = true;

    PlayVO2('#p_L2_FindInverse');
    SetActive('#p_L2_FindInverse', true, .1);
    SetActive('#p_L2_ClickTheButton', false);
    DragCount++;
    SetActive("#Drag_Panel", true);
    SetActive('#Q6', true);
    SetActive("#LR_mark", false);

}

function LowerLeftMark() {
    isDragClick = true;

    PlayVO2('#p_L2_FindInverse');
    SetActive('#p_L2_FindInverse', true, .1);
    SetActive('#p_L2_ClickTheButton', false);
    DragCount++;
    SetActive("#Drag_Panel", true);
    SetActive('#Q7', true);
    SetActive("#LL_mark", false);

}

function ShowPanel(i) {

    if (isDragClick) {
        ok_click();
        is2attempt = true;
        isDragClick = !isDragClick;
    }



    if (i == 1) {
        setTimeout(() => {
            SetActive("#t_UpperRight", true);
            SetActive("#Drag_Panel", false);
            SetActive("#Q5", false);
            SetActive('#p_L2_FindInverse', false, .1);
            SetActive('#p_L2_ClickTheButton', true, .1);
            //	SetActive( "#Q7",false);
            //SetActive( "#Q6",false);

            if (DragCount >= 3) {
                SetActive('#p_L2_ClickTheButton', false, .1);
                SetActive("#AfterDragOk", true, .5);
            }


        }, 3000);
    } else if (i == 2) {
        setTimeout(() => {
            SetActive("#t_LowerRight", true);
            SetActive("#Drag_Panel", false);
            SetActive('#p_L2_FindInverse', false, .1);
            SetActive('#p_L2_ClickTheButton', true, .1);
            SetActive("#Q6", false);

            //SetActive( "#Q5",false);
            // SetActive( "#Q7",false);
            if (DragCount >= 3) {
                SetActive('#p_L2_ClickTheButton', false, .1);
                SetActive("#AfterDragOk", true, .5);
            }


        }, 3000);

    } else if (i == 3) {
        setTimeout(() => {
            SetActive("#t_LowerLeft", true);
            SetActive("#Drag_Panel", false);
            SetActive('#p_L2_FindInverse', false, .1);
            SetActive('#p_L2_ClickTheButton', true, .1);


            //SetActive( "#Q5",false);
            SetActive("#Q7", false);
            // SetActive( "#Q6",false);
            if (DragCount >= 3) {
                SetActive('#p_L2_ClickTheButton', false, .1);
                SetActive("#AfterDragOk", true, .5);
            }


        }, 3000);

    }

}


function DragActivityOk() {
    ok_click();
    is2attempt = false;
    SetActive('#p_L2_FindInverse', false, .1);
    SetActive('#p_L2_ClickTheButton', false, .1);

    SetActive('#Drop_Panel', false);
    SetActive('#p_L2_FindInverse', false);
    PlayVO2('#p_L2_MoveNextHighlighted');
    SetActive('#NextHighlighhted', true, 1);
    SetActive('#p_L2_MoveNextHighlighted', true, .1);
    SetActive('#AfterDragOk', false);


}

function ClickNextHighlighted() {

    var a = document.querySelector('#player');
    a.setAttribute('animation__2', 'enabled', 'true');
    SetActive('#p_L2_MoveNextHighlighted', false, .1);
    SetActive('#NextHighlighhted', false);
    setTimeout(() => {

        SetActive('#p_L2_ObserveBouteq', true, .5);
        PlayVO2('#p_L2_ObserveBouteq');


    }, 5000)


}

function ClickBoque_ok() {

    SetActive('#p_L2_ObserveBouteq', false);
    PlayVO2('#p_L2_DragBoquet');
    SetActive('#p_L2_DragBoquet', true, .1);
    SetActive("#Q8", true);
}



function q8_okActivity() {

    ok_click();
    SetActive('#p_L2_DragBoquet', false);



    var entity = document.querySelector('#score_percent');

    entity.setAttribute('value', getPercent().concat(' %'));
    SetActive("#p_here_your_score", true, .5);
    PlayVO2("#p_here_your_score");
    SetActive("#Q8", false);

}


function p_comp_as_click() {
    SetActive("#p_here_your_score", false);
    SetActive(l_scoreId, false);

    if (getPercent() >= '60') {
        SetActive("#p_greaterthan", true, .5);
        PlayVO2("#p_greaterthan");
    } else {

        SetActive("#p_lessthan", true, .5);
        PlayVO2("#p_lessthan");
    }
}


function p_lessthan_click() {
    SetActive("#p_lessthan", false);
    GoToMainMenu();
}


function p_greaterthan_click() {
    SetActive("#p_greaterthan", false);
    GoToMainMenu();
}




function LastQuesEquation() {
    SetActive("#EquationText", true)
}

function L1_AnimComplete() {

    setTimeout(() => {
        SetActive(b_L1_completedActivity, true);

        SetActive('#m1', false);
        //SetActive('#L1',false);
        PlayVO2("#p_L1");
    }, 89000)

}


function btn_close_click() {
    if (login_isReferred()) {
        window.location.href = login_referred_get();
    }
}
//--------------------------------------Faiz------------------------------



// sounds
// var L1Id= '#s_L1';

function OnClickViewLearningObjective() {
    SetActive('#MainMenu', false);
    SetActive('#LO', true);
    PlayVO2('#p_objective');
}

function OnClickLevelL1() {
    SetActive('#MainMenu', false);
    SetActive('#L1', true);
    PlayVO2('#L1');
    // AddAnimationCallBack_mixer(a_L1Id,OnLevel1CompleteInstruction);
}

function OnClickLevelL2() {
    SetActive('#MainMenu', false);
    SetActive('#L2', true);
    PlayVO2(p_L2_1Id);
}

// function OnClickLevelL1()
// {
// 	SetActive('#MainMenu',false);
// 	SetActive('#L1_temp',true);
// 	PlayVO2(p_lookAtTheShapeId);
// }



///___________________  Learning Objective Functions

function OnClickObjectiveOk() {
    SetActive('#LO', false);

    SetActive('#MainMenu', false);
    SetActive('#L1', true);
    PlayVO2('#L1');

}
console.log('now')

/*--------------------------------Level 2 ----------------------*/

function p_L2_1_click() {
    SetActive('#p_L2_1', false);
    SetActive(p_L2_2Id, true);
    EnableWASD_Controls();
    PlayVO2(p_L2_2Id);
}

/*--------------------------------Level 2-----------------------*/



///___________________  Level_1 Functions


function OnLevel1CompleteInstruction(action, direction) {
    console.log("here 2 ", action);
    SetActive(p_L1Id, true);
    PlayVO2(p_L1Id);
}




function p_complete_click() {
    SetActive(p_completeId, false);
    GoToMainMenu();


    console.log("Module Complete");

}




function GoToMainMenu() {
    setTimeout(location.reload.bind(location), 1000);
}



//////////////////////////////////////
// Method used in AS




function q6_ok() {
    ok_click();
    SetActive('#Q6', false);
    var entity = document.querySelector('#score_percent');
    entity.setAttribute('value', getPercent().toFixed(0).concat(' %'));
    SetActive(p_comp_asId, true);
    PlayVO2(p_comp_asId);
}
