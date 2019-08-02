///___________________  MainMenu Functions
var p_lookAtTheShapeId = '#p_lookAtTheShape';
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

// Level 2
var p_L2Id = '#p_L2';
var p_L2_1Id = '#p_L2_1';

var stigmaPartCounter = 0;
var stamenPartCounter = 0;

var stigmaIndex1 = false;
var stigmaIndex2 = false;
var stigmaIndex3 = false;
var stigmaIndex4 = false;

var stamenIndex1 = false;
var stamenIndex2 = false;

var isPistilPanelShowing = false;
var isStamenPanelShowing = false;

var isStigmaDone = false;
var isStamenDone = false;

var isStigma = true;
var isStamen = true;

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

//-------------------------test-------------------------------//

function PlayAnimTest() {
    var a = document.querySelector('#testID');
    a.setAttribute('animation', 'enabled', 'true');

    AddAnimationCallBack_mixer('#testID', ResetAnimTest);
}

function ResetAnimTest() {
    var a = document.querySelector('#testID');
    a.setAttribute('animation', 'enabled', 'false');
}

//------------------------/test-------------------------------//

//-----------------------Main menu ---------------------------//

function OnClickLevel0() {
    // SetActive ('#closebtn',false);
    SetActive('#MainMenu', false);
    SetActive('#LO', true);
    PlayVO2('#p_objective');
}

function OnClickLevel1() {
    // SetActive ('#closebtn',false);
    PlayVO2('#ClickOnHighlighted');

    SetActive('#MainMenu', false);
    SetActive('#L1', true);
    SetActive('#c_L1_1', true);

    SetActive('#c_L1_1', true);
    var a = document.querySelector('#c_L1_1');
    a.setAttribute('scale', '0.1 0.1 0.1');
}

function OnClickLevel2() {
    // SetActive ('#closebtn',false);
    SetActive('#MainMenu', false);
    SetActive('#AS', true);
    PlayVO2(p_L2Id);
}

//-----------------------/Main menu-------------------------//

//-----------------------Level1-----------------------------//

function HighlightFlower() {
    SetActive('#flowerHighligher', false);

    //SetActive ('#m_L2_1');
    // move camera
    var a = document.querySelector('#main_camera');
    a.setAttribute('animation', 'enabled', 'true');

    // move Flower
    var a = document.querySelector('#m_L1_4');
    a.setAttribute('animation__scale', 'enabled', 'true');

    var a = document.querySelector('#m_L1_4_parent');
    a.setAttribute('animation', 'enabled', 'true');
    console.log("RotateFlowerFun callBack");
    AddAnimationCallBack('#m_L1_4', RotateFlower);
}

function RotateFlower() {
    var a = document.querySelector('#m_L1_4');
    a.setAttribute('animation__rot', 'enabled', 'true');
    console.log("RotateFlowerLoop callBack");
    AddAnimationCallBack('#m_L1_4', RotateFlowerLoop);
}

function RotateFlowerLoop() {
    var a = document.querySelector('#m_L1_4_parent');
    a.setAttribute('animation__rot', 'enabled', 'true');
    console.log("Showing panel");
    SetActive('#c_L1_1', false);
    PlayVO2('#Centerthe');

    SetActive('#c_L1_2', true);
    SetActive('#m_L1_4_cut', true);
    var a = document.querySelector('#c_L1_2');
    a.setAttribute('scale', '0.1 0.1 0.1');

    SetOnClickListener('#m_L1_4', 'ShowHalfCutFlower ()');
}

function ShowHalfCutFlower() {
    SetOnClickListener('#m_L1_4', null);

    SetActive('#m_L1_4_cut', false);
    SetActive('#c_L1_2', false);

    PlayVO2('#clickOnEachTagPoint');
    SetActive('#c_L1_3', true);
    PlayVO2('#clickOnEachTagPoint');

    if (!isStigmaDone)
        SetActive('#highlightPoint1', true);

    if (!isStamenDone)
        SetActive('#highlightPoint2', true);

    var a = document.querySelector('#c_L1_3');
    a.setAttribute('scale', '0.1 0.1 0.1');

    var b = document.querySelector('#m_L1_4');
    b.setAttribute('rotation', '0 0 0');
}

function HighlightStigma() {
    isStigmaDone = true;
    console.log("HighlightStigma function call");
    var a = document.querySelector('#m_L1_4_parent');
    a.setAttribute('animation__rot', 'enabled', 'false');

    SetActive('#highlightPoint1', false);
    SetActive('#highlightPoint2', false);

    var a = document.querySelector('#m_L1_4_parent');
    a.setAttribute('animation__pos', 'enabled', 'true');
    AddAnimationCallBack('#m_L1_4_parent', ShowStigmaAtCenter);
}

