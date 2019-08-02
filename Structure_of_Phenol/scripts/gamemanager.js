//----------------------------------- Level 1 IDs---------------------------//
var btn_group1Id = '#btn_group1';
var btn_MFId = '#btn_MF';
var btn_CSFId = '#btn_CSF';
var btn_FGId = '#btn_FG';
var btn_EPMId = '#btn_EPM';
var btn_OSId = '#btn_OS';
var btn_piBondId = '#btn_piBond';
var btn_sigmaBondId = '#btn_sigmaBond';
var btn_bondsID = '#btn_bonds';
var btn_ActivityMenuID = '#btn_ActivityMenu';

var i_selectEachLabelID = '#i_selectEachLabel';
var i_selectEachLabelOrAmID = '#i_selectEachLabelOrAm';
var i_pointGazeToEachColoredRegionID = '#i_pointGazeToEachColoredRegion';

var l_molecularFormulaID = '#l_molecularFormula';
var l_structuralCondenseFormulaID = '#l_structuralCondenseFormula';
var l_funtionalGroupID = '#l_funtionalGroup';
var l_electrostaticMapID = '#l_electrostaticMap';
var l_selectEachLabelID = '#l_selectEachLabel';
var l_RepresentationLabelsID = '#l_RepresentationLabels';
var l_HydroxylGroupID = '#l_HydroxylGroup';
var l_2pzOrbitalID = '#l_2pzOrbital';
var l_TopViewID = '#l_TopView';
var l_piElectronCloudsID = '#l_piElectronClouds';

var m_phenolStructureID = '#m_phenolStructure';
var m_phenolStructureHighlightID = '#m_phenolStructureHighlight';
var m_phenolStructureMapID = '#m_phenolStructureMap';
var m_phenolOrbitalStructureID = '#m_phenolOrbitalStructure';
var m_phenolOrbitalStructureType2ID = '#m_phenolOrbitalStructureType2';

var a_piBondAnimID = '#a_piBondAnim';

var isAllClicked = [];
var value = 7;
var isHover = false;
var isDisableClick = false;
var cancelTimeout;
//----------------------------------- /Level 1 IDs---------------------------//
//////////////// Variable used in AS
var p_score_instId = '#p_score_inst';
var p_comp_asId = '#p_comp_as';
var p_lessthanId = '#p_lessthan';
var p_greaterthanId = '#p_greaterthan';
var l_scoreId = '#l_score';

var q_Q1Id = '#Q1';
var q_Q2Id = '#Q2';
var q_Q3Id = '#Q3';
var q_Q4Id = '#Q4';

var l_Isopropylphenyl_methanolId = '#l_m_Isopropylphenyl_methanol';
var l_Methylphenol_4Id = '#l_m_Methylphenol_4';
var l_Phenylmethanol_2Id = '#l_m_Phenylmethanol_2';
var l_PhenylmethanolId = '#l_m_Phenylmethanol';
var l_Q2_BlueRegionId = '#l_Q2_BlueRegion';
var l_Q3Id = '#l_Q3';
var l_Q4Id = '#l_Q4';
var btn_Q1OkId = '#btn_Q1Ok';
var btn_Q2OkId = '#btn_Q2Ok';
var btn_Q3OkId = '#btn_Q3Ok';
var btn_Q4OkId = '#btn_Q4Ok';

var i_Q1_SelectCompoundId = '#i_Q1_SelectCompound';
var i_Q2_SelectRegionId = '#i_Q2_SelectRegion';
var i_Q3_DragSigmaBondId = '#i_Q3_DragSigmaBond';
var i_Q4_DragBondAngleId = '#i_Q4_DragBondAngle';

///___________________  MainMenu Functions
function OnClickObjective() {
    SetActive('#AS', false);
    SetActive('#L1', false);
    SetActive('#MainMenu', false);
    SetActive('#LO', true);
    PlayVO2('#p_objective');
}

