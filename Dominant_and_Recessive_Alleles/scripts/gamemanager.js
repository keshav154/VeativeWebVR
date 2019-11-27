///___________________  MainMenu Functions
var i_ToggleLabelInsId = '#i_ToggleLabelIns';
var i_ToggleLabelIns2Id = '#i_ToggleLabelIns2';
var i_ToggleLabelIns3Id = '#i_ToggleLabelIns3';
var i_ToggleLabelIns4Id = '#i_ToggleLabelIns4';
var i_ToggleLabelIns5Id = '#i_ToggleLabelIns5';
var i_ToggleLabelIns6Id = '#i_ToggleLabelIns6';
var i_ToggleLabelIns7Id = '#i_ToggleLabelIns7';
var i_ToggleLabelIns8Id = '#i_ToggleLabelIns8';
var i_ToggleLabelIns9Id = '#i_ToggleLabelIns9';
var i_ToggleLabelIns10Id = '#i_ToggleLabelIns10';

var borderHighlight0_lvl1Id = '#BorderHighlight0_lvl1';
var borderHighlight_lvl1Id = '#BorderHighlight_lvl1';
var borderHighlight2_lvl1Id = '#BorderHighlight2_lvl1';

var highlight1Id = '#Highlight1';
var highlight2Id = '#Highlight2';
var highlight3Id = '#Highlight3';
var highlight4Id = '#Highlight4';
var highlight5Id = '#Highlight5';
var highlight6Id = '#Highlight6';
var highlight7Id = '#Highlight7';
var highlight8Id = '#Highlight8';
var highlight9Id = '#Highlight9';
var highlight10Id = '#Highlight10';
var highlight11Id = '#Highlight11';
var highlight12Id = '#Highlight12';
var highlight13Id = '#Highlight13';

var crosslvl1Id = '#Crosslvl1';
var arrowLeftlvl1Id ='#ArrowLeftlvl1';
var arrowRightlvl1Id ='#ArrowRightlvl1';
var plantchild1lvl1Id = '#PlantChild1lvl1';
var plantchild2lvl1Id = '#PlantChild2lvl1';
var plantchild3lvl1Id = '#PlantChild3lvl1';
var plantchild4lvl1Id = '#PlantChild4lvl1';
var label_Parentslvl1Id = '#p_Parents';
var label_Offspringlvl1Id = '#p_Offspring';
var label_TTlvl1Id = '#label_TT';
var label1_ttId = '#label1_tt';

var label2_TtId = '#label2_Tt';
var label3_TtId = '#label3_Tt';
var label4_TtId = '#label4_Tt';
var label5_TtId = '#label5_Tt';

var p_InstructionPanel2Id = '#p_InstructionPanel2';

var arrowRight1lvlAsId = '#ArrowRight1lvlAs';
var arrowRight2lvlAsId = '#ArrowRight2lvlAs';
var arrowRight3lvlAsId = '#ArrowRight3lvlAs';
var arrowRight4lvlAsId = '#ArrowRight4lvlAs';
var arrowLeft1lvlAsId = '#ArrowLeft1lvlAs';
var arrowLeft2lvlAsId = '#arrowLeft2lvlAs';
var arrowLeft3lvlAsId = '#ArrowLeft3lvlAs';
var arrowLeft4lvlAsId = '#ArrowLeft4lvlAs';
var plantRed1lvlAsId = '#PlantRed1lvlAs';
var crosslvlAsId = '#CrosslvlAs';
var whitePlantlvlAs = '#WhitePlantlvlAs';
var plantchild1lvlAsId = '#PlantChild1lvlAs';
var plantchild2lvlAsId = '#PlantChild2lvlAs';
var plantchild3lvlAsId = '#PlantChild3lvlAs';
var plantchild4lvlAsId = '#PlantChild4lvlAs';
var p_ParentsAs = '#p_ParentsAs';
var p_OffspringAs = '#p_OffspringAs';
var l_scoreId = '#l_score';

var p_DominantAlleleId ='#p_DominantAllele';
var p_RecessiveAlleleId ='#p_RecessiveAllele';


var p_GenotypeId = '#p_Genotype';
var p_Genotype2Id = '#p_Genotype2';