function ResetFlowerToZero() {
    var a = document.querySelector('#m_L1_4_parent');
    a.setAttribute('rotation', '0 0 0');
}

function HighlightStamen() {
    isStamenDone = true;

    var a = document.querySelector('#m_L1_4_parent');
    a.setAttribute('animation__rot', 'enabled', 'false');

    SetActive('#highlightPoint1', false);
    SetActive('#highlightPoint2', false);

    var b = document.querySelector('#m_L1_4_parent');
    b.setAttribute('animation__posStamen', 'enabled', 'true');
    AddAnimationCallBack('#m_L1_4_parent', ShowStamenAtCenter);
}

function ShowStigmaAtCenter() {
    ResetFlowerToZero();
    console.log("ShowStigmaAtCenter call");
    var a = document.querySelector('#m_L1_4_parent');
    a.setAttribute('animation__rot', 'enabled', 'false');

    SetActive('#stigma_anim1', false);
    SetActive('#stigma_anim2', true);

    SetActive('#stigma_infoPoints', false);

    var b = document.querySelector('#stigma_anim2');
    b.setAttribute('animation', 'enabled', 'true');
    b.setAttribute('scale', '0.1 0.1 0.1');



    AddAnimationCallBack('#stigma_anim2', ShowStigmaLabel1);


}

function ShowStamenAtCenter() {
    ResetFlowerToZero();

    var a = document.querySelector('#m_L1_4_parent');
    a.setAttribute('animation__rot', 'enabled', 'false');

    SetActive('#stamen_anim1', false);
    SetActive('#stamen_anim2', true);
    SetActive('#stamen_infoPoints', false);

    var a = document.querySelector('#stamen_anim2');
    a.setAttribute('animation', 'enabled', 'true');
    a.setAttribute('scale', '0.1 0.1 0.1');

    AddAnimationCallBack('#stamen_anim2', ShowStamenLabel);
}

function ShowStamenLabel() {
    if (isStamen) {
        isStamen = false;
        SetActive('#stamen_anim2Panel', true);

        var a = document.querySelector('#stamen_anim2Panel');
        a.setAttribute('scale', '10 10 10');


        SetActive('#c_L1_3', false);
        PlayVO2('#clickOnLabel');

        console.log("c_L1_4 1");
        SetActive('#c_L1_4', true);

        var b = document.querySelector('#c_L1_4');
        b.setAttribute('scale', '0.1 0.1 0.1');
    }
}

function ShowStigmaLabel1() {
    if (isStigma) {
        isStigma = false;
        console.log("showStigmaLabel call");

        SetActive('#stamen_panel1', true);

        var a = document.querySelector('#stamen_anim2Panel');
        a.setAttribute('scale', '10 10 10');

        PlayVO2('#clickOnLabel');
        SetActive('#c_L1_3', false);
        console.log("c_L1_4 2");
        SetActive('#c_L1_4', true);

        var a = document.querySelector('#c_L1_4');
        a.setAttribute('scale', '0.1 0.1 0.1');
    }
}

function ShowStamenPart() {
    PlayVO2('#clickOnLabel');
    SetActive('#c_L1_3', false);
    console.log("c_L1_4 3");
    SetActive('#c_L1_4', true);
    SetActive('#stamen_panel1', false);

    var a = document.querySelector('#c_L1_4');
    a.setAttribute('scale', '0.1 0.1 0.1');
}

function StamenInfo() {
    PlayVO2('#stamen');

    SetActive('#stamen_infoPanel', true);
    SetActive('#c_L1_4', false);
}

function StigmaInfo() {
    PlayVO2('#pistle');
    SetActive('#stigma_infoPanel', true);
    SetActive('#c_L1_4', false);
}

function stigma_infoPanel_Ok() {
    PlayVO2('#clickOnEachTagPoint');
    SetActive('#c_L1_3', true);
    SetActive('#c_L1_4', false);
    SetActive('#stigma_infoPanel', false);
    SetActive('#stigma_infoPoints', true);
    //	SetActive ('#stigma_panel1', false);
    SetActive('#stamen_panel1', false);

    var a = document.querySelector('#c_L1_3');
    a.setAttribute('scale', '0.1 0.1 0.1');

    var a = document.querySelector('#stigma_infoPoints');
    a.setAttribute('scale', '3 3 3');
}

function Stamen_infoPanel_Ok() {
    PlayVO2('#clickOnEachTagPoint');
    SetActive('#c_L1_3', true);
    SetActive('#c_L1_4', false);

    SetActive('#stamen_infoPanel', false);
    SetActive('#stamen_anim2Panel', false);
    SetActive('#stamen_infoPoints', true);
    var a = document.querySelector('#stamen_infoPoints');
    a.setAttribute('scale', '2 2 2');

    var a = document.querySelector('#c_L1_3');
    a.setAttribute('scale', '0.1 0.1 0.1');
}

