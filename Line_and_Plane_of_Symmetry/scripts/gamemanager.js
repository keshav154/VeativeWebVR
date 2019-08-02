///___________________  MainMenu Functions
var p_lookAtTheShapeId = '#p_lookAtTheShape';
var butterfly_lineId = '#butterfly_line';
var leaf_lineId = '#leaf_line';
var l_symmetryId = '#l_symmetry';
var butterflyShapeId = '#shape_Butterfly';
var butterflyShapeLeftId = '#shape_Butterfly_left';
var butterflyShapeRightId = '#shape_Butterfly_right';
var leafShapeId = '#shape_leaf';
var leafShapeLeftId = '#shape_leaf_left';
var leafShapeRightId = '#shape_leaf_right';
var i_clickTheLineToSplitId = '#i_clickTheLineToSplit';
var b_nextId = '#b_next';
var i_nextToProceedId = '#i_nextToProceed';
var p_theseTwoObjectsId = '#p_theseTwoObjects';
var p_lookAtGivenShapeId = '#p_lookAtGivenShape';

var buildingShapeId = '#shape_building';
var buildingShapeLeftId = '#shape_building_left';
var buildingShapeRightId = '#shape_building_right';
var carShapeId = '#shape_car';
var carShapeLeftId = '#shape_car_left';
var carShapeRightId = '#shape_car_right';

var p_considerThePlaneId = '#p_considerThePlane';
var i_clickThePlainId = '#i_clickThePlain';
var buildingDeviderId = '#buildingDevider';
var carDeviderId = '#carDevider';
var b_next2Id = '#b_next2';
var p_theseTwoObjects2Id = '#p_theseTwoObjects2';
var p_completeId = '#p_complete';


var isLeafClicked = false;
var isButterFlyClicked = false;
var isBuildingDeviderClicked = false;
var isCarDeviderClicked = false;


//////////////// Variable used in AS
var p_score_instId = '#p_score_inst';
var p_comp_asId = '#p_comp_as';
var p_lessthanId = '#p_lessthan';
var p_greaterthanId = '#p_greaterthan';
var l_scoreId = '#l_score';



function OnClickObjective() {
    SetActive('#MainMenu', false);
    SetActive('#LO', true);
    PlayVO2('#p_objective');
}

function OnClickL1() {
    SetActive('#MainMenu', false);
    SetActive('#L1', true);
    PlayVO2(p_lookAtTheShapeId);
}

function OnClickAS() {
    SetActive('#MainMenu', false);
    SetActive('#AS', true);
    PlayVO2(p_score_instId);
}


function btn_close_click() {
    if (login_isReferred()) {
        window.location.href = login_referred_get();
    }
}


///___________________  Learning Objective Functions

function OnClickObjectiveOk() {
    SetActive('#LO', false);
    SetActive('#L1', true);
    SetActive('#MainMenu', false);
    StopVO2(5);
    PlayVO2(p_lookAtTheShapeId);
}



///___________________  Level_1 Functions

function p_lookAtTheShape_click() {
    SetActive(p_lookAtTheShapeId, false);
    SetActive(i_clickTheLineToSplitId, true, 0.1);
    PlayVO2(i_clickTheLineToSplitId);
    SetOnClickListener(butterfly_lineId, 'butterfly_line_click();');
    SetOnClickListener(leaf_lineId, 'leaf_line_click();');
    ClickSound(leaf_lineId, true);
    ClickSound(butterfly_lineId, true);

    let line = GetEntityById(leaf_lineId);
    line.setAttribute('cardboard_input', '');

    line = GetEntityById(butterfly_lineId);
    line.setAttribute('cardboard_input', '');

}




function butterfly_line_click() {
    SetOnClickListener(butterfly_lineId, null);
    ClickSound(butterfly_lineId, false);
    PlayAnimation(butterflyShapeLeftId);
    PlayAnimation(butterflyShapeRightId);
    isButterFlyClicked = true;
    AddAnimationCallBack(butterflyShapeLeftId, CheckAndShowNextButton);
}


function leaf_line_click() {
    console.log("This is Leaf shape");
    SetOnClickListener(leaf_lineId, null);
    ClickSound(leaf_lineId, false);
    PlayAnimation(leafShapeLeftId);
    PlayAnimation(leafShapeRightId);
    isLeafClicked = true;

    var i = document.querySelector(leaf_lineId);
    i.setAttribute('click_sound', 'enable', 'false');

    AddAnimationCallBack(leafShapeLeftId, CheckAndShowNextButton);
}




function CheckAndShowNextButton() {
    if (isLeafClicked && isButterFlyClicked) {
        SetActive(i_clickTheLineToSplitId, false);
        SetActive(b_nextId, true);
        SetActive(i_nextToProceedId, true, 0.1);
        PlayVO2(i_nextToProceedId);
    }
}



function b_next_click() {
    SetActive(b_nextId, false);
    SetActive(i_nextToProceedId, false);
    SetActive(p_theseTwoObjectsId, true);
    SetActive(l_symmetryId, true);
    PlayVO2(p_theseTwoObjectsId);
}