function OnClickL1() {
    SetActive('#AS', false);
    SetActive('#LO', false);
    SetActive('#MainMenu', false);
    SetActive('#L1', true);
    SetActive(i_selectEachLabelID, true, 0.1);
    isHover = false;
    for (var i = 0; i < value; i++) {
        isAllClicked.push(false);
    }
    PlayVO2(i_selectEachLabelID);
}

function OnClickAS() {
    SetActive('#L1', false);
    SetActive('#LO', false);
    SetActive('#MainMenu', false);
    SetActive('#AS', true);
    SetActive(p_score_instId, true);
    PlayVO2(p_score_instId);
}

///___________________  Learning Objective Functions
function OnClickObjectiveOk() {
    SetActive('#LO', false);
    OnClickL1();
}

///___________________  Level_1 Functions
function btn_group1_click(a) {
    switch (a) {
        case 1:
            console.log("1");
            isAllClicked[0] = true;
            SetActive(l_molecularFormulaID, true);
            PlayVO2(l_molecularFormulaID);
            SetActive(i_pointGazeToEachColoredRegionID, false);
            SetActive(i_selectEachLabelID, false);
            SetActive(m_phenolStructureID, true);
            SetActive(l_structuralCondenseFormulaID, false);
            SetActive(l_funtionalGroupID, false);
            SetActive(m_phenolStructureHighlightID, false);
            SetActive(m_phenolStructureMapID, false);
            SetActive(l_electrostaticMapID, false);
            SetActive(m_phenolOrbitalStructureID, false);
            SetActive(btn_bondsID, false);
            SetActive(a_piBondAnimID, false);
            SetActive(m_phenolOrbitalStructureType2ID, false);
            SetActive(l_selectEachLabelID, false);
            SetActive(m_phenolOrbitalStructureType2ID, false);
            SetActive(l_RepresentationLabelsID, false);
            SetActive(l_HydroxylGroupID, false);
            ToggleInteraction(false);
            DisableLabelsOfOrbitalStructure();
            clearTimeout(cancelTimeout);
            cancelTimeout = setTimeout(EnableInstruction, 6000);
            break;
        case 2:
            console.log("2");
            isAllClicked[1] = true;
            SetActive(l_molecularFormulaID, false);

            SetActive(i_pointGazeToEachColoredRegionID, false);
            SetActive(i_selectEachLabelID, false);
            SetActive(l_structuralCondenseFormulaID, true);
            PlayVO2(l_structuralCondenseFormulaID);
            SetActive(m_phenolStructureID, true);
            SetActive(l_funtionalGroupID, false);
            SetActive(m_phenolStructureHighlightID, false);
            SetActive(m_phenolStructureMapID, false);
            SetActive(l_electrostaticMapID, false);
            SetActive(m_phenolOrbitalStructureID, false);
            SetActive(btn_bondsID, false);
            SetActive(a_piBondAnimID, false);
            SetActive(m_phenolOrbitalStructureType2ID, false);
            SetActive(l_selectEachLabelID, false);
            SetActive(m_phenolOrbitalStructureType2ID, false);
            SetActive(l_RepresentationLabelsID, false);
            SetActive(l_HydroxylGroupID, false);
            DisableLabelsOfOrbitalStructure();
            ToggleInteraction(false);
            clearTimeout(cancelTimeout);
            cancelTimeout = setTimeout(EnableInstruction, 7000);
            break;
        case 3:
            console.log("3");
            isAllClicked[2] = true;
            SetActive(l_molecularFormulaID, false);
            SetActive(i_pointGazeToEachColoredRegionID, false);
            SetActive(i_selectEachLabelID, false);
            SetActive(l_structuralCondenseFormulaID, false);
            SetActive(l_funtionalGroupID, true);
            PlayVO2(l_funtionalGroupID);
            SetActive(m_phenolStructureHighlightID, true);
            SetActive(l_HydroxylGroupID, true);
            SetActive(m_phenolStructureID, true);
            SetActive(m_phenolStructureMapID, false);
            SetActive(l_electrostaticMapID, false);
            SetActive(m_phenolOrbitalStructureID, false);
            SetActive(btn_bondsID, false);
            SetActive(a_piBondAnimID, false);
            SetActive(l_selectEachLabelID, false);
            SetActive(m_phenolOrbitalStructureType2ID, false);
            SetActive(l_RepresentationLabelsID, false);
            DisableLabelsOfOrbitalStructure();
            ToggleInteraction(false);
            clearTimeout(cancelTimeout);
            cancelTimeout = setTimeout(EnableInstruction, 6000);
            break;
        case 4:
            console.log("4");
            isAllClicked[3] = true;
            SetActive(l_molecularFormulaID, false);
            SetActive(l_structuralCondenseFormulaID, false);
            SetActive(l_funtionalGroupID, false);
            SetActive(m_phenolStructureHighlightID, false);
            SetActive(m_phenolOrbitalStructureID, false);
            SetActive(btn_bondsID, false);
            SetActive(l_selectEachLabelID, false);
            SetActive(a_piBondAnimID, false);
            SetActive(m_phenolStructureID, true);
            SetActive(m_phenolStructureMapID, true);
            SetActive(l_electrostaticMapID, true);
            PlayVO2(l_electrostaticMapID);
            SetActive(i_selectEachLabelID, false);
            SetActive(m_phenolOrbitalStructureType2ID, false);
            SetActive(l_RepresentationLabelsID, false);
            SetActive(l_HydroxylGroupID, false);
            DisableLabelsOfOrbitalStructure();
            ToggleInteraction(false);
            clearTimeout(cancelTimeout);
            cancelTimeout = setTimeout(EnableColoredRegionInst, 8000);
            break;
        case 5:
            console.log("5");
            isAllClicked[4] = true;
            SetActive(i_pointGazeToEachColoredRegionID, false);
            SetActive(l_molecularFormulaID, false);
            SetActive(l_structuralCondenseFormulaID, false);
            SetActive(l_funtionalGroupID, false);
            SetActive(m_phenolStructureID, false);
            SetActive(m_phenolStructureHighlightID, false);
            SetActive(m_phenolStructureMapID, false);
            SetActive(l_electrostaticMapID, false);
            SetActive(i_selectEachLabelID, false);
            SetActive(m_phenolOrbitalStructureType2ID, false);
            SetActive(l_RepresentationLabelsID, false);
            SetActive(l_HydroxylGroupID, false);
            DisableLabelsOfOrbitalStructure();
            EnableOrbitalStructure();
            break;
        default:
    }

}