var p_PPId = '#p_PP';
var p2_ppId = '#p2_pp';
var p3_PpId = '#p3_Pp';
var p4_PpId = '#p4_Pp';
var p5_PpId = '#p5_Pp';
var p6_PpId = '#p6_Pp';

var p_DefinitionPanelId ='#p_DefinitionPanel';
var b_LabelOnId='#b_LabelOn';
var label_ScaleId='#label_Scale';
var label_NeedleId='#label_Needle';

var p_completeL1Id = '#p_completeLvl1';

var p_InstructionPanel1Id = '#p_InstructionPanel1';
var p_InstructionPanel2Id = '#p_InstructionPanel2';
var p_InstructionPanel3Id = '#p_InstructionPanel3';
var p_InstructionPanel4Id = '#p_InstructionPanel4';
var p_InstructionPanel5Id = '#p_InstructionPanel5';
var p_InstructionPanel6Id = '#p_InstructionPanel6';
var p_InstructionPanel7Id = '#p_InstructionPanel7';
var p_InstructionPanel8Id = '#p_InstructionPanel8';

var c_Inst_ActivityCompleteId = '#C_Inst_ActivityComplete';

var clickCount =0;

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
    PlayVO2(p_InstructionPanel1Id);

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
    StopVO2('#p_objective');
    PlayVO2(p_InstructionPanel1Id);
}
///___________________  Level_1 Functions


function p_Definationpnl_OKclick()
{
  PlayVO2(p_InstructionPanel1);
  SetActive(borderHighlight0_lvl1Id,false);
  SetActive(borderHighlight_lvl1Id,true);
  SetActive(i_ToggleLabelInsId,true,0.1);
  SetActive(p_InstructionPanel1Id,false);
  SetActive(b_LabelOnId,true);
  PlayVO2(i_ToggleLabelInsId);
  SetActive(highlight1Id,true);
  SetOnClickListener('#PlantRed1lvl1','onClickPlant(1)');


  PlayVO2(i_ToggleLabelInsId);
}



function onClickPlant(n)
{
  switch (n) {
    case 1:
      var a = document.querySelector('#PlantRed1lvl1');
      a.setAttribute('animation__movepos', 'enabled', 'true');
      SetActive(highlight1Id,false);
      SetActive(i_ToggleLabelInsId,false,0.1);
      // SetActive(i_ToggleLabelIns2Id,true,0.1);
      setTimeout(activeSecondChildPlant,2500);
      // SetActive(highlight2Id,true);
      //   PlayVO2(i_ToggleLabelIns2Id);

    break;

    case 2:
      var a = document.querySelector('#PlantRed2lvl1');
      a.setAttribute('animation__movepos', 'enabled', 'true');
      SetActive(highlight2Id,false);
      setTimeout(activateCross,2500);
      // PlayVO2(i_ToggleLabelIns3Id);

      break;

  }
  setTimeout(afterAnim,2000);
}

function afterAnim()
{
  var a = document.querySelector('#PlantRed1lvl1');
  a.setAttribute('animation__movepos', 'enabled', 'false');
  var a = document.querySelector('#PlantRed2lvl1');
  a.setAttribute('animation__movepos', 'enabled', 'false');


}


function activeSecondChildPlant()
{
  SetOnClickListener('#PlantRed2lvl1','onClickPlant(2)');
  SetActive(highlight2Id,true);
    PlayVO2(i_ToggleLabelIns2Id);
      SetActive(i_ToggleLabelIns2Id,true,0.1);
}

function activateCross()

{
  PlayVO2(i_ToggleLabelIns3Id);
SetActive(borderHighlight_lvl1Id,false);
SetActive(borderHighlight2_lvl1Id,true);
var b = document.querySelector('#BorderHighlight_lvl1');
b.setAttribute('highlightBox','enabled','false');
SetActive(label_Parentslvl1Id,true);
SetActive(crosslvl1Id,true);
SetActive(highlight3Id,true);
SetActive(i_ToggleLabelIns2Id,false,0.1);
SetActive(i_ToggleLabelIns3Id,true,0.1);

}