function p_theseTwoObjects_click() {
    SetActive(p_theseTwoObjectsId, false);
    SetActive(p_lookAtGivenShapeId, true, 0.8);
    PlayVO2(p_lookAtGivenShapeId);
    SetActive(butterflyShapeLeftId, false);
    SetActive(butterflyShapeRightId, false);
    SetActive(leafShapeLeftId, false);
    SetActive(leafShapeRightId, false);
    SetActive(butterfly_lineId, false);
    SetActive(leaf_lineId, false);
    SetActive(l_symmetryId, false);
    SetActive(buildingShapeLeftId, true, 0.06);
    SetActive(buildingShapeRightId, true, 0.06);
    SetActive(carShapeLeftId, true, 0.1);
    SetActive(carShapeRightId, true, 0.1);
}



function p_lookAtGivenShape_click() {
    SetActive(p_lookAtGivenShapeId, false);
    SetActive(p_considerThePlaneId, true);
    PlayVO2(p_considerThePlaneId);
    SetActive(buildingDeviderId, true);
    SetActive(carDeviderId, true);
}


function p_considerThePlane_click() {
    SetActive(p_considerThePlaneId, false);
    SetActive(i_clickThePlainId, true, 0.1);
    PlayVO2(i_clickThePlainId);
    SetOnClickListener(buildingDeviderId, 'BuildingDevider_click();');
    SetOnClickListener(carDeviderId, 'CarDevider_click();');
    ClickSound(buildingDeviderId, true);
    ClickSound(carDeviderId, true);
}


function BuildingDevider_click() {
    SetOnClickListener(buildingDeviderId, null);
    ClickSound(buildingDeviderId, false);
    PlayAnimation(buildingDeviderId);
    PlayAnimation(buildingShapeLeftId);
    PlayAnimation(buildingShapeRightId);
    isBuildingDeviderClicked = true;
    AddAnimationCallBack(buildingDeviderId, AfterCarAndBuildingDevide);
}


function CarDevider_click() {
    SetOnClickListener(carDeviderId, null);
    ClickSound(carDeviderId, false);
    PlayAnimation(carDeviderId);
    PlayAnimation(carShapeLeftId);
    PlayAnimation(carShapeRightId);
    isCarDeviderClicked = true;
    AddAnimationCallBack(carDeviderId, AfterCarAndBuildingDevide);
}


function AfterCarAndBuildingDevide() {
    if (isBuildingDeviderClicked && isCarDeviderClicked) {
        SetActive(i_clickThePlainId, false);
        SetActive(b_next2Id, true);
        SetActive(i_nextToProceedId, true, 0.1);
        PlayVO2(i_nextToProceedId);
    }
}


function b_next2_click() {
    SetActive(b_next2Id, false);
    SetActive(i_nextToProceedId, false);
    SetActive(p_theseTwoObjects2Id, true);
    PlayVO2(p_theseTwoObjects2Id);
}



function p_theseTwoObjects2_click() {
    SetActive(p_theseTwoObjects2Id, false);
    SetActive(p_completeId, true);
    PlayVO2(p_completeId);
}


function p_complete_click() {
    SetActive(p_completeId, false);
    StopVO2(10);
    setTimeout(GoToAS, 1000);
    console.log("Module Complete");
}


function GoToMainMenu() {
    setTimeout(location.reload.bind(location), 1000);
}

//////////////////////////////////////
// Method used in AS


function p_score_inst_click() {
    SetActive(p_score_instId, false);
    SetActive('#Q1', true);
    SetActive(l_scoreId, true, 0.1);
    PlayVO2('#Q1');
}


function q1_ok() {
    ok_click();
    SetActive('#Q1', false);
    SetActive('#Q2', true);
    PlayVO2('#Q2');
}


function q2_ok() {
    ok_click();
    SetActive('#Q2', false);
    SetActive('#Q3', true);
    PlayVO2('#Q3');
}

function q3_ok() {
    ok_click();
    SetActive('#Q3', false);
    SetActive('#Q4', true);
    PlayVO2('#Q4');
}


function q4_ok() {
    ok_click();
    SetActive('#Q4', false);
    SetActive('#Q5', true);
    PlayVO2('#Q5');
}


function q5_ok() {
    ok_click();
    SetActive('#Q5', false);
    SetActive('#Q6', true);
    PlayVO2('#Q6');
}


function q6_ok() {
    ok_click();
    SetActive('#Q6', false);
    var entity = document.querySelector('#score_percent');
    entity.setAttribute('value', getPercent().concat(' %'));
    SetActive(p_comp_asId, true);
    PlayVO2(p_comp_asId);
}


function p_comp_as_click() {
    SetActive(p_comp_asId, false);
    SetActive(l_scoreId, false);

    if (getPercent() >= 60) {
        SetActive(p_greaterthanId, true);
        PlayVO2(p_greaterthanId);
    } else {
        SetActive(p_lessthanId, true);
        PlayVO2(p_lessthanId);
    }
}


function p_lessthan_click() {
    SetActive(p_lessthanId, false);
    GoToMainMenu();
    //setTimeout(GoLauncherPage,1000);
}


function p_greaterthan_click() {
    SetActive(p_greaterthanId, false);
    GoToMainMenu();
    //setTimeout(GoLauncherPage,1000);
}

function GoToAS() {
    SetActive('#L1', false);
    SetActive('#AS', true);
    PlayVO2(p_score_instId);
}