///___________________  MainMenu Functions
var i_ToggleLabelInsId = '#i_ToggleLabelIns';
var i_ToggleLabelIns2Id = '#i_ToggleLabelIns2';
var i_ToggleLabelIns3Id = '#i_ToggleLabelIns3';
var i_ToggleLabelIns4Id = '#i_ToggleLabelIns4';

var i_Q1Id = '#i_Q1';
var i_Q2Id = '#i_Q2';
var i_Q3Id = '#i_Q3';
var i_Q4Id = '#i_Q4';
var i_Q5Id = '#i_Q5';
var i_A1Id = '#i_A1';
var i_A2Id = '#i_A2';
var i_A3Id = '#i_A3';
var i_A4Id = '#i_A4';
var i_A5Id = '#i_A5';

var p_DefinitionPanelId ='#p_DefinitionPanel';
var b_LabelOnId='#b_LabelOn';
var label_ScaleId='#label_Scale';
var label_NeedleId='#label_Needle';
var label_PermanentMagnetId='#label_PermanentMagnet';
var label_ElectromagnetId='#label_Electromagnet';
var label_SpringId='#label_Spring';
var b_SplitId='#b_Split';
var base_lvl1Id ='#BaseL1';
var electroMagnet_lvl1Id ='#ElectroMagnet_lvl1';
var magnet_lvl1Id ='#Magnet_lvl1';
var meter_lvl1Id ='#Meter_lvl1';
var niddle_lvl1Id ='#Niddle_lvl1';
var cage_lvl1Id = '#Cage_lvl1';
var ring_lvl1Id= '#Ring_lvl1';

var meter2_lvl1Id ='#Meter2_lvl1';
var niddle2_lvl1Id ='#Niddle2_lvl1';
var ring2_lvl1Id= '#Ring2_lvl1';

var b_MagnetId= '#b_Magnet';
var b_SpringId= '#b_Spring';
var b_NeedleId= '#b_Needle';
var b_ScaleId= '#b_Scale';
var b_ElectromagnetId= '#b_Electromagnet';
var label_MagnetdefineId= '#label_Magnetdefine';
var label_SpringdefineId= '#label_Springdefine';
var label_NeedledefineId= '#label_Needledefine';
var label_ScaledefineId= '#label_Scaledefine';
var label_ElectromagnetdefineId= '#label_Electromagnetdefine';
var p_completeL1Id = '#p_completeLvl1';
var highlight_keyL2Id = '#highlight_key';
var highlight_key2L2Id = '#highlight_key2';
var mkey1_lvl2Id = '#mkey1_lvl2';
var mkey2_lvl2Id = '#mkey2_lvl2';
var aClip1_lvl2Id ='#aClip1_lvl2';
var aClip2_lvl2Id ='#aClip2_lvl2';
var aCurrentFlow_lvl2Id ='#aCurrentFlow_lvl2';
var p_InstructionPanel1Id = '#p_InstructionPanel1';
var p_InstructionPanel2Id = '#p_InstructionPanel2';
var p_InstructionPanel3Id = '#p_InstructionPanel3';
var p_InstructionPanel4Id = '#p_InstructionPanel4';
var p_InstructionPanel5Id = '#p_InstructionPanel5';
var c_Inst_ActivityCompleteId = '#C_Inst_ActivityComplete';
var l_scoreId = '#l_score';
var b_Ok1ASId = '#b_Ok1';
var b_Ok2ASId = '#b_Ok2';
var b_Ok3ASId = '#b_Ok3';
var b_Ok4ASId = '#b_Ok4';
var b_Ok5ASId = '#b_Ok5';

var clickCount =0;

var transparentRingASId='#TransparentRingAS';
var transparentMagnetASId='#TransparentMagnetAS';
var transparentMotorASId='#TransparentMotorAS';
var transparentNeedleASId='#TransparentNeedleAS';
var transparentScaleASId='#TransparentScaleAS';

var transparentRing_DASId='#TransparentRing_DAS';
var transparentMagnet_DASId='#TransparentMagnet_DAS';
var transparentMotor_DASId='#TransparentMotor_DAS';
var transparentNeedle_DASId='#TransparentNeedle_DAS';
var transparentScale_DASId='#TransparentScale_DAS';

var electroMagnet_lvlAsId='#ElectroMagnet_lvlAs';
var magnet_lvlAsId='#Magnet_lvlAs';
var meter_lvlAsId='#Meter_lvlAs';
var niddle_lvlAsId='#Niddle_lvlAs';
var ring_lvlAsId='#Ring_lvlAs';


var electroMagnet_DlvlAsId='#ElectroMagnet_DlvlAs';
var magnet_DlvlAsId='#Magnet_DlvlAs';
var meter_DlvlAsId='#Meter_DlvlAs';
var niddle_DlvlAsId='#Niddle_DlvlAs';
var ring_DlvlAsId='#Ring_DlvlAs';



//////////////// Variable used in AS
var p_score_instId = '#p_score_inst';
var p_comp_asId = '#p_comp_as';
var p_lessthanId = '#p_lessthan';
var p_greaterthanId = '#p_greaterthan';
var l_scoreId = '#l_score';

var isSeries = false;
var isParallel = false;
var isComplete = false;
var r1value = 0;
var r2value = 0;


function OnClickObjective() {
    SetActive('#MainMenu', false);
    SetActive('#LO', true);
    PlayVO2('#p_objective');
}

function OnClickL1() {
    SetActive('#MainMenu', false);
    SetActive('#L1', true);
    PlayVO2(p_DefinitionPanelId);
}

function OnClickL2() {
    SetActive('#MainMenu', false);
    SetActive('#L2', true);
    SetActive(i_ToggleLabelIns3Id,true,0.1);
    PlayVO2(i_ToggleLabelIns3Id);
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
    SetActive('#MainMenu', false);
    SetActive('#L1', true);
    StopVO2(5);
    PlayVO2(p_DefinitionPanelId);
}



///___________________  Level_1 Functions


function p_Definationpnl_OKclick()
{

  SetActive(i_ToggleLabelInsId,true,0.1);
  SetActive(p_DefinitionPanelId,false);
  SetActive(b_LabelOnId,true);
  PlayVO2(i_ToggleLabelInsId);
}

function onClickb_LabelOn()
{
  SetActive(label_ScaleId,true);
  SetActive(label_NeedleId,true);
  SetActive(label_PermanentMagnetId,true);
  SetActive(label_ElectromagnetId,true);
  SetActive(label_SpringId,true);
  SetActive(b_SplitId,true);
}