function onClickCross()

{
  SetOnClickListener('#crosslvl1','');
  SetActive('#label_Parents',true);
  SetActive(i_ToggleLabelIns3Id,false,0.1);
  SetActive(arrowLeftlvl1Id,true,0.2);
  SetActive(arrowRightlvl1Id,true,0.2);
  SetActive(highlight3Id,false);
  var a = document.querySelector(arrowLeftlvl1Id);
  a.setAttribute('animation__movepos', 'enabled', 'true');
  var a = document.querySelector(arrowRightlvl1Id);
  a.setAttribute('animation__movepos', 'enabled', 'true');
  setTimeout(plantChildmove,1000);
}

function plantChildmove()
{
  SetActive(plantchild1lvl1Id,true);
  var a = document.querySelector(plantchild1lvl1Id);
  a.setAttribute('animation__movepos', 'enabled', 'true');
  setTimeout(afterAnimation,2000);
}

function afterAnimation()
{
  var a = document.querySelector(plantchild1lvl1Id);
  a.setAttribute('animation__movepos', 'enabled', 'false');
moveChild2();

}

function moveChild2()
{
  SetActive(plantchild2lvl1Id,true);
  var a = document.querySelector(plantchild2lvl1Id);
  a.setAttribute('animation__movepos', 'enabled', 'true');
  setTimeout(afterAnimation2,2000);
}

function afterAnimation2()
{
  var a = document.querySelector(plantchild2lvl1Id);
  a.setAttribute('animation__movepos', 'enabled', 'false');
moveChild3();

}


function moveChild3()
{
  SetActive(plantchild3lvl1Id,true);
  var a = document.querySelector(plantchild3lvl1Id);
  a.setAttribute('animation__movepos', 'enabled', 'true');
  setTimeout(afterAnimation3,2000);
  setTimeout(afterAnimationArrow,2000);
}

function afterAnimation3()
{
  var a = document.querySelector(plantchild3lvl1Id);
  a.setAttribute('animation__movepos', 'enabled', 'false');
moveChild4();

}

function moveChild4()
{
  SetActive(plantchild4lvl1Id,true);
  var a = document.querySelector(plantchild4lvl1Id);
  a.setAttribute('animation__movepos', 'enabled', 'true');
  setTimeout(afterAnimation4,2000);


}

function afterAnimation4()
{
  var a = document.querySelector(plantchild4lvl1Id);
  a.setAttribute('animation__movepos', 'enabled', 'false');

}

function afterAnimationArrow()
{
  var a = document.querySelector(arrowLeftlvl1Id);
  a.setAttribute('animation__movepos', 'enabled', 'false');
  var a = document.querySelector(arrowRightlvl1Id);
  a.setAttribute('animation__movepos', 'enabled', 'false');
setTimeout(activeOffspringpanel,1500);

}


function activeOffspringpanel()
{
  SetActive(label_Offspringlvl1Id,true);
  SetActive(p_InstructionPanel2Id,true);
  PlayVO2(p_InstructionPanel2Id);

}


function Onclickbtn_ok2()
{
  SetActive(i_ToggleLabelIns4Id,true,0.1);
  SetActive(p_InstructionPanel2Id,false);
  SetActive(highlight4Id,true);
  SetOnClickListener('#highlight4','OnclickHighlight4()');
  PlayVO2(i_ToggleLabelIns4Id);

}

function OnclickHighlight4()
{
  SetActive(p_InstructionPanel3Id,true);
  SetActive(i_ToggleLabelIns4Id,false,0.1);
  SetActive(label_TTlvl1Id,true);
  SetActive(highlight4Id,false);
  PlayVO2(p_InstructionPanel3Id);
  SetOnClickListener('#highlight4','');

}

function Onclickbtn_ok3()
{
  StopVO2(p_InstructionPanel3Id);
  PlayVO2(i_ToggleLabelIns5Id);
  SetActive(highlight5Id,true);
  SetActive(i_ToggleLabelIns5Id,true,0.1);
  SetActive(p_InstructionPanel3Id,false);
  SetActive(highlight5Id,true);
  SetOnClickListener('#highlight5','OnclickHighlight5()');
}