function StigmaPoint1Info() {
    if (!isPistilPanelShowing) {
        isPistilPanelShowing = true;

        SetActive('#c_L1_3', false);
        PlayVO2('#clickOnLabel');
        console.log("c_L1_4 4");
        SetActive('#c_L1_4', true);
        var a = document.querySelector('#c_L1_4');
        a.setAttribute('scale', '0.1 0.1 0.1');

        SetActive('#p_stigma_infoPoint_1', true);

        stigmaPartCounter += 1;
        stigmaIndex1 = true;

        var b = document.querySelector('#stigma_infoPoint_1_sphere');
        b.setAttribute('material', 'color', 'green');
    }
}

function StigmaPoint2Info() {
    if (!isPistilPanelShowing) {
        isPistilPanelShowing = true;

        SetActive('#c_L1_3', false);
        PlayVO2('#clickOnLabel');
        console.log("c_L1_4 5");
        SetActive('#c_L1_4', true);
        var a = document.querySelector('#c_L1_4');
        a.setAttribute('scale', '0.1 0.1 0.1');

        SetActive('#p_stigma_infoPoint_2', true);

        stigmaPartCounter += 1;
        stigmaIndex2 = true;

        var b = document.querySelector('#stigma_infoPoint_2_sphere');
        b.setAttribute('material', 'color', 'green');
    }
}

function StigmaPoint3Info() {
    if (!isPistilPanelShowing) {
        isPistilPanelShowing = true;

        SetActive('#c_L1_3', false);
        PlayVO2('#clickOnLabel');

        console.log("c_L1_4 6");
        SetActive('#c_L1_4', true);
        var a = document.querySelector('#c_L1_4');
        a.setAttribute('scale', '0.1 0.1 0.1');

        SetActive('#p_stigma_infoPoint_3', true);

        stigmaPartCounter += 1;
        stigmaIndex3 = true;

        var b = document.querySelector('#stigma_infoPoint_3_sphere');
        b.setAttribute('material', 'color', 'green');
    }
}

function StigmaPoint4Info() {
    if (!isPistilPanelShowing) {
        isPistilPanelShowing = true;

        SetActive('#c_L1_3', false);
        PlayVO2('#clickOnLabel');
        console.log("c_L1_4 7");
        SetActive('#c_L1_4', true);
        var a = document.querySelector('#c_L1_4');
        a.setAttribute('scale', '0.1 0.1 0.1');

        SetActive('#p_stigma_infoPoint_4', true);

        stigmaPartCounter += 1;
        stigmaIndex4 = true;

        var b = document.querySelector('#stigma_infoPoint_4_sphere');
        b.setAttribute('material', 'color', 'green');
    }
}

function StamenPoint1Info() {
    if (!isStamenPanelShowing) {
        PlayVO2('#filament');

        isStamenPanelShowing = true;
        SetActive('#c_L1_3', false);
        PlayVO2('#clickOnLabel');
        console.log("c_L1_4 8");
        SetActive('#c_L1_4', true);
        var a = document.querySelector('#c_L1_4');
        a.setAttribute('scale', '0.1 0.1 0.1');

        SetActive('#p_stamen_infoPoint_2', true);

        stamenPartCounter += 1;

        var b = document.querySelector('#stamen_infoPoint_1_sphere');
        b.setAttribute('material', 'color', 'green');
    }
}

function StamenPoint2Info() {
    if (!isStamenPanelShowing) {
        PlayVO2('#anther');

        isStamenPanelShowing = true;
        SetActive('#c_L1_3', false);
        PlayVO2('#clickOnLabel');
        console.log("c_L1_4 9");
        SetActive('#c_L1_4', true);
        var a = document.querySelector('#c_L1_4');
        a.setAttribute('scale', '0.1 0.1 0.1');

        SetActive('#p_stamen_infoPoint_1', true);

        stamenPartCounter += 1;

        var b = document.querySelector('#stamen_infoPoint_2_sphere');
        b.setAttribute('material', 'color', 'green');
    }
}


function ResetStigma() {
    console.log("reset stigma function");
    SetActive('#stigma_infoPoints', false);
    var a = document.querySelector('#stigma_anim2');
    a.setAttribute('animation__reset', 'enabled', 'true');
    AddAnimationCallBack('#stigma_anim2', ResetFlower);
}