function onClickb_Split()
{

  SetActive(cage_lvl1Id,true,0.1);
  SetActive(label_ScaleId,false);
  SetActive(label_NeedleId,false);
  SetActive(label_PermanentMagnetId,false);
  SetActive(label_ElectromagnetId,false);
  SetActive(label_SpringId,false);
  SetActive(b_SplitId,false);
  SetActive(b_LabelOnId,false);
  SetActive(b_LabelOnId,false);

  SetActive(meter_lvl1Id,false);
  SetActive(niddle_lvl1Id,false);
  SetActive(ring_lvl1Id,false);
  SetActive(meter2_lvl1Id,true,0.1);
  SetActive(niddle2_lvl1Id,true,0.1);
  SetActive(ring2_lvl1Id,true,0.1);

  SetPosition(magnet_lvl1Id,-5.47,1.00,-7);
  SetPosition(meter2_lvl1Id,4,3.797,-7);
  SetPosition(niddle2_lvl1Id,0, 5.14,-7);
  SetPosition(electroMagnet_lvl1Id,5.47,1.00,-7);
  SetPosition(ring2_lvl1Id,-3.493,3.553,-5.99);


  EnableRotate(magnet_lvl1Id);
  EnableRotate(meter2_lvl1Id);
  EnableRotate(niddle2_lvl1Id);
  EnableRotate(electroMagnet_lvl1Id);
  EnableRotate(ring2_lvl1Id);
  SetActive(i_ToggleLabelInsId,false,0.1);
  SetActive(i_ToggleLabelIns2Id,true,0.1);
  SetActive(b_MagnetId,true);
  SetActive(b_SpringId,true);
  SetActive(b_NeedleId,true);
  SetActive(b_ScaleId,true);
  SetActive(b_ElectromagnetId,true);

  PlayVO2(i_ToggleLabelIns2Id);
}


function EnableRotate(id)
{
  var entity = document.querySelector(id);
  entity.setAttribute('rot','enabled', 'true');
}



function  button_click(i)
 {
   SetActive(label_MagnetdefineId,false);
   SetActive(label_SpringdefineId,false);
   SetActive(label_NeedledefineId,false);
   SetActive(label_ScaledefineId,false);
   SetActive(label_ElectromagnetdefineId,false);


    switch (i)
    {
        case 1:
          PlayVO2(b_MagnetId);
          SetActive(label_MagnetdefineId,true);
          clickCount++;
          SetOnClickListener(b_MagnetId,'');
          counterCheck();

        break;

        case 2:
            SetActive(label_SpringdefineId,true);
            PlayVO2(b_SpringId);
            clickCount++;
            SetOnClickListener(b_SpringId,'');
            counterCheck();
        break;

        case 3:
            SetActive(label_NeedledefineId,true);
            PlayVO2(b_NeedleId);
            clickCount++;
            SetOnClickListener(b_NeedleId,'');
            counterCheck();
        break;

        case 4:
            SetActive(label_ScaledefineId,true);
            PlayVO2(b_ScaleId);
            clickCount++;
            SetOnClickListener(b_ScaleId,'');
            counterCheck();
        break;

        case 5:
            SetActive(label_ElectromagnetdefineId,true);
            PlayVO2(b_ElectromagnetId);
            clickCount++;
            SetOnClickListener(b_ElectromagnetId,'');
            counterCheck();
        break;
      }


    }

function counterCheck()
{
  if(clickCount==5)
  {
    setTimeout(enableLastLvl1pnl, 10000);
    clickCount =0;
  }
}

function enableLastLvl1pnl()
{
  SetActive(p_completeL1Id,true);
  PlayVO2(c_Inst_ActivityCompleteId);
  SetActive(label_MagnetdefineId,false);
  SetActive(label_SpringdefineId,false);
  SetActive(label_NeedledefineId,false);
  SetActive(label_ScaledefineId,false);
  SetActive(label_ElectromagnetdefineId,false);
  SetActive(i_ToggleLabelIns2Id,false);
}


function OnClick_CompleteOk()
{
    SetActive(p_completeL1Id, false);
    SetActive('#L1', false);
    SetActive('#L2', true);
    SetActive('#AS', false);
    SetActive('#MainMenu', false);
    SetActive(i_ToggleLabelIns3Id,true,0.1);
    PlayVO2(i_ToggleLabelIns3Id);

}

///___________________  Level_2 Functions


function OnClick_HighlightKey()
{
  SetActive(highlight_keyL2Id,false);
  SetActive(mkey1_lvl2Id,false);
  SetActive(mkey2_lvl2Id,true,0.1);
  AnimationMixerPlay(aClip1_lvl2Id);
  SetActive(aCurrentFlow_lvl2Id,true,0.1);
  AnimationMixerPlay(aCurrentFlow_lvl2Id);
  setTimeout(pauseNiddleRTL,3000);
  SetActive(i_ToggleLabelIns3Id,false,0.1);
  SetActive(p_InstructionPanel1Id,true);
  PlayVO2(p_InstructionPanel1Id);
}

function pauseNiddleRTL()
{

  AnimationMixerPause(aClip1_lvl2Id);
}

function  button_click1()
{
    SetActive(i_ToggleLabelIns4Id,true, 0.1);
    SetActive(p_InstructionPanel1Id,false);
    PlayVO2(i_ToggleLabelIns4Id);
}

function OnClick_HighlightKey2()
{
  SetActive(aClip2_lvl2Id,true,0.1);
  SetActive(aClip1_lvl2Id,false,0.1);
   SetActive(mkey1_lvl2Id,true,0.1);
   SetActive(mkey2_lvl2Id,false,0.1);
   SetActive(aCurrentFlow_lvl2Id,false,0.1);
   AnimationMixerPlay(aClip2_lvl2Id);
   setTimeout(pauseNiddleLTR,3000);
   SetActive(p_InstructionPanel2Id,true);
   SetActive(i_ToggleLabelIns3Id,false, 0.1);
   SetActive(i_ToggleLabelIns4Id,false, 0.1);
   PlayVO2(p_InstructionPanel2Id);


}
function pauseNiddleLTR()
{
  AnimationMixerPause(aClip2_lvl2Id);
//  AnimationMixerPause(aClip1_lvl2Id);
}

function  button_click2()
{
  SetActive(p_InstructionPanel2Id,false);
  SetActive(p_InstructionPanel3Id,true);
  PlayVO2(c_Inst_ActivityCompleteId);
}

function OnClick_CompleteOk2()
{
    PlayVO2(p_score_instId);
    SetActive(p_InstructionPanel3Id,false);
    SetActive('#MainMenu', false);
    SetActive('#L2', false);
    SetActive('#AS', true);
    SetPosition(magnet_lvlAsId,-2.77, 1.5, -6.276);
    SetPosition(meter1_lvlAsId,3.474, 0.630, -7.156);
    SetPosition(niddle2_lvl1Id,-4.51, 0.0, -5.741);
    SetPosition(electroMagnet_lvl1Id,5.56, 0.0, -7.291);
    SetPosition(ring2_lvl1Id,-0.02, 2.222, -5.783);
}

///___________________  Level_AS Functions


function  button_clickAs1()
{
  PlayVO2(p_InstructionPanel5Id);
  SetActive(p_InstructionPanel4Id,false);
  SetActive(p_InstructionPanel5Id,true);

}

function  button_clickAs2()
{
  PlayVO2(i_Q1Id);
  SetActive(p_InstructionPanel5Id,false);
  SetActive(i_Q1Id,true,0.1);
  SetActive(l_scoreId,true,0.1);

  drag_AddObject("ElectroMagnet_lvlAs");
  drag_AddObject("Meter_lvlAs");
  drag_AddObject("Niddle_lvlAs");
  drag_AddObject("Ring_lvlAs");
  drag_AddObject("Magnet_lvlAs");


//SetActive(electroMagnet_lvlAsId,true,0.1);
// SetActive(magnet_lvlAsId,true,0.1);
// SetActive(meter_lvlAsId,true,0.1);
// SetActive(niddle_lvlAsId,true,0.1);
// SetActive(ring_lvlAsId,true,0.1);
//
// SetActive(electroMagnet_DlvlAsId,false);
// SetActive(magnet_DlvlAsId,false);
// SetActive(meter_DlvlAsId,false);
// SetActive(niddle_DlvlAsId,false);
// SetActive(ring_DlvlAsId,false);

}