function OnclickHighlight5()
{
PlayVO2(p_InstructionPanel4Id);
  SetActive(highlight5Id,false);
  SetActive(i_ToggleLabelIns5Id,false,0.1);
  SetActive(label1_ttId,true);
  SetActive(p_InstructionPanel4Id,true);
  SetOnClickListener('#highlight5','');
}

function Onclickbtn_ok4()
{
  SetOnClickListener('#PlantChild1lvl1','Onclickchildplant()');
  SetOnClickListener('#PlantChild2lvl1','Onclickchildplant()');
  SetOnClickListener('#PlantChild3lvl1','Onclickchildplant()');
  SetOnClickListener('#PlantChild4lvl1','Onclickchildplant()');
  PlayVO2(i_ToggleLabelIns6Id);
  SetActive(i_ToggleLabelIns6Id,true,0.1);
  SetActive(p_InstructionPanel4Id,false);

}

function Onclickchildplant()
{
SetOnClickListener('#PlantChild1lvl1','');
SetOnClickListener('#PlantChild2lvl1','');
SetOnClickListener('#PlantChild3lvl1','');
SetOnClickListener('#PlantChild4lvl1','');
  PlayVO2(p_InstructionPanel5Id);
  SetActive(label2_TtId,true);
  SetActive(label3_TtId,true);
  SetActive(label4_TtId,true);
  SetActive(label5_TtId,true);
  SetActive(p_InstructionPanel5Id,true);
  SetActive(i_ToggleLabelIns6Id,false,0.1);

}

function Onclickbtn_ok5()
{
  PlayVO2(p_InstructionPanel6Id);
  SetActive(p_InstructionPanel6Id,true);
  SetActive(p_InstructionPanel5Id,false);
}


function Onclickbtn_ok6()
{
  PlayVO2(p_completeL1Id);  // a
  SetActive(p_InstructionPanel6Id,false);
  SetActive(p_completeL1Id,true);
  SetActive(label2_TtId,false);
  SetActive(label3_TtId,false);
  SetActive(label4_TtId,false);
  SetActive(label5_TtId,false);
  SetActive(label1_ttId,false);
  SetActive(label_TTlvl1Id,false);

  SetActive(label_Parentslvl1Id,false);

  SetActive(plantchild1lvl1Id,false);
  SetActive(plantchild2lvl1Id,false);
  SetActive(plantchild3lvl1Id,false);
  SetActive(plantchild4lvl1Id,false);
  SetActive(crosslvl1Id,false);
  SetActive(arrowLeftlvl1Id,false);
  SetActive(arrowRightlvl1Id,false);
  SetActive(borderHighlight_lvl1Id,false);

  SetActive('#PlantRed1lvl1',false);
  SetActive('#PlantRed2lvl1',false);
  SetActive(label_Offspringlvl1Id,false);
  SetActive(borderHighlight2_lvl1Id,false);


}

function onClickCmpletelvl1()
{
  SetActive(p_completeL1Id,false);
  SetActive('#MainMenu', false);
  SetActive('#AS', true);
  PlayVO2(p_score_instId);
}


///___________________  Level_1 Functions renderer

///___________________  Level_AS Functions

function Button_clickAs1()
{
PlayVO2(p_InstructionPanel8Id);
SetActive(p_InstructionPanel8Id,true);
SetActive(p_InstructionPanel7Id,false);

}


function Button_clickAs2()
{
SetActive(p_InstructionPanel8Id,false);
SetActiveArrow(arrowRight1lvlAsId,true,0.1,0.1,0.9);
SetActiveArrow(arrowRight2lvlAsId,true,0.1,0.1,0.6);
SetActiveArrow(arrowRight3lvlAsId,true,0.1,0.1,0.38);
SetActiveArrow(arrowRight4lvlAsId,true,0.1,0.1,0.30);
SetActiveArrow(arrowLeft1lvlAsId,true,0.1,0.1,0.9);
SetActiveArrow(arrowLeft2lvlAsId,true,0.1,0.1,0.6);
SetActiveArrow(arrowLeft3lvlAsId,true,0.1,0.1,0.38);
SetActiveArrow(arrowLeft4lvlAsId,true,0.1,0.1,0.30);
SetActive(plantRed1lvlAsId,true,0.2);
SetActive(crosslvlAsId,true);
SetActive(whitePlantlvlAs,true,0.1);
SetActive(plantchild1lvlAsId,true);
SetActive(plantchild2lvlAsId,true);
SetActive(plantchild3lvlAsId,true);
SetActive(plantchild4lvlAsId,true);
SetActive(p_ParentsAs,true);
SetActive(p_OffspringAs,true);
SetActive(l_scoreId,true,0.1);
onClickOkAfterQ(1);
}