function ResetFlower() {
    console.log("reset flower function");
    //	SetActive ('#stigma_panel1',false);
    SetActive('#stigma_anim2', false);
    SetActive('#stigma_anim1', true);
    var a = document.querySelector('#stigma_anim1');
    a.setAttribute('scale', '0.1 0.1 0.1');

    //SetActive ('#c_L1_3',false);
    //	PlayVO2 ('#clickOnLabel');
    //	SetActive ('#c_L1_4',true);
    //	var a=document.querySelector('#c_L1_4');
    //	a.setAttribute('scale','0.1 0.1 0.1');

    if (isStamenDone && isStigmaDone) {
        PlayVO2('#levelComplete');

        SetActive('#c_L1_4', false);
        SetActive('#c_L1_3', false);

        // show level complete panel
        SetActive('#stamen_panel1', false);
        SetActive('#p_L1_completePanel', true);
    } else {
        console.log("reset flower else conditon");
        SetActive('#stamen_panel1', false);

        var b = document.querySelector('#m_L1_4_parent');
        b.setAttribute('animation__pos1', 'enabled', 'true');
        AddAnimationCallBack('#m_L1_4_parent', RotateFlowerLoop2);
    }
}

function RotateFlowerLoop2() {
    console.log("rotateflowerloop2 function call");

    //	SetActive ('#stigma_panel1',false);
    SetActive('#stigma_anim2', false);

    SetActive('#stigma_anim1', true);
    var a = document.querySelector('#stigma_anim1');
    a.setAttribute('scale', '0.1 0.1 0.1');

    if (!isStigmaDone)
        SetActive('#highlightPoint1', true);

    if (!isStamenDone)
        SetActive('#highlightPoint2', true);

    var a = document.querySelector('#m_L1_4_parent');
    a.setAttribute('animation__rot', 'enabled', 'true');

    console.log("rotateflowerloop2 function done");
}

function RotateFlowerLoopStamen() {
    //	SetActive ('#stigma_panel1',false);
    SetActive('#stigma_anim2', false);
    SetActive('#stamen_anim2', false);
    SetActive('#stigma_anim1', true);
    var a = document.querySelector('#stigma_anim1');
    a.setAttribute('scale', '0.1 0.1 0.1');

    if (!isStigmaDone)
        SetActive('#highlightPoint1', true);

    if (!isStamenDone)
        SetActive('#highlightPoint2', true);

    var a = document.querySelector('#m_L1_4_parent');
    a.setAttribute('animation__rot', 'enabled', 'true');
}

function Ovule_Ok() {
    PlayVO2('#ovule');

    SetActive('#c_L1_4', false);
    SetActive('#p_pistle_ovule', true);
}

function Ovary_Ok() {
    PlayVO2('#ovary');

    SetActive('#c_L1_4', false);
    SetActive('#p_pistle_ovary', true);
}

function Style_Ok() {
    PlayVO2('#style');

    SetActive('#c_L1_4', false);
    SetActive('#p_pistle_style', true);
}

function Stigma_Ok() {
    PlayVO2('#stigma');

    SetActive('#c_L1_4', false);
    SetActive('#p_pistle_stigma', true);
}

function StamenInfoPanel_Ok() {


    SetActive('#c_L1_4', false);
    SetActive('#p_Filament_detail', true);
    PlayVO2('#clickOnLabel');
    console.log("c_L1_4 10");
    SetActive('#c_L1_4', true);

    var a = document.querySelector('#c_L1_4');
    a.setAttribute('scale', '0.1 0.1 0.1');
}

function p_Filament() {

    SetActive('#c_L1_4', false);
    SetActive('#p_Filament_detail', true)
    PlayVO2('#filament');
    // SetActive ('#c_L1_4',true);
    //
    // var a=document.querySelector('#c_L1_4');
    // a.setAttribute('scale','0.1 0.1 0.1');

    stamenIndex1 = true;

}

function p_Anthur() {

    SetActive('#c_L1_4', false);
    SetActive('#p_Anthur_detail', true);
    PlayVO2('#anther');

    // SetActive ('#c_L1_4',true);
    //
    // var a=document.querySelector('#c_L1_4');
    // a.setAttribute('scale','0.1 0.1 0.1');

    stamenIndex2 = true;

}

function p_Filament_detail_Ok() {
    isStamenPanelShowing = false;
    SetActive('#p_Filament_detail', false);
    SetActive('#p_stamen_infoPoint_2', false);

    SetActive('#c_L1_4', false);

    if (stamenIndex1 && stamenIndex2) {
        ResetStamen();
        if (isStamenDone && isStigmaDone) {
            console.log("all tag point done");
        } else {
            PlayVO2('#clickOnEachTagPoint');
            SetActive('#c_L1_3', true);
            var a = document.querySelector('#c_L1_3');
            a.setAttribute('scale', '0.1 0.1 0.1');
        }
    } else {

        PlayVO2('#clickOnEachTagPoint');
        SetActive('#c_L1_3', true);
        var a = document.querySelector('#c_L1_3');
        a.setAttribute('scale', '0.1 0.1 0.1');
    }
}