function EnableOrbitalStructure() {
    SetActive(m_phenolOrbitalStructureID, true);
    SetActive(btn_bondsID, true);
    SetActive(l_selectEachLabelID, true);
    PlayVO2(l_selectEachLabelID);
    SetActive(a_piBondAnimID, false);
}

function EnableColoredRegionInst() {
    SetActive(i_pointGazeToEachColoredRegionID, true, 0.1);
    PlayVO2(i_pointGazeToEachColoredRegionID);
    SetActive(i_selectEachLabelID, false);
    ToggleInteraction(true);
    CheckForLevelComplete();
    isHover = true;
}

function EnableInstruction() {
    SetActive(i_selectEachLabelID, true, .1);
    PlayVO2(i_selectEachLabelID);
    ToggleInteraction(true);
    CheckForLevelComplete();
    AnimationMixerPause(a_piBondAnimID);
}

function OnClickpiBondBtn() {
    isAllClicked[5] = true;
    SetActive(a_piBondAnimID, true);
    AnimationMixerPlay(a_piBondAnimID);
    PlayVO2(a_piBondAnimID);
    SetActive(m_phenolOrbitalStructureType2ID, false);
    SetActive(l_RepresentationLabelsID, false);
    SetActive(i_selectEachLabelID, false);
    SetActive(l_selectEachLabelID, false);
    SetActive(m_phenolOrbitalStructureID, false);
    ToggleInteraction(false);
    clearTimeout(cancelTimeout);
    setTimeout(EnableInstruction, 29916);
    setTimeout(On2pzLabel, 4000);
    setTimeout(OnTopViewLabel, 24000);
    setTimeout(OnPiElectronLabel, 28000);
}