function onClickOkAfterDrag(i)
{
  switch (i)
  {
    case 1:
    SetActive(b_Ok1ASId,false);
    SetActive(i_Q1Id,false);
    SetActive(i_A1Id,false);
    SetActive(i_Q2Id,true,0.1);
    PlayVO2(i_Q2Id);
    break;

    case 2:
    SetActive(b_Ok2ASId,false);
    SetActive(i_Q2Id,false);
    SetActive(i_A2Id,false);
    SetActive(i_Q3Id,true,0.1);
    PlayVO2(i_Q3Id);
    break;

    case 3:
    SetActive(b_Ok3ASId,false);
    SetActive(i_Q3Id,false);
    SetActive(i_A3Id,false);
    SetActive(i_Q4Id,true,0.1);
    PlayVO2(i_Q4Id);
    break;

    case 4:
    SetActive(b_Ok4ASId,false);
    SetActive(i_Q4Id,false);
    SetActive(i_A4Id,false);
    SetActive(i_Q5Id,true,0.1);
    PlayVO2(i_Q5Id);
    break;

    case 5:
    SetActive(b_Ok5ASId,false);
    SetActive(i_Q5Id,false);
    SetActive(i_A5Id,false);
    utility_changeText('#score_percent', getPercent() + " %");
    SetActive('#p_comp_as', true);
    PlayVO2('#p_comp_as');
    break;
  }

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

function GoToMainMenu() {
    setTimeout(location.reload.bind(location), 1000);

}

















// function b_typesofCkt_click() {
//     SetOnClickListener(b_typesofCktId, '');
//     SetActive(b_ParallelId, true);
//     SetActive(b_SeriesId, true);
// }
//
// function b_Series_click() {
//     isSeries = true;
//     SetOnClickListener(b_SeriesId, '');
//     SetActive("#BluewireSeries", true);
//     SetActive("#GreenwireSeries", true);
//     SetActive("#RedWireSeries", true);
//     SetOnClickListener("#BluewireSeries", '');
//     SetOnClickListener("#GreenwireSeries", '');
//     SetOnClickListener("#RedWireSeries", '');
//     SetActive(b_typesofCktId, false);
//     SetActive(i_selectCircuitInstructionId, false);
//     SetActive(b_ParallelId, false);
//     SetActive(b_ResistorR1Id, true);
//     SetActive(i_selectR1andValueInstructionId, true, .1);
//     PlayVO2(i_selectR1andValueInstructionId);
//     SetPosition(b_SeriesId, 0, 2.21, -2);
//     SetActive(p_VoltdisplayId, true);
//
// }
//
// function b_Parallel_click() {
//     isParallel = true;
//     SetOnClickListener(b_ParallelId, '');
//     SetActive("#RedWireParallel", true);
//     SetActive("#GreenwireParallel", true);
//     SetActive("#BluewireParallel", true);
//     SetActive("#YellowwireParallel", true);
//     SetOnClickListener("#RedWireParallel", '');
//     SetOnClickListener("#GreenwireParallel", '');
//     SetOnClickListener("#BluewireParallel", '');
//     SetOnClickListener("#YellowwireParallel", '');
//     SetActive(b_typesofCktId, false);
//     SetActive(i_selectCircuitInstructionId, false);
//     SetActive(b_SeriesId, false);
//     SetActive(b_ResistorR1Id, true);
//     SetActive(i_selectR1andValueInstructionId, true, .1);
//     PlayVO2(i_selectR1andValueInstructionId);
//     SetPosition(b_ParallelId, 0, 2.21, -2);
//     SetActive(p_VoltdisplayId, true);
// }
//
// function b_ResistorR1_click() {
//     SetOnClickListener(b_ResistorR1Id, '');
//     SetActive(b_R1_10ohmId, true);
//     SetActive(b_R1_20ohmId, true);
//     SetActive(b_R1_30ohmId, true);
//     SetActive(b_R1_40ohmId, true);
//     SetActive(b_R1_50ohmId, true);
// }
//
// function b_R1Value_click(i) {
//     r1value = i;
//     switch (i) {
//         case 10:
//             SetOnClickListener(b_R1_10ohmId, '');
//             SetPosition(b_R1_10ohmId, -1, 2.01, -2);
//             SetActive(b_R1_20ohmId, false);
//             SetActive(b_R1_30ohmId, false);
//             SetActive(b_R1_40ohmId, false);
//             SetActive(b_R1_50ohmId, false);
//             break;
//
//         case 20:
//             SetOnClickListener(b_R1_20ohmId, '');
//             SetPosition(b_R1_20ohmId, -1, 2.01, -2);
//             SetActive(b_R1_10ohmId, false);
//             SetActive(b_R1_30ohmId, false);
//             SetActive(b_R1_40ohmId, false);
//             SetActive(b_R1_50ohmId, false);
//             break;
//
//         case 30:
//             SetOnClickListener(b_R1_30ohmId, '');
//             SetPosition(b_R1_30ohmId, -1, 2.01, -2);
//             SetActive(b_R1_10ohmId, false);
//             SetActive(b_R1_20ohmId, false);
//             SetActive(b_R1_40ohmId, false);
//             SetActive(b_R1_50ohmId, false);
//             break;
//
//         case 40:
//             SetOnClickListener(b_R1_40ohmId, '');
//             SetPosition(b_R1_40ohmId, -1, 2.01, -2);
//             SetActive(b_R1_10ohmId, false);
//             SetActive(b_R1_20ohmId, false);
//             SetActive(b_R1_30ohmId, false);
//             SetActive(b_R1_50ohmId, false);
//             break;
//
//         case 50:
//             SetOnClickListener(b_R1_50ohmId, '');
//             SetPosition(b_R1_50ohmId, -1, 2.01, -2);
//             SetActive(b_R1_10ohmId, false);
//             SetActive(b_R1_20ohmId, false);
//             SetActive(b_R1_30ohmId, false);
//             SetActive(b_R1_40ohmId, false);
//             break;
//     }
//     SetActive(i_selectR1andValueInstructionId, false);
//     SetActive(i_selectR2andValueInstructionId, true, 0.1);
//     SetActive(b_ResistorR1Id, false);
//     SetActive(b_ResistorR2Id, true);
//     utility_changeText(p_R1displayId, "R1 = " + i + " ohm");
//     PlayVO2(i_selectR2andValueInstructionId);
// }
//
// function b_ResistorR2_click() {
//     SetOnClickListener(b_ResistorR2Id, '');
//     SetActive(b_R2_10ohmId, true);
//     SetActive(b_R2_20ohmId, true);
//     SetActive(b_R2_30ohmId, true);
//     SetActive(b_R2_40ohmId, true);
//     SetActive(b_R2_50ohmId, true);
// }
//
// function b_R2Value_click(i) {
//     r2value = i;
//     switch (i) {
//         case 10:
//             SetOnClickListener(b_R2_10ohmId, '');
//             SetPosition(b_R2_10ohmId, 1, 2.01, -2);
//             SetActive(b_R2_20ohmId, false);
//             SetActive(b_R2_30ohmId, false);
//             SetActive(b_R2_40ohmId, false);
//             SetActive(b_R2_50ohmId, false);
//             break;
//
//         case 20:
//             SetOnClickListener(b_R2_20ohmId, '');
//             SetPosition(b_R2_20ohmId, 1, 2.01, -2);
//             SetActive(b_R2_10ohmId, false);
//             SetActive(b_R2_30ohmId, false);
//             SetActive(b_R2_40ohmId, false);
//             SetActive(b_R2_50ohmId, false);
//             break;
//
//         case 30:
//             SetOnClickListener(b_R2_30ohmId, '');
//             SetPosition(b_R2_30ohmId, 1, 2.01, -2);
//             SetActive(b_R2_10ohmId, false);
//             SetActive(b_R2_20ohmId, false);
//             SetActive(b_R2_40ohmId, false);
//             SetActive(b_R2_50ohmId, false);
//             break;
//
//         case 40:
//             SetOnClickListener(b_R2_40ohmId, '');
//             SetPosition(b_R2_40ohmId, 1, 2.01, -2);
//             SetActive(b_R2_10ohmId, false);
//             SetActive(b_R2_20ohmId, false);
//             SetActive(b_R2_30ohmId, false);
//             SetActive(b_R2_50ohmId, false);
//             break;
//
//         case 50:
//             SetOnClickListener(b_R2_50ohmId, '');
//             SetPosition(b_R2_50ohmId, 1, 2.01, -2);
//             SetActive(b_R2_10ohmId, false);
//             SetActive(b_R2_20ohmId, false);
//             SetActive(b_R2_30ohmId, false);
//             SetActive(b_R2_40ohmId, false);
//             break;
//     }
//     utility_changeText(p_R2displayId, "R2 = " + i + " ohm");
//     SetActive(p_R1displayId, true);
//     SetActive(p_R2displayId, true);
//     SetActive(i_selectR2andValueInstructionId, false);
//     SetActive(b_ResistorR2Id, false);
//     SetActive(i_selectWireInstructionId, true, 0.1);
//     PlayVO2(i_selectWireInstructionId);
//     SetOnClickListener("#BluewireSeries", 'b_blueWireSeries_click()');
//     SetOnClickListener("#GreenwireSeries", 'b_greenWireSeries_click()');
//     SetOnClickListener("#RedWireSeries", 'b_redWireSeries_click()');
//     SetOnClickListener("#RedWireParallel", 'b_redWireParallel_click()');
//     SetOnClickListener("#GreenwireParallel", 'b_greenWireParallel_click()');
//     SetOnClickListener("#BluewireParallel", 'b_blueWireParallel_click()');
//     SetOnClickListener("#YellowwireParallel", 'b_yellowWireParallel_click()');
//
// }
//
// var seriesclick = 0;
// var parallelclick = 0;
//
// function b_blueWireSeries_click() {
//     seriesclick++;
//     SetActive('#BluewireSeries', false);
//     SetActive('#blueWire_finalSeries', true, 0.5);
//     checkingSeries();
// }
//
// function b_redWireSeries_click() {
//     seriesclick++;
//     SetActive('#RedWireSeries', false);
//     SetActive('#redWire_finalSeries', true, 0.5);
//     checkingSeries();
// }
//
// function b_greenWireSeries_click() {
//     seriesclick++;
//     SetActive('#GreenwireSeries', false);
//     SetActive('#greenWire_finalSeries', true, 0.5);
//     checkingSeries();
// }
//
//
// function checkingSeries() {
//     if (seriesclick >= 3) {
//         setTimeout(aftercktCompleteclick, 1000);
//     }
// }
//
// function b_blueWireParallel_click() {
//     parallelclick++;
//     SetActive('#BluewireParallel', false);
//     SetActive('#blueWire_finalParallel', true, 0.5);
//     checkingParallel();
// }
//
// function b_redWireParallel_click() {
//     parallelclick++;
//     SetActive('#RedwireParallel', false);
//     SetActive('#redWire_finalParallel', true, 0.5);
//     checkingParallel();
// }
//
// function b_greenWireParallel_click() {
//     parallelclick++;
//     SetActive('#GreenwireParallel', false);
//     SetActive('#greenWire_finalParallel', true, 0.5);
//     checkingParallel();
// }
//
// function b_yellowWireParallel_click() {
//     parallelclick++;
//     SetActive('#YellowwireParallel', false);
//     SetActive('#yellowWire_finalParallel', true, 0.5);
//     checkingParallel();
// }
//
// function checkingParallel() {
//     if (parallelclick >= 4) {
//         setTimeout(aftercktCompleteclick, 1000);
//     }
// }
//
//
// function aftercktCompleteclick() {
//     SetActive(p_R1displayId, false);
//     SetActive(p_R2displayId, false);
//     SetActive(p_VoltdisplayId, false);
//     SetActive(b_SeriesId, false);
//     SetActive(b_ParallelId, false);
//     SetActive(b_R1_10ohmId, false);
//     SetActive(b_R1_20ohmId, false);
//     SetActive(b_R1_30ohmId, false);
//     SetActive(b_R1_40ohmId, false);
//     SetActive(b_R1_50ohmId, false);
//     SetActive(b_R2_10ohmId, false);
//     SetActive(b_R2_20ohmId, false);
//     SetActive(b_R2_30ohmId, false);
//     SetActive(b_R2_40ohmId, false);
//     SetActive(b_R2_50ohmId, false);
//     SetActive(i_selectWireInstructionId, false);
//     if (isSeries) {
//         utility_changeText(p_wellDoneAftercktId, "Well done! The circuit is now complete. Click  OK to see the parameters, formulas, and calculations related to the series circuit.");
//         PlayVO2('#p_wellDoneAftercktSeries');
//     }
//     if (isParallel) {
//         utility_changeText(p_wellDoneAftercktId, "Well done! The circuit is now complete. Click  OK to see the parameters, formulas, and calculations related to the parallel circuit.");
//         PlayVO2('#p_wellDoneAftercktParallel');
//     }
//     SetActive(p_wellDoneAftercktId, true);
//
// }
//
//
// function seriesResistanceR(r1, r2) {
//     var rSeries;
//     rSeries = (r1 + r2);
//     return rSeries;
// }
//
// function parallelResistanceR(r1, r2) {
//     var rparallel;
//     rparallel = ((r1 * r2) / (r1 + r2));
//     return rparallel;
// }
//
//
//
// function b_wellDoneAfterckt_click() {
//     StopVO2('#p_wellDoneAftercktSeries');
//     StopVO2('#p_wellDoneAftercktParallel');
//     SetActive(p_wellDoneAftercktId, false);
//     if (isSeries) {
//         utility_changeText(p_totalResistancecktId, "Total resistance of circuit, R \n = R1 + R2" + "\n= " + r1value + "+" + r2value + "\n= " + seriesResistanceR(r1value, r2value) + " ohm");
//     }
//     if (isParallel) {
//         utility_changeText(p_totalResistancecktId, "Total resistance of circuit, R \n = (R1 * R2) / (R1+R2) \n =(" + r1value + "*" + r2value + ") / (" + r1value + "+" + r2value + ") \n =" + parallelResistanceR(r1value, r2value).toFixed(2) + " ohm");
//     }
//     SetActive(p_totalResistancecktId, true);
// }
//
// function seriesCurrentI(r1, r2) {
//     var iSeries;
//     iSeries = (5 / (r1 + r2));
//     return iSeries;
// }
//
// function parallelCurrentI(r1, r2) {
//     var iParallel;
//     iParallel = (5 / (r1 * r2) / (r1 + r2));
//     return iParallel;
// }
//
//
// function p_totalResistanceckt_click() {
//     SetActive(p_totalResistancecktId, false);
//     if (isSeries) {
//         utility_changeText(p_totalCurentcktId, "Total current = Battery voltage (V) / R \n = 5/" + seriesResistanceR(r1value, r2value) + "\n =" + seriesCurrentI(r1value, r2value).toFixed(5) + " A");
//     }
//     if (isParallel) {
//         utility_changeText(p_totalCurentcktId, "Total current = Battery voltage (V) / R \n = 5/" + parallelResistanceR(r1value, r2value).toFixed(2) + "\n =" + parallelCurrentI(r1value, r2value).toFixed(5) + " A");
//     }
//     SetActive(p_totalCurentcktId, true);
// }
//
//
// function p_totalCurentckt_click() {
//     SetActive(p_totalCurentcktId, false);
//     if (isSeries) {
//         utility_changeText(p_voltageDropR1SeriesId, "Voltage drop across R1 = Total current * R1 \n = " + seriesCurrentI(r1value, r2value).toFixed(3) + "*" + r1value + "\n = " + (seriesCurrentI(r1value, r2value) * r1value) + " V");
//         SetActive(p_voltageDropR1SeriesId, true);
//     }
//     if (isParallel) {
//         utility_changeText(p_currentThroughR1ParallelId, "Current through R1 = Battery Voltage / R1 \n = 5/" + r1value + "\n = " + (5 / r1value).toFixed(3) + " A");
//         SetActive(p_currentThroughR1ParallelId, true);
//     }
//
// }
//
// function p_voltageDropR1Series_click() {
//     SetActive(p_voltageDropR1SeriesId, false);
//     SetActive(p_currentThroughR1ParallelId, false);
//     utility_changeText(p_voltageDropR2SeriesId, "Voltage drop across R2 = Total current * R2 \n = " + seriesCurrentI(r1value, r2value).toFixed(3) + "*" + r2value + "\n = " + (seriesCurrentI(r1value, r2value) * r2value) + " V");
//     SetActive(p_voltageDropR2SeriesId, true);
//
// }
//
// function p_voltageDropR2Series_click() {
//     SetActive(p_voltageDropR2SeriesId, false);
//     utility_changeText(p_currentThroughR1SeriesId, "Current through R1 = Voltage drop across R1 / R1 \n = " + (seriesCurrentI(r1value, r2value) * r1value) + "/" + r1value + "\n = " + ((seriesCurrentI(r1value, r2value) * r1value) / r1value).toFixed(3) + " A");
//     SetActive(p_currentThroughR1SeriesId, true);
// }
//
// function p_currentThroughR1Series_click() {
//     SetActive(p_currentThroughR1SeriesId, false);
//     utility_changeText(p_currentThroughR2SeriesId, "Current through R2 = Voltage drop across R2 / R2 \n = " + (seriesCurrentI(r1value, r2value) * r2value) + "/" + r2value + "\n = " + ((seriesCurrentI(r1value, r2value) * r2value) / r2value).toFixed(3) + " A");
//     SetActive(p_currentThroughR2SeriesId, true);
// }
//
// function p_currentThroughR1Parallel_click() {
//     SetActive(p_voltageDropR1SeriesId, false);
//     SetActive(p_currentThroughR1ParallelId, false);
//     utility_changeText(p_currentThroughR2ParallelId, "Current through R2 = Battery Voltage / R2 \n = 5/" + r2value + "\n = " + (5 / r2value).toFixed(3) + " A");
//     SetActive(p_currentThroughR2ParallelId, true);
//
// }
//
// function p_currentThroughR2Parallel_click() {
//     SetActive(p_currentThroughR2ParallelId, false);
//     utility_changeText(p_voltageDropR1ParallelId, "Voltage drop across R1 = Current through R1 * R1 \n =" + (5 / r1value).toFixed(3) + "*" + r1value + "\n = " + ((5 / r1value) * r1value) + " V");
//     SetActive(p_voltageDropR1ParallelId, true);
// }
//
// function p_voltageDropR1Parallel_click() {
//     SetActive(p_voltageDropR1ParallelId, false);
//     utility_changeText(p_voltageDropR2ParallelId, "Voltage drop across R2 = Current through R2 * R2 \n =" + (5 / r2value).toFixed(3) + "*" + r2value + "\n = " + ((5 / r2value) * r2value) + " V");
//     SetActive(p_voltageDropR2ParallelId, true);
// }
//
// function onObservationClick() {
//     SetActive(p_voltageDropR2ParallelId, false);
//     SetActive(p_currentThroughR2SeriesId, false);
//     SetActive(p_observeParameterId, true);
//     PlayVO2(p_observeParameterId);
//     if (isSeries) {
//         utility_changeText(p_observeParameterTotalIId, "Total current: \n " + seriesCurrentI(r1value, r2value).toFixed(3) + " A");
//         utility_changeText(p_observeParameterTotalRId, "Total resistance of \n the circuit:" + seriesResistanceR(r1value, r2value).toFixed(2) + " ohm");
//         utility_changeText(p_observeParameterCurrentR1Id, "Current through \n R1: " + ((seriesCurrentI(r1value, r2value) * r1value) / r1value).toFixed(2) + " A");
//         utility_changeText(p_observeParameterCurrentR2Id, "Current through \n R2: " + ((seriesCurrentI(r1value, r2value) * r2value) / r2value).toFixed(2) + " A");
//         utility_changeText(p_observeParameterVoltageR1Id, "Voltage drop \n across R1: " + (seriesCurrentI(r1value, r2value) * r1value).toFixed(3) + " V");
//         utility_changeText(p_observeParameterVoltageR2Id, "Voltage drop \n across R2: " + (seriesCurrentI(r1value, r2value) * r2value).toFixed(3) + " V");
//     }
//     if (isParallel) {
//         utility_changeText(p_observeParameterTotalIId, "Total current: \n " + parallelCurrentI(r1value, r2value).toFixed(5) + " A");
//         utility_changeText(p_observeParameterTotalRId, "Total resistance of \n the circuit:" + parallelResistanceR(r1value, r2value).toFixed(2) + " ohm");
//         utility_changeText(p_observeParameterCurrentR1Id, "Current through \n R1: " + (5 / r1value).toFixed(3) + " A");
//         utility_changeText(p_observeParameterCurrentR2Id, "Current through \n R2: " + (5 / r2value).toFixed(3) + " A");
//         utility_changeText(p_observeParameterVoltageR1Id, "Voltage drop \n across R1: " + ((5 / r1value) * r1value).toFixed(3) + " V");
//         utility_changeText(p_observeParameterVoltageR2Id, "Voltage drop \n across R2: " + ((5 / r2value) * r2value).toFixed(3) + " V");
//     }
//     SetActive(p_observeParameterTotalIId, true);
//     SetActive(p_observeParameterTotalRId, true);
//     SetActive(p_observeParameterCurrentR1Id, true);
//     SetActive(p_observeParameterCurrentR2Id, true);
//     SetActive(p_observeParameterVoltageR1Id, true);
//     SetActive(p_observeParameterVoltageR2Id, true);
// }
//
// function onObservationOKclick() {
//     SetActive(p_observeParameterId, false);
//     if (isSeries) {
//         SetActive('#Q1_L1', true);
//         PlayVO2('#Q1_L1');
//         SetActive('#redWire_finalSeries', false);
//         SetActive('#greenWire_finalSeries', false);
//         SetActive('#blueWire_finalSeries', false);
//
//     }
//     if (isParallel) {
//         SetActive('#Q2_L1', true);
//         PlayVO2('#Q2_L1');
//         SetActive('#redWire_finalParallel', false);
//         SetActive('#greenWire_finalParallel', false);
//         SetActive('#blueWire_finalParallel', false);
//         SetActive('#yellowWire_finalParallel', false);
//     }
//
// }
//
// function onQ1_L1OKclick() {
//     ok_click();
//     SetActive(p_observeParameterTotalIId, false);
//     SetActive(p_observeParameterTotalRId, false);
//     SetActive(p_observeParameterCurrentR1Id, false);
//     SetActive(p_observeParameterCurrentR2Id, false);
//     SetActive(p_observeParameterVoltageR1Id, false);
//     SetActive(p_observeParameterVoltageR2Id, false);
//     SetActive('#Q1_L1', false);
//     SetActive(p_learningOutcomeSeriesId, true);
//     PlayVO2(p_learningOutcomeSeriesId);
//
// }
//
// function onQ2_L1OKclick() {
//     SetActive(p_observeParameterTotalIId, false);
//     SetActive(p_observeParameterTotalRId, false);
//     SetActive(p_observeParameterCurrentR1Id, false);
//     SetActive(p_observeParameterCurrentR2Id, false);
//     SetActive(p_observeParameterVoltageR1Id, false);
//     SetActive(p_observeParameterVoltageR2Id, false);
//     SetActive('#Q2_L1', false);
//     SetActive(p_learningOutcomeParallelId, true);
//     PlayVO2(p_learningOutcomeParallelId);
//     ok_click();
// }
//
// function LearningOutcomeSeries_click() {
//     SetActive(p_learningOutcomeSeriesId, false);
//     if (isComplete) {
//         SetActive(p_completeLevelId, true);
//         PlayVO2(p_completeLevelId);
//     } else {
//         SetActive(b_typesofCktId, true);
//         SetActive(i_selectCircuitInstructionId, true, 0.1);
//         isSeries = false;
//         resetLevel();
//     }
//
// }
//
// function LearningOutcomeParallel_click() {
//     SetActive(p_learningOutcomeParallelId, false);
//     if (isComplete) {
//         SetActive(p_completeLevelId, true);
//         PlayVO2(p_completeLevelId);
//     } else {
//         SetActive(b_typesofCktId, true);
//         SetActive(i_selectCircuitInstructionId, true, 0.1);
//         isParallel = false;
//         resetLevel();
//     }
// }
//
// function resetLevel() {
//     SetOnClickListener(b_typesofCktId, 'b_typesofCkt_click();');
//     SetPosition(b_SeriesId, 0, 2.035, -2);
//     SetPosition(b_ParallelId, 0, 1.85, -2);
//     SetOnClickListener(b_ResistorR1Id, 'b_ResistorR1_click();');
//     SetOnClickListener(b_ResistorR2Id, 'b_ResistorR2_click();');
//     SetOnClickListener(b_R1_10ohmId, 'b_R1Value_click(10);');
//     SetOnClickListener(b_R1_20ohmId, 'b_R1Value_click(20);');
//     SetOnClickListener(b_R1_30ohmId, 'b_R1Value_click(30);');
//     SetOnClickListener(b_R1_40ohmId, 'b_R1Value_click(40);');
//     SetOnClickListener(b_R1_50ohmId, 'b_R1Value_click(50);');
//     SetOnClickListener(b_R2_10ohmId, 'b_R2Value_click(10);');
//     SetOnClickListener(b_R2_20ohmId, 'b_R2Value_click(20);');
//     SetOnClickListener(b_R2_30ohmId, 'b_R2Value_click(30);');
//     SetOnClickListener(b_R2_40ohmId, 'b_R2Value_click(40);');
//     SetOnClickListener(b_R2_50ohmId, 'b_R2Value_click(50);');
//     SetPosition(b_R1_10ohmId, -1, 1.8, -2);
//     SetPosition(b_R1_20ohmId, -1, 1.6, -2);
//     SetPosition(b_R1_30ohmId, -1, 1.4, -2);
//     SetPosition(b_R1_40ohmId, -1, 1.2, -2);
//     SetPosition(b_R1_50ohmId, -1, 1, -2);
//     SetPosition(b_R2_10ohmId, 1, 1.8, -2);
//     SetPosition(b_R2_20ohmId, 1, 1.6, -2);
//     SetPosition(b_R2_30ohmId, 1, 1.4, -2);
//     SetPosition(b_R2_40ohmId, 1, 1.2, -2);
//     SetPosition(b_R2_50ohmId, 1, 1, -2);
//     SetActive('#Q1_L1', false);
//     SetActive('#Q2_L1', false);
//     SetActive(p_voltageDropR1SeriesId, false);
//     SetActive(p_currentThroughR1ParallelId, false);
//     SetActive(p_voltageDropR2SeriesId, false);
//     SetActive(p_currentThroughR1SeriesId, false);
//     SetActive(p_currentThroughR2SeriesId, false);
//     SetActive(p_currentThroughR2ParallelId, false);
//     SetActive(p_voltageDropR1ParallelId, false);
//     SetActive(p_voltageDropR2ParallelId, false);
//     isComplete = true;
//     PlayVO2(i_selectCircuitInstructionId);
// }
//
// function p_complete_click() {
//     SetActive(p_completeLevelId, false);
//     SetActive('#L1', false);
//     SetActive('#AS', true);
//     SetActive('#MainMenu', false);
//     PlayVO2(p_score_instId);
// }
//
//
// function GoToMainMenu() {
//     setTimeout(location.reload.bind(location), 1000);
//
// }
//
//
//
//
// //////////////////////////////////////
// // Method used in AS
//
//
// function p_score_inst_click() {
//     SetActive(p_score_instId, false);
//     SetActive(p_ModelAId, true);
//     SetActive(p_ModelBId, true);
//     SetActive('#Q1_AS', true);
//     SetActive(l_scoreId, true, 0.1);
//     PlayVO2('#Q1_AS');
// }
//
//
// function q1_ok() {
//     ok_click();
//     SetActive('#Q1_AS', false);
//     SetActive('#AS_Model1', false);
//     SetActive('#AS_Model2', true, 0.5);
//     SetActive(p_ModelAId, false);
//     SetActive(p_ModelBId, false);
//     SetActive('#AS_Greenwire', true);
//     SetActive('#AS_Redwire', true);
//     SetActive('#AS_Bluewire', true);
//     SetActive('#p_RegisterR1', true);
//     SetActive('#p_RegisterR2', true);
//     SetActive(p_startId, true);
//     SetActive(i_completeCktWithin60Id, true, 0.1);
//     PlayVO2(i_completeCktWithin60Id);
//     SetOnClickListener('#AS_Bluewire', '');
//     SetOnClickListener('#AS_Greenwire', '');
//     SetOnClickListener('#AS_Redwire', '');
// }
//
// var n = 60;
// var rightAttempt = false;
// var wrongCount = 0;
// var wireClick = 0;
//
//
// function b_start_click() {
//     SetOnClickListener(p_startId, '');
//     countDown();
//     SetOnClickListener('#AS_Bluewire', "b_blueWireAS_click();");
//     SetOnClickListener('#AS_Greenwire', "b_greenWireAS_click();");
//     SetOnClickListener('#AS_Redwire', "b_redWireAS_click();");
//
// }
//
// function countDown() {
//     utility_changeText(p_startId, "Time : " + n + " s");
//
//     if (n > 0) {
//
//         if (rightAttempt) {
//             correctAttempt();
//             rightAttempt = false;
//         } else {
//             n--;
//             setTimeout('countDown()', 1000);
//         }
//
//     } else {
//         wrongAttempt();
//     }
// }
//
//
//
// function b_blueWireAS_click() {
//     SetActive('#AS_Bluewire', false);
//     SetActive('#AS_Bluewire_Final', true, 0.5);
//     wireClick++;
//     checkAllwireselected();
// }
//
// function b_greenWireAS_click() {
//     SetActive('#AS_Greenwire', false);
//     SetActive('#AS_Greenwire_Final', true, 0.5);
//     wireClick++;
//     checkAllwireselected();
// }
//
// function b_redWireAS_click() {
//     SetActive('#AS_Redwire', false);
//     SetActive('#AS_Redwwire_Final', true, 0.5);
//     wireClick++;
//     checkAllwireselected();
// }
//
// function checkAllwireselected() {
//     if (wireClick == 3) {
//         rightAttempt = true;
//     } else {
//         rightAttempt = false;
//     }
//
// }
//
// function correctAttempt() {
//     SetActive('#welldone_6', true);
//     PlayVO2('#welldone_6');
//     setTimeout(afterwelldone, 2000);
//     if (wrongCount == 0) {
//         addScore(2, 1);
//     } else if (wrongCount == 1) {
//         addScore(2, 2);
//     } else if (wrongCount == 2) {
//         addScore(2, 3);
//     }
// }
//
// function afterwelldone() {
//     SetActive('#Q2_AS', true);
//     PlayVO2('#Q2_AS');
//     SetActive('#welldone_6', false);
//     SetActive(i_completeCktWithin60Id, false);
//     SetActive(p_startId, false);
//     wrongCount = 0;
// }
//
// function wrongAttempt() {
//
//     wrongCount++;
//     if (wrongCount > 2) {
//         AutoCorrect();
//         wrongCount = 0;
//     } else {
//         SetActive('#tryagain_6', true);
//         PlayVO2('#tryagain_6');
//         setTimeout(disabletryagain, 2000);
//         SetOnClickListener(p_startId, 'b_start_click();');
//         utility_changeText(p_startId, "START");
//         n = 60;
//         SetActive('#AS_Redwire', true);
//         SetActive('#AS_Redwwire_Final', false);
//         SetActive('#AS_Bluewire', true);
//         SetActive('#AS_Bluewire_Final', false);
//         SetActive('#AS_Greenwire', true);
//         SetActive('#AS_Greenwire_Final', false);
//         SetOnClickListener('#AS_Redwire', "");
//         SetOnClickListener('#AS_Bluewire', "");
//         SetOnClickListener('#AS_Greenwire', "");
//
//         wireClick = 0;
//         rightAttempt = false;
//     }
// }
//
// function disabletryagain() {
//     SetActive('#tryagain_6', false);
// }
//
// function AutoCorrect() {
//     addScore(2, 4);
//     SetActive(p_startId, false);
//     SetActive(i_completeCktWithin60Id, false);
//     SetActive('#AS_Image1', true);
//     SetActive('#AS_Image2', true);
//     SetActive('#AS_Image3', true);
//     SetActive('#AS_Image4', true);
//     SetActive('#AS_Image5', true);
//     SetActive('#AS_Image6', true);
//     SetActive('#AS_Image7', true);
//     SetActive('#AS_Image8', true);
//     SetActive('#AS_Greenwire', false);
//     SetActive('#AS_Redwire', false);
//     SetActive('#AS_Bluewire', false);
//     SetActive('#AS_Redwwire_Final', false);
//     SetActive('#AS_Bluewire_Final', false);
//     SetActive('#AS_Greenwire_Final', false);
//     SetActive(b_allCktOkId, true);
//     SetActive(i_click8cktId, true, 0.1);
//     PlayVO2(i_click8cktId);
//
// }
//
//
// function onimage_click(i) {
//
//     switch (i) {
//         case 1:
//             SetOnClickListener('#AS_Image1', '');
//             SetPosition('#AS_Image1', 0, 1.7, -0.8);
//             SetActive('#AS_Image1_close', true);
//             SetActive('#AS_Image2', false);
//             SetActive('#AS_Image3', false);
//             SetActive('#AS_Image4', false);
//             SetActive('#AS_Image5', false);
//             SetActive('#AS_Image6', false);
//             SetActive('#AS_Image7', false);
//             SetActive('#AS_Image8', false);
//             break;
//
//         case 2:
//             SetOnClickListener('#AS_Image2', '');
//             SetPosition('#AS_Image2', 0, 1.7, -0.8);
//             SetActive('#AS_Image2_close', true);
//             SetActive('#AS_Image1', false);
//             SetActive('#AS_Image3', false);
//             SetActive('#AS_Image4', false);
//             SetActive('#AS_Image5', false);
//             SetActive('#AS_Image6', false);
//             SetActive('#AS_Image7', false);
//             SetActive('#AS_Image8', false);
//             break;
//
//         case 3:
//             SetOnClickListener('#AS_Image3', '');
//             SetPosition('#AS_Image3', 0, 1.7, -0.8);
//             SetActive('#AS_Image3_close', true);
//             SetActive('#AS_Image1', false);
//             SetActive('#AS_Image2', false);
//             SetActive('#AS_Image4', false);
//             SetActive('#AS_Image5', false);
//             SetActive('#AS_Image6', false);
//             SetActive('#AS_Image7', false);
//             SetActive('#AS_Image8', false);
//             break;
//
//         case 4:
//             SetOnClickListener('#AS_Image4', '');
//             SetPosition('#AS_Image4', 0, 1.7, -0.8);
//             SetActive('#AS_Image4_close', true);
//             SetActive('#AS_Image1', false);
//             SetActive('#AS_Image2', false);
//             SetActive('#AS_Image3', false);
//             SetActive('#AS_Image5', false);
//             SetActive('#AS_Image6', false);
//             SetActive('#AS_Image7', false);
//             SetActive('#AS_Image8', false);
//             break;
//
//         case 5:
//             SetOnClickListener('#AS_Image5', '');
//             SetPosition('#AS_Image5', 0, 1.7, -0.8);
//             SetActive('#AS_Image5_close', true);
//             SetActive('#AS_Image1', false);
//             SetActive('#AS_Image2', false);
//             SetActive('#AS_Image3', false);
//             SetActive('#AS_Image4', false);
//             SetActive('#AS_Image6', false);
//             SetActive('#AS_Image7', false);
//             SetActive('#AS_Image8', false);
//             break;
//
//         case 6:
//             SetOnClickListener('#AS_Image6', '');
//             SetPosition('#AS_Image6', 0, 1.7, -0.8);
//             SetActive('#AS_Image6_close', true);
//             SetActive('#AS_Image1', false);
//             SetActive('#AS_Image2', false);
//             SetActive('#AS_Image3', false);
//             SetActive('#AS_Image4', false);
//             SetActive('#AS_Image5', false);
//             SetActive('#AS_Image7', false);
//             SetActive('#AS_Image8', false);
//             break;
//
//         case 7:
//             SetOnClickListener('#AS_Image7', '');
//             SetPosition('#AS_Image7', 0, 1.7, -0.8);
//             SetActive('#AS_Image7_close', true);
//             SetActive('#AS_Image1', false);
//             SetActive('#AS_Image2', false);
//             SetActive('#AS_Image3', false);
//             SetActive('#AS_Image4', false);
//             SetActive('#AS_Image5', false);
//             SetActive('#AS_Image6', false);
//             SetActive('#AS_Image8', false);
//             break;
//
//         case 8:
//             SetOnClickListener('#AS_Image8', '');
//             SetPosition('#AS_Image8', 0, 1.7, -0.8);
//             SetActive('#AS_Image8_close', true);
//             SetActive('#AS_Image1', false);
//             SetActive('#AS_Image2', false);
//             SetActive('#AS_Image3', false);
//             SetActive('#AS_Image4', false);
//             SetActive('#AS_Image5', false);
//             SetActive('#AS_Image6', false);
//             SetActive('#AS_Image7', false);
//             break;
//
//     }
//     SetActive(i_click8cktId, false);
//     StopVO2(i_click8cktId);
//
// }
//
// function onclose_click(i) {
//
//     switch (i) {
//         case 1:
//             SetPosition('#AS_Image1', -0.7, 2.2, -2.5);
//             SetActive('#AS_Image1_close', false);
//             SetActive('#AS_Image2', true);
//             SetActive('#AS_Image3', true);
//             SetActive('#AS_Image4', true);
//             SetActive('#AS_Image5', true);
//             SetActive('#AS_Image6', true);
//             SetActive('#AS_Image7', true);
//             SetActive('#AS_Image8', true);
//             break;
//
//         case 2:
//             SetPosition('#AS_Image2', -0.1, 2.2, -2.5);
//             SetActive('#AS_Image2_close', false);
//             SetActive('#AS_Image1', true);
//             SetActive('#AS_Image3', true);
//             SetActive('#AS_Image4', true);
//             SetActive('#AS_Image5', true);
//             SetActive('#AS_Image6', true);
//             SetActive('#AS_Image7', true);
//             SetActive('#AS_Image8', true);
//             break;
//
//         case 3:
//             SetPosition('#AS_Image3', 0.5, 2.2, -2.5);
//             SetActive('#AS_Image3_close', false);
//             SetActive('#AS_Image1', true);
//             SetActive('#AS_Image2', true);
//             SetActive('#AS_Image4', true);
//             SetActive('#AS_Image5', true);
//             SetActive('#AS_Image6', true);
//             SetActive('#AS_Image7', true);
//             SetActive('#AS_Image8', true);
//             break;
//
//         case 4:
//             SetPosition('#AS_Image4', 1.1, 2.2, -2.5);
//             SetActive('#AS_Image4_close', false);
//             SetActive('#AS_Image1', true);
//             SetActive('#AS_Image2', true);
//             SetActive('#AS_Image3', true);
//             SetActive('#AS_Image5', true);
//             SetActive('#AS_Image6', true);
//             SetActive('#AS_Image7', true);
//             SetActive('#AS_Image8', true);
//             break;
//
//         case 5:
//             SetPosition('#AS_Image5', -0.7, 1.6, -2.5);
//             SetActive('#AS_Image5_close', false);
//             SetActive('#AS_Image1', true);
//             SetActive('#AS_Image2', true);
//             SetActive('#AS_Image3', true);
//             SetActive('#AS_Image4', true);
//             SetActive('#AS_Image6', true);
//             SetActive('#AS_Image7', true);
//             SetActive('#AS_Image8', true);
//             break;
//
//         case 6:
//             SetPosition('#AS_Image6', -0.1, 1.6, -2.5);
//             SetActive('#AS_Image6_close', false);
//             SetActive('#AS_Image1', true);
//             SetActive('#AS_Image2', true);
//             SetActive('#AS_Image3', true);
//             SetActive('#AS_Image4', true);
//             SetActive('#AS_Image5', true);
//             SetActive('#AS_Image7', true);
//             SetActive('#AS_Image8', true);
//             break;
//
//         case 7:
//             SetPosition('#AS_Image7', 0.5, 1.6, -2.5);
//             SetActive('#AS_Image7_close', false);
//             SetActive('#AS_Image1', true);
//             SetActive('#AS_Image2', true);
//             SetActive('#AS_Image3', true);
//             SetActive('#AS_Image4', true);
//             SetActive('#AS_Image5', true);
//             SetActive('#AS_Image6', true);
//             SetActive('#AS_Image8', true);
//             break;
//
//         case 8:
//             SetPosition('#AS_Image8', 1.1, 1.6, -2.5);
//             SetActive('#AS_Image8_close', false);
//             SetActive('#AS_Image1', true);
//             SetActive('#AS_Image2', true);
//             SetActive('#AS_Image3', true);
//             SetActive('#AS_Image4', true);
//             SetActive('#AS_Image5', true);
//             SetActive('#AS_Image6', true);
//             SetActive('#AS_Image7', true);
//             break;
//     }
//     SetActive(i_click8cktId, true, 0.1);
//     PlayVO2(i_click8cktId);
// }
//
// function on_allCktOk_click() {
//     SetActive('#AS_Image1', false);
//     SetActive('#AS_Image2', false);
//     SetActive('#AS_Image3', false);
//     SetActive('#AS_Image4', false);
//     SetActive('#AS_Image5', false);
//     SetActive('#AS_Image6', false);
//     SetActive('#AS_Image7', false);
//     SetActive('#AS_Image8', false);
//     SetActive('#AS_Redwwire_Final', true, 0.5);
//     SetActive('#AS_Bluewire_Final', true, 0.5);
//     SetActive('#AS_Greenwire_Final', true, 0.5);
//     SetActive(b_allCktOkId, false);
//     SetActive('#Q2_AS', true);
//     PlayVO2('#Q2_AS');
//     SetActive(i_click8cktId, false);
//
// }
//
// function q2_ok() {
//     ok_click();
//     SetActive('#Q2_AS', false);
//     SetActive('#Q3_AS', true);
//     PlayVO2('#Q3_AS');
// }
//
// function q3_ok() {
//     ok_click();
//     SetActive('#Q3_AS', false);
//     utility_changeText('#score_percent', getPercent() + " %");
//     SetActive('#p_comp_as', true);
//     PlayVO2('#p_comp_as');
// }
//
//
// function p_comp_as_click() {
//     SetActive(p_comp_asId, false);
//     SetActive(l_scoreId, false);
//
//     if (getPercent() >= 60) {
//         SetActive(p_greaterthanId, true);
//         PlayVO2(p_greaterthanId);
//     } else {
//         SetActive(p_lessthanId, true);
//         PlayVO2(p_lessthanId);
//     }
// }
//
//
// function p_lessthan_click() {
//     SetActive(p_lessthanId, false);
//     GoToMainMenu();
// }
//
//
// function p_greaterthan_click() {
//     SetActive(p_greaterthanId, false);
//     GoToMainMenu();
// }