function ResetStamen() {
    SetActive('#stamen_infoPoints', false);
    var a = document.querySelector('#stamen_anim2');
    a.setAttribute('animation__reset', 'enabled', 'true');

    AddAnimationCallBack('#stamen_anim2', ResetStamenCall);
}

function ResetStamenCall() {
    SetActive('#stamen_anim2', false);
    SetActive('#stamen_anim2Panel', false);

    if (isStamenDone && isStigmaDone) {
        PlayVO2('#levelComplete');

        SetActive('#c_L1_4', false);
        SetActive('#c_L1_3', false);

        // show level complete panel
        SetActive('#stamen_panel1', false);
        SetActive('#p_L1_completePanel', true);
    } else {
        var b = document.querySelector('#m_L1_4_parent');
        b.setAttribute('animation__posStamen1', 'enabled', 'true');
        AddAnimationCallBack('#m_L1_4_parent', RotateFlowerLoopStamen);
    }
}

function p_Anthur_detail_Ok() {
    isStamenPanelShowing = false;
    SetActive('#p_Anthur_detail', false);
    SetActive('#p_stamen_infoPoint_1', false);

    SetActive('#c_L1_4', false);

    if (stamenIndex1 && stamenIndex2) {
        ResetStamen();
        if (isStamenDone && isStigmaDone) {
            console.log("all tag point done");
        } else {
            PlayVO2('#clickOnEachTagPoint');
            SetActive('#c_L1_3', true);
            var a = document.querySelector('#c_L1_3');
            a.setAttribute('scale', '0.1 0.1 0.1');
        }
    } else {

        PlayVO2('#clickOnEachTagPoint');
        SetActive('#c_L1_3', true);
        var a = document.querySelector('#c_L1_3');
        a.setAttribute('scale', '0.1 0.1 0.1');
    }
}

function p_pistle_ovule_Ok() {
    SetActive('#p_pistle_ovule', false);
    SetActive('#p_stigma_infoPoint_1', false);

    isPistilPanelShowing = false;

    if (stigmaIndex1 && stigmaIndex2 && stigmaIndex3 && stigmaIndex4) {
        ResetStigma();
        if (isStamenDone && isStigmaDone) {
            console.log("all tag point done");
        } else {
            PlayVO2('#clickOnEachTagPoint');
            SetActive('#c_L1_3', true);
            var a = document.querySelector('#c_L1_3');
            a.setAttribute('scale', '0.1 0.1 0.1');
        }
    } else {

        PlayVO2('#clickOnEachTagPoint');
        SetActive('#c_L1_3', true);
        var a = document.querySelector('#c_L1_3');
        a.setAttribute('scale', '0.1 0.1 0.1');
    }
}

function p_pistle_ovary_Ok() {
    SetActive('#p_pistle_ovary', false);
    SetActive('#p_stigma_infoPoint_2', false);

    PlayVO2('#clickOnEachTagPoint');
    SetActive('#c_L1_3', true);
    var a = document.querySelector('#c_L1_3');
    a.setAttribute('scale', '0.1 0.1 0.1');

    isPistilPanelShowing = false;

    if (stigmaIndex1 && stigmaIndex2 && stigmaIndex3 && stigmaIndex4) {
        ResetStigma();
        if (isStamenDone && isStigmaDone) {
            console.log("all tag point done");
        } else {
            PlayVO2('#clickOnEachTagPoint');
            SetActive('#c_L1_3', true);
            var a = document.querySelector('#c_L1_3');
            a.setAttribute('scale', '0.1 0.1 0.1');
        }
    } else {

        PlayVO2('#clickOnEachTagPoint');
        SetActive('#c_L1_3', true);
        var a = document.querySelector('#c_L1_3');
        a.setAttribute('scale', '0.1 0.1 0.1');
    }
}

function p_pistle_style_Ok() {
    SetActive('#p_pistle_style', false);
    SetActive('#p_stigma_infoPoint_3', false);


    PlayVO2('#clickOnEachTagPoint');
    SetActive('#c_L1_3', true);
    var a = document.querySelector('#c_L1_3');
    a.setAttribute('scale', '0.1 0.1 0.1');

    isPistilPanelShowing = false;
    console.log("pos1");
    if (stigmaIndex1 && stigmaIndex2 && stigmaIndex3 && stigmaIndex4) {
        console.log("pos2");
        ResetStigma();
        if (isStamenDone && isStigmaDone) {
            console.log("all tag point done");
        } else {
            console.log("pos4");
            PlayVO2('#clickOnEachTagPoint');
            SetActive('#c_L1_3', true);
            var a = document.querySelector('#c_L1_3');
            a.setAttribute('scale', '0.1 0.1 0.1');
        }
    } else {
        console.log("pos6");
        PlayVO2('#clickOnEachTagPoint');
        SetActive('#c_L1_3', true);
        var a = document.querySelector('#c_L1_3');
        a.setAttribute('scale', '0.1 0.1 0.1');
    }
}