function OnClickSigmaBondBtn() {
    isAllClicked[6] = true;
    SetActive(m_phenolOrbitalStructureType2ID, true);
    PlayVO2(m_phenolOrbitalStructureType2ID);
    SetActive(l_RepresentationLabelsID, true);
    SetActive(l_piElectronCloudsID, false);
    SetActive(a_piBondAnimID, false);
    SetActive(i_selectEachLabelID, false);
    SetActive(l_selectEachLabelID, false);
    SetActive(m_phenolOrbitalStructureID, false);
    ToggleInteraction(false);
    setTimeout(EnableInstruction, 15000);
}

function DisableLabelsOfOrbitalStructure() {
    SetActive(l_TopViewID, false);
    SetActive(l_2pzOrbitalID, false);
    SetActive(l_piElectronCloudsID, false);

}

function On2pzLabel() {
    SetActive(l_2pzOrbitalID, true);
    setTimeout(DisableLabelsOfOrbitalStructure, 2000);
}

function OnTopViewLabel() {
    SetActive(l_TopViewID, true);
    setTimeout(DisableLabelsOfOrbitalStructure, 1500);
}

function OnPiElectronLabel() {
    SetActive(l_piElectronCloudsID, true);

}

function ToggleInteraction(isEnable) {
    if (!isEnable) {
        SetOnClickListener(btn_MFId, '');
        SetOnClickListener(btn_CSFId, '');
        SetOnClickListener(btn_FGId, '');
        SetOnClickListener(btn_EPMId, '');
        SetOnClickListener(btn_OSId, '');
        SetOnClickListener(btn_piBondId, '');
        SetOnClickListener(btn_sigmaBondId, '');
    } else {
        SetOnClickListener(btn_MFId, 'btn_group1_click(1)');
        SetOnClickListener(btn_CSFId, 'btn_group1_click(2)');
        SetOnClickListener(btn_FGId, 'btn_group1_click(3)');
        SetOnClickListener(btn_EPMId, 'btn_group1_click(4)');
        SetOnClickListener(btn_OSId, 'btn_group1_click(5)');
        SetOnClickListener(btn_piBondId, 'OnClickpiBondBtn()');
        SetOnClickListener(btn_sigmaBondId, 'OnClickSigmaBondBtn()');
    }
}

function CheckForLevelComplete() {

    if (allTrue(isAllClicked)) {
        SetActive(btn_ActivityMenuID, true);
        SetActive(i_selectEachLabelID, false);
        SetActive(i_selectEachLabelOrAmID, true, 0.1);
        PlayVO2(i_selectEachLabelOrAmID);
    }
}

function allTrue(obj) {
    console.debug(obj.length);
    for (var i = 0; i < obj.length; i++) {
        if (!obj[i]) {
            return false;
        }
    }
    return true;
}

function p_complete_click() {
    SetActive(btn_ActivityMenuID, false);
    SetActive(i_selectEachLabelID, false);
    SetActive(i_pointGazeToEachColoredRegionID, false);
    SetActive(i_selectEachLabelOrAmID, false);
    OnClickAS();
}

function GoToMainMenu() {
    setTimeout(location.reload.bind(location), 1000);
}

//////////////////////////////////////
// Method used in AS
function p_score_inst_click() {
    SetActive(p_score_instId, false);
    SetActive(q_Q1Id, true);
    SetActive(l_scoreId, true, 0.1);
    SetActive(i_Q1_SelectCompoundId, true, 0.1);
    PlayVO2(i_Q1_SelectCompoundId);
    isDisableClick = false;
    PlayVO2(i_Q1_SelectCompoundId);
}