///___________________  Level_AS Questions


function onClickOkAfterQ(c)
{


 switch (c)
 {
   case 1:

   PlayVO2(i_ToggleLabelIns7Id);
   SetActive(i_ToggleLabelIns7Id,true,0.1);


   SetOnClickListener('#WhitePlantlvlAs','onClickWrongOption(1);');
   SetOnClickListener('#PlantRed1lvlAs','onClickRightOption(1);');
   SetOnClickListener('#PlantChild1lvlAs','onClickRightOption(1);');
   SetOnClickListener('#PlantChild2lvlAs','onClickRightOption(1);');
   SetOnClickListener('#PlantChild3lvlAs','onClickRightOption(1);');
   SetOnClickListener('#PlantChild4lvlAs','onClickRightOption(1);');

   break;

   case 2:

   PlayVO2(i_ToggleLabelIns8Id);
   SetActive(i_ToggleLabelIns8Id,true,0.1);

   SetOnClickListener('#WhitePlantlvlAs',"onClickRightOption(2);");
   SetOnClickListener('#PlantRed1lvlAs','onClickWrongOption(2);');
   SetOnClickListener('#PlantChild1lvlAs','onClickWrongOption(2);');
   SetOnClickListener('#PlantChild2lvlAs','onClickWrongOption(2);');
   SetOnClickListener('#PlantChild3lvlAs','onClickWrongOption(2);');
   SetOnClickListener('#PlantChild4lvlAs','onClickWrongOption(2);');
   break;

   case 3:
   PlayVO2(i_ToggleLabelIns9Id);
   SetActive(i_ToggleLabelIns9Id,true,0.1);
   SetActive(p_DominantAlleleId,true);
   SetActive(p_GenotypeId,true);
  SetActive(p_Genotype2Id,true);
    SetActive(p_PPId,true);
SetActive(p2_ppId,true);
SetActive(p3_PpId,true);
SetActive(p4_PpId,true);
SetActive(p5_PpId,true);
SetActive(p6_PpId,true);
SetOnClickListener('#btn_ap1','onClickWrongOption(3);');
     SetOnClickListener('#btn_P1','onClickRightOption(3);');
   break;

   case 4:
   SetActive(p_DominantAlleleId,false);
   PlayVO2(i_ToggleLabelIns10Id);
   SetActive(i_ToggleLabelIns10Id,true,0.1);
   SetActive(p_RecessiveAlleleId,true);
   SetOnClickListener('#btn_bP2',"onClickWrongOption(4);");
   SetOnClickListener('#btn_cp2','onClickRightOption(4);');
   break;
}
}

///___________________  Level_AS Questions End

function disablehighlight()
{
  SetActive(highlight6Id,false);
  SetActive(highlight7Id,false);
  SetActive(highlight8Id,false);
  SetActive(highlight9Id,false);
  SetActive(highlight10Id,false);
  SetActive(highlight11Id,false);
  SetActive(highlight12Id,false);
  SetActive(highlight13Id,false);
}

function disablewelldonetryagain()
{
  SetActive('#i_welldone',false);
  SetActive('#i_tryagain',false);
}



///___________________  Level_AS onClickRightOption

var attempt=0;