function p_pistle_stigma_Ok() {
    SetActive('#p_pistle_stigma', false);
    SetActive('#p_stigma_infoPoint_4', false);

    PlayVO2('#clickOnEachTagPoint');
    SetActive('#c_L1_3', true);
    var a = document.querySelector('#c_L1_3');
    a.setAttribute('scale', '0.1 0.1 0.1');

    isPistilPanelShowing = false;

    if (stigmaIndex1 && stigmaIndex2 && stigmaIndex3 && stigmaIndex4) {
        ResetStigma();
        if (isStamenDone && isStigmaDone) {
            console.log("all tag point done");
        } else {
            PlayVO2('#clickOnEachTagPoint');
            SetActive('#c_L1_3', true);
            var a = document.querySelector('#c_L1_3');
            a.setAttribute('scale', '0.1 0.1 0.1');
        }
    } else {

        PlayVO2('#clickOnEachTagPoint');
        SetActive('#c_L1_3', true);
        var a = document.querySelector('#c_L1_3');
        a.setAttribute('scale', '0.1 0.1 0.1');
    }
}

//-----------------------/Level1----------------------------//

//-----------------------Level 2----------------------------//

function On_p_L2_1_click() {
    PlayVO2('#flowerquestion');
    console.log("vo playing for question 1");
    SetActive('#p_L2_1', false);
    SetActive('#q_L2_1', true);

    // score panel
    var a = document.querySelector('#l_score');
    a.setAttribute('setactive', 'value', 'true');
}

function q_L2_1_ok() {
    SetActive('#plantCircle1', false);
    SetActive('#plantCircle2', false);
    SetActive('#plantCircle3', false);

    SetActive('#q_L2_1', false);
    SetActive('#m_L2_1', false);
    PlayAnimation('#m_L2_3');

    PlayVO2('#Centerthe');

    SetActive("#c_L1_2", true);
    var b = document.querySelector('#c_L1_2');
    b.setAttribute('scale', '0.1 0.1 0.1');

    var a = document.querySelector('#m_L2_3');
    a.setAttribute('visible', 'true');
    a.setAttribute('scale', '0 0 0');
    a.setAttribute('animation', 'enabled', 'true');
    a.setAttribute('animation__rot', 'enabled', 'true');


    ok_click();
}

function StopFlowerAnim() {
    PlayVO2('#pistilquestion');

    // enable cut Flower
    SetActive('#panelType', true);
    SetActive('#c_L1_2', false);
    SetActive('#m_L2_3', false);
    SetActive('#m_L2_4', true);
    SetActive('#q_L2_2', true);
}

function PistilMove() {


    SetActive('#a_q_L2_2', false);
    //	SetActive('#t_L2_2',true);

    var a = document.querySelector('#t_L2_2');
    a.setAttribute('visible', 'true');
    a.setAttribute('animation', 'enabled', 'true');

    AddAnimationCallBack('#t_L2_2', ShowQuestion3_L2);

    //	ok_click ();
}

function ShowQuestion3_L2() {
    var a = document.querySelector('#t_L2_2');
    a.setAttribute('scale', '1 1 1');
    a.setAttribute('rotation', '0 0 0');

    setTimeout(ShowQuestion3_L2_Delay, 2000);
}

function ShowQuestion3_L2_Delay() {
    ok_click();

    PlayVO2('#stigmaquestion2');

    SetActive('#q_L2_3', true);
    SetActive('#q_L2_2', false);

    SetActive('#panelType1', false);
    SetActive('#panelType2', true);
    SetActive('#t_L2_2', false);
}

function StigmaMove() {
    //	ok_click ();

    SetActive('#a_q_L2_3', false);
    //	SetActive('#t_L2_3',true);

    var a = document.querySelector('#t_L2_3');
    a.setAttribute('visible', 'true');
    a.setAttribute('animation', 'enabled', 'true');

    AddAnimationCallBack('#t_L2_3', ShowQuestion4_L2);
}

function ShowQuestion4_L2() {
    var a = document.querySelector('#t_L2_3');
    a.setAttribute('scale', '1 1 1');
    a.setAttribute('rotation', '0 0 0');

    setTimeout(ShowQuestion4_L2_Delay, 2000);
}

function ShowQuestion4_L2_Delay() {
    ok_click();

    PlayVO2('#stylequestion2');

    SetActive('#q_L2_4', true);
    SetActive('#q_L2_3', false);
}