function q1_ok() {
    ok_click();
    SetActive(btn_Q1OkId, false);
    SetActive(q_Q1Id, false);
    SetActive(i_Q1_SelectCompoundId, false);
    SetActive(q_Q2Id, true);
    SetActive(i_Q2_SelectRegionId, true, .1);
    PlayVO2(i_Q2_SelectRegionId);
    DisableInfoQ1();
    //PlayVO2(i_Q2_SelectRegionId);
}


function q2_ok() {
    ok_click();
    SetActive(btn_Q2OkId, false);
    SetActive(q_Q2Id, false);
    SetActive(i_Q2_SelectRegionId, false);
    // SetActive(q_Q3Id,true);
    // SetActive(l_Q3Id,true);
    // SetActive(i_Q3_DragSigmaBondId,true,0.1);
    SetActive(q_Q4Id, true);
    SetActive(l_Q4Id, true);
    SetActive(i_Q4_DragBondAngleId, true, 0.1);
    PlayVO2(i_Q4_DragBondAngleId);
    DisableInfoQ2();
}

// function q3_ok()
// {
// 	ok_click();
// 	SetActive(btn_Q3OkId,false);
// 	SetActive(q_Q3Id,false);
// 	SetActive(l_Q3Id,false);
// 	SetActive(i_Q3_DragSigmaBondId,false);
// 	SetActive(q_Q4Id,true);
// 	SetActive(l_Q4Id,true);
// 	SetActive(i_Q4_DragBondAngleId,true,0.1);
// }


function q4_ok() {
    ok_click();
    SetActive(btn_Q4OkId, false);
    SetActive(q_Q4Id, false);
    SetActive(l_Q4Id, false);
    SetActive(i_Q4_DragBondAngleId, false);

    utility_changeText('#score_percentage', getPercent() + " %");
    SetActive(p_comp_asId, true);
    PlayVO2(p_comp_asId);
}

function DisplayInfoQ1(name) {
    switch (name) {
        case l_Isopropylphenyl_methanolId:
            SetActive(l_Isopropylphenyl_methanolId, true);
            PlayVO2(l_Isopropylphenyl_methanolId);
            break;
        case l_Methylphenol_4Id:
            SetActive(l_Methylphenol_4Id, true);
            PlayVO2(l_Methylphenol_4Id);
            break;
        case l_Phenylmethanol_2Id:
            SetActive(l_Phenylmethanol_2Id, true);
            PlayVO2(l_Isopropylphenyl_methanolId);
            break;
        case l_PhenylmethanolId:
            SetActive(l_PhenylmethanolId, true);
            PlayVO2(l_Isopropylphenyl_methanolId);
            break;
    }

    isDisableClick = true;
    setTimeout(DisableInfoQ1, 10000);
}

function DisableInfoQ1() {
    SetActive(l_Isopropylphenyl_methanolId, false);
    SetActive(l_Methylphenol_4Id, false);
    SetActive(l_Phenylmethanol_2Id, false);
    SetActive(l_PhenylmethanolId, false);
    isDisableClick = false;
}

function DisplayInfoQ2() {
    isDisableClick = true;
    SetActive(l_Q2_BlueRegionId, true);
    PlayVO2(l_Q2_BlueRegionId);
    setTimeout(DisableInfoQ2, 10000);
}

function DisableInfoQ2() {
    SetActive(l_Q2_BlueRegionId, false);
    isDisableClick = false;
}

function ShowRightOptionQ1() {
    SetActive('#m_Isopropylphenyl_methanol', false);
    SetActive('#m_Methylphenol_4', true);
    SetActive('#m_Phenylmethanol_2', false);
    SetActive('#m_Phenylmethanol', false);
    SetActive(i_Q1_SelectCompoundId, false);
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
}

function p_greaterthan_click() {
    SetActive(p_greaterthanId, false);
    GoToMainMenu();
}

function btn_close_click() {
    if (login_isReferred()) {
        window.location.href = login_referred_get();
    }
}