function onClickRightOption(h)
{
  attempt++;
switch(h)
{
case 1:

  SetOnClickListener('#WhitePlantlvlAs','');
  SetOnClickListener('#PlantRed1lvlAs','');
  SetOnClickListener('#PlantChild1lvlAs','');
  SetOnClickListener('#PlantChild2lvlAs','');
  SetOnClickListener('#PlantChild3lvlAs','');
  SetOnClickListener('#PlantChild4lvlAs','');
  SetActive(i_ToggleLabelIns7Id,false,0.1);
  SetActive(highlight6Id,true);
  SetActive(highlight7Id,true);
  SetActive(highlight8Id,true);
  SetActive(highlight9Id,true);
  SetActive(highlight10Id,true);
  SetActive('#i_welldone',true,0.1);
  PlayVO2('#i_welldone');
  setTimeout(disablehighlight,2500);
  setTimeout(disablewelldonetryagain,2500);
  addScore(1,attempt);
  setTimeout('onClickOkAfterQ(2)',2500);
  break;

case 2:

  SetOnClickListener('#WhitePlantlvlAs','');
  SetOnClickListener('#PlantRed1lvlAs','');
  SetOnClickListener('#PlantChild1lvlAs','');
  SetOnClickListener('#PlantChild2lvlAs','');
  SetOnClickListener('#PlantChild3lvlAs','');
  SetOnClickListener('#PlantChild4lvlAs','');
  addScore(2,attempt);
  SetActive(i_ToggleLabelIns8Id,false,0.1);
  SetActive('#i_welldone',true,0.1);
  PlayVO2('#i_welldone');
  setTimeout(disablewelldonetryagain,2500);
  setTimeout('onClickOkAfterQ(3)',2500);
  break;

case 3:
  SetOnClickListener('#btn_ap1','');
  SetOnClickListener('#btn_P1','');
  addScore(3,attempt);
  SetActive(p_DominantAlleleId,false);
  SetActive(i_ToggleLabelIns9Id,false,0.1);
  SetActive('#i_welldone',true,0.1);
  PlayVO2('#i_welldone');
  setTimeout(disablewelldonetryagain,2500);
  setTimeout('onClickOkAfterQ(4)',2500);
  break;


case 4:
  SetOnClickListener('#btn_bP2',"");
  SetOnClickListener('#btn_cp2','');
  addScore(4,attempt);
  SetActive(i_ToggleLabelIns10Id,false,0.1);
  SetActive('#i_welldone',true,0.1);
  PlayVO2('#i_welldone');
  setTimeout(disablewelldonetryagain,2500);
  setTimeout(enablePercent,2500);
  break;

}
  attempt=0;
}
///___________________  Level_AS onClickRightOption over


///___________________  Level_AS onClickWrongOption

function onClickWrongOption(m)
{
  attempt++;
  switch(m)
  {
  case 1:
  SetOnClickListener('#WhitePlantlvlAs','');
  SetOnClickListener('#PlantRed1lvlAs','');
  SetOnClickListener('#PlantChild1lvlAs','');
  SetOnClickListener('#PlantChild2lvlAs','');
  SetOnClickListener('#PlantChild3lvlAs','');
  SetOnClickListener('#PlantChild4lvlAs','');
  SetActive(i_ToggleLabelIns7Id,false,0.1);
  SetActive('#i_tryagain',true,0.1);
  PlayVO2('#i_tryagain');
  setTimeout(disablewelldonetryagain,2500);
  setTimeout('autoCorrect(1)',2500);
  break;

  case 2:
  SetOnClickListener('#WhitePlantlvlAs','');
  SetOnClickListener('#PlantRed1lvlAs','');
  SetOnClickListener('#PlantChild1lvlAs','');
  SetOnClickListener('#PlantChild2lvlAs','');
  SetOnClickListener('#PlantChild3lvlAs','');
  SetOnClickListener('#PlantChild4lvlAs','');
  SetActive('#i_tryagain',true,0.1);
  PlayVO2('#i_tryagain');
  setTimeout(disablewelldonetryagain,2500);
  setTimeout('autoCorrect(2)',2500);
  break;

  case 3:

  SetOnClickListener('#btn_ap1','');
  SetOnClickListener('#btn_P1','');
  SetActive('#i_tryagain',true,0.1);
  PlayVO2('#i_tryagain');
  setTimeout(disablewelldonetryagain,2500);
  setTimeout('autoCorrect(3)',2500);
  break;


  case 4:
  SetOnClickListener('#btn_bP2',"");
  SetOnClickListener('#btn_cp2','');
  SetActive(i_ToggleLabelIns10Id,false,0.1);
  SetActive('#i_tryagain',true,0.1);
  PlayVO2('#i_tryagain');
  setTimeout(disablewelldonetryagain,2500);
  setTimeout('autoCorrect(4)',2500);
  break;
  }




}