function StyleMove() {

    //	ok_click ();

    SetActive('#a_q_L2_4', false);
    //	SetActive ('#t_L2_4', true);

    var a = document.querySelector('#t_L2_4');
    a.setAttribute('visible', 'true');
    a.setAttribute('animation', 'enabled', 'true');

    AddAnimationCallBack('#t_L2_4', ShowQuestion5_L2);
}

function ShowQuestion5_L2() {
    var a = document.querySelector('#t_L2_4');
    a.setAttribute('scale', '1 1 1');
    a.setAttribute('rotation', '0 0 0');

    setTimeout(ShowQuestion5_L2_Delay, 2000);
}

function ShowQuestion5_L2_Delay() {
    ok_click();

    PlayVO2('#ovaryquestion2');

    SetActive('#q_L2_5', true);
    SetActive('#q_L2_4', false);
}

function OvaryMove() {
    //	ok_click ();

    SetActive('#a_q_L2_5', false);
    //	SetActive ('#t_L2_5', true);

    var a = document.querySelector('#t_L2_5');
    a.setAttribute('visible', 'true');
    a.setAttribute('animation', 'enabled', 'true');

    AddAnimationCallBack('#t_L2_5', ShowQuestion6_L2);
}

function ShowQuestion6_L2() {
    var a = document.querySelector('#t_L2_5');
    a.setAttribute('scale', '1 1 1');
    a.setAttribute('rotation', '0 0 0');

    setTimeout(ShowQuestion6_L2_Delay, 2000);
}

function ShowQuestion6_L2_Delay() {
    ok_click();

    PlayVO2('#ovulequestion2');

    SetActive('#q_L2_6', true);
    SetActive('#q_L2_5', false);
}

function OvuleMove() {
    //	ok_click ();

    SetActive('#a_q_L2_6', false);
    //	SetActive ('#t_L2_6', true);

    var a = document.querySelector('#t_L2_6');
    a.setAttribute('visible', 'true');
    a.setAttribute('animation', 'enabled', 'true');
    a.setAttribute('animation__rot', 'enabled', 'true');

    AddAnimationCallBack('#t_L2_6', ShowQuestion7_L2);
}

function ShowQuestion7_L2() {
    var a = document.querySelector('#t_L2_6');
    a.setAttribute('scale', '1 1 1');
    a.setAttribute('rotation', '0 0 0');

    setTimeout(ShowQuestion7_L2_Delay, 2000);
}

function ShowQuestion7_L2_Delay() {
    ok_click();

    PlayVO2('#stamenquestion2');

    SetActive('#q_L2_7', true);
    SetActive('#q_L2_6', false);
}

function StamenMove() {
    //	ok_click ();

    SetActive('#a_q_L2_7', false);
    //	SetActive ('#t_L2_7', true);

    var a = document.querySelector('#t_L2_7');
    a.setAttribute('visible', 'true');
    a.setAttribute('animation', 'enabled', 'true');
    a.setAttribute('animation__rot', 'enabled', 'true');

    AddAnimationCallBack('#t_L2_7', ShowQuestion8_L2);
}

function ShowQuestion8_L2() {
    var a = document.querySelector('#t_L2_7');
    a.setAttribute('scale', '1 1 1');
    a.setAttribute('rotation', '0 0 0');

    setTimeout(ShowQuestion8_L2_Delay, 2000);
}

function ShowQuestion8_L2_Delay() {
    ok_click();

    PlayVO2('#antherquestion2');

    SetActive('#q_L2_8', true);
    SetActive('#q_L2_7', false);
    SetActive('#t_L2_3', false);
    SetActive('#t_L2_4', false);
    SetActive('#t_L2_5', false);
    SetActive('#t_L2_6', false);
    SetActive('#t_L2_7', false);
    SetActive('#panelType3', true);
    SetActive('#panelType2', false);
}

function AntherMove() {
    //	ok_click ();

    SetActive('#a_q_L2_8', false);
    //	SetActive ('#t_L2_8', true);

    var a = document.querySelector('#t_L2_8');
    a.setAttribute('visible', 'true');
    a.setAttribute('animation', 'enabled', 'true');
    a.setAttribute('animation__rot', 'enabled', 'true');

    AddAnimationCallBack('#t_L2_8', ShowQuestion9_L2);
}

function ShowQuestion9_L2() {
    var a = document.querySelector('#t_L2_8');
    a.setAttribute('scale', '1 1 1');
    a.setAttribute('rotation', '0 0 0');

    setTimeout(ShowQuestion9_L2_Delay, 2000);
}

function ShowQuestion9_L2_Delay() {
    ok_click();

    PlayVO2('#filamentquestion2');

    SetActive('#q_L2_9', true);
    SetActive('#q_L2_8', false);
}