///___________________  Level_AS Autocorrect




function autoCorrect(k)
{
  switch(k)
  {
  case 1:
  SetActive(i_ToggleLabelIns7Id,false,0.1);
  SetActive(highlight6Id,true);
  SetActive(highlight7Id,true);
  SetActive(highlight8Id,true);
  SetActive(highlight9Id,true);
  SetActive(highlight10Id,true);
  PlayVO2('#i_correctresponse');
  setTimeout(disablehighlight,2500);
  setTimeout(disablewelldonetryagain,2500);
  setTimeout('onClickOkAfterQ(2)',2500);
  addScore(1,4)

  break;

  case 2:
  PlayVO2('#i_correctresponse');
  SetActive(highlight11Id,true);
  SetActive(i_ToggleLabelIns8Id,false,0.1);
  setTimeout(disablehighlight,2500);
  setTimeout(disablewelldonetryagain,2500);
  setTimeout('onClickOkAfterQ(3)',2500);
  break;

  case 3:
  PlayVO2('#i_correctresponse');
  SetActive(i_ToggleLabelIns9Id,false,0.1);
  SetActive(highlight12Id,true);
  SetPosition(highlight12Id,3.738, 2.075, -3.264);
  setTimeout(disablehighlight,2500);
  setTimeout(disablewelldonetryagain,2500);
  setTimeout('onClickOkAfterQ(4)',2500);

  break;


  case 4:
  PlayVO2('#i_correctresponse');
  SetActive(highlight13Id,true);
  SetPosition(highlight13Id,3.650, 1.543, -3.166);
  setTimeout(disablehighlight,2500);
  SetActive(i_ToggleLabelIns10Id,false,0.1);
  setTimeout(disablewelldonetryagain,2500);
  setTimeout(enablePercent,2500);
  break;
  }
  attempt=0;
  }

function enablePercent()
{
  utility_changeText('#score_percent', getPercent() + " %");
  SetActive('#p_comp_as', true);
  PlayVO2('#p_comp_as');
  SetActiveArrow(arrowRight1lvlAsId,false);
  SetActiveArrow(arrowRight2lvlAsId,false);
  SetActiveArrow(arrowRight3lvlAsId,false);
  SetActiveArrow(arrowRight4lvlAsId,false);
  SetActiveArrow(arrowLeft1lvlAsId,false);
  SetActiveArrow(arrowLeft2lvlAsId,false);
  SetActiveArrow(arrowLeft3lvlAsId,false);
  SetActiveArrow(arrowLeft4lvlAsId,false);
  SetActive(plantRed1lvlAsId,false);
  SetActive(crosslvlAsId,false);
  SetActive(whitePlantlvlAs,false);
  SetActive(plantchild1lvlAsId,false);
  SetActive(plantchild2lvlAsId,false);
  SetActive(plantchild3lvlAsId,false);
  SetActive(plantchild4lvlAsId,false);
  SetActive(p_ParentsAs,false);
  SetActive(p_OffspringAs,false);
  SetActive(i_ToggleLabelIns9Id,false);
  SetActive(p_DominantAlleleId,false);
  SetActive(p_GenotypeId,false);
  SetActive(p_Genotype2Id,false);
  SetActive(p_PPId,false);
  SetActive(p2_ppId,false);
  SetActive(p3_PpId,false);
  SetActive(p4_PpId,false);
  SetActive(p5_PpId,false);
  SetActive(p6_PpId,false);
  SetActive(p_RecessiveAlleleId,false);
}


function p_comp_as_click()
{
    SetActive(p_comp_asId, false);
    SetActive(l_scoreId, false);

    if (getPercent() >= 60) {
        SetActive(p_greaterthanId, true);
        PlayVO2(p_greaterthanId);
    }
    else {
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