function FilamentMove() {
    //	ok_click ();

    SetActive('#a_q_L2_9', false);
    //	SetActive ('#t_L2_9', true);

    var a = document.querySelector('#t_L2_9');
    a.setAttribute('visible', 'true');
    a.setAttribute('animation', 'enabled', 'true');
    a.setAttribute('animation__rot', 'enabled', 'true');

    AddAnimationCallBack('#t_L2_9', ShowQuestion10_L2);
}

function ShowQuestion10_L2() {
    var a = document.querySelector('#t_L2_9');
    a.setAttribute('scale', '1 1 1');
    a.setAttribute('rotation', '0 0 0');

    setTimeout(ShowQuestion10_L2_Delay, 2000);
}

function ShowQuestion10_L2_Delay() {


    SetActive('#q_L2_9', false);
    SetActive('#t_L2_9', false);
    SetActive('#t_L2_8', false);
    SetActive('#m_L2_4', false);

    SetActive('#panelType3', false);
    ScoreCalculate();
}

function On_p_L2_2_click() {
    //	SetActive ('#p_L2_3',true);
    SetActive('#p_L2_2', false);

    // calculate score
    CalculatePercentage();
}

function On_p_L2_3_click() {
    GoToMainMenu();
}


function ScoreCalculate() {
    ok_click();

    PlayVO2('#C_Inst_Assesment_Complete');

    SetActive('#p_L2_2', true);
    var entity = document.querySelector('#score_percent');
    entity.setAttribute('value', getPercent().concat(' %'));

    // SetActive(p_comp_asId,true);

}


function btn_close_click() {
    if (login_isReferred()) {
        window.location.href = login_referred_get();
    }
}

function CalculatePercentage() {
    console.log("percentage " + getPercent());
    if (getPercent() >= 60) {
        console.log("more than 60 percent");
        PlayVO2('#C_Inst_Assesment_GreaterThan60');
        SetActive('#p_L2_moreThan60', true);
        //	PlayVO2(p_greaterthanId);
    } else {
        console.log("less than 60 percent");
        PlayVO2('#C_Inst_Assesment_LessThan60');
        SetActive('#p_L2_lessThan60', true);
        //	PlayVO2(p_lessthanId);
    }
}
//-----------------------/Level 2----------------------------//


///___________________  Learning Objective Functions

function OnClickObjectiveOk() {
    SetActive('#LO', false);
    OnClickLevel1();
}


function Level1CompleteOkClick() {
    SetActive('#L1', false);
    OnClickLevel2();

    // reset camera
    var a = document.querySelector('#main_camera');
    a.setAttribute('position', '0 1.6 0');
}

///___________________  Level_1 Functions

function p_lookAtTheShape_click() {
    SetActive(p_lookAtTheShapeId, false);
    SetActive(i_clickTheLineToSplitId, true, 0.1);
    PlayVO2(i_clickTheLineToSplitId);
    SetOnClickListener(butterflyShapeId, 'ButterFlyShape_click();');
    SetOnClickListener(leafShapeId, 'LeafShape_click();');
}


function ButterFlyShape_click() {
    console.log("This is butterfly shape");
    SetOnClickListener(butterflyShapeId, null);
    SetActive(butterflyShapeId, false);
    SetActive(butterflyShapeLeftId, true, 0.3);
    SetActive(butterflyShapeRightId, true, 0.3);
    PlayAnimation(butterflyShapeLeftId);
    PlayAnimation(butterflyShapeRightId);
    isButterFlyClicked = true;
    AddAnimationCallBack(butterflyShapeLeftId, CheckAndShowNextButton);
}


function LeafShape_click() {
    console.log("This is Leaf shape");
    SetOnClickListener(leafShapeId, null);
    SetActive(leafShapeId, false);
    SetActive(leafShapeLeftId, true, 0.3);
    SetActive(leafShapeRightId, true, 0.3);
    PlayAnimation(leafShapeLeftId);
    PlayAnimation(leafShapeRightId);
    isLeafClicked = true;
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
}


function BuildingDevider_click() {
    SetOnClickListener(buildingDeviderId, null);
    PlayAnimation(buildingDeviderId);
    PlayAnimation(buildingShapeLeftId);
    PlayAnimation(buildingShapeRightId);
    isBuildingDeviderClicked = true;
    AddAnimationCallBack(buildingDeviderId, AfterCarAndBuildingDevide);
}


function CarDevider_click() {
    SetOnClickListener(carDeviderId, null);
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
    OnClickLevel2();

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




function p_comp_as_click() {
    SetActive(p_comp_asId, false);
    SetActive(l_scoreId, false);

    if (getPercent().toFixed(0) >= '60') {
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
}


function p_greaterthan_click() {
    SetActive(p_greaterthanId, false);
    GoToMainMenu();
}
