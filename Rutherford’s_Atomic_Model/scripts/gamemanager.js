///___________________  MainMenu Functions

var i_ClickOnAllPart_Lvl1Id = '#i_ClickOnAllPart_Lvl1';
var p_HereWeHave_Lvl1Id='#p_HereWeHave_Lvl1';
var heNucleus_Lvl1Id ='#HeNucleus_Lvl1';
var p_anAtomConsist_Lvl1Id ='#p_anAtomConsist_Lvl1';
var p_theElectronsAre_Lvl1Id='#p_theElectronsAre_Lvl1';
var p_ActivityComplete_Lvl1Id = '#p_ActivityComplete_Lvl1';
var btn_outside1Id='#btn_outside1';
var btn_outside2Id='#btn_outside2';
var btn_outside3Id='#btn_outside3';
var btn_outside4Id='#btn_outside4';
var heNucleus_Lvl1_2Id='#HeNucleus_Lvl1_2';
var neucleus_l1Id='#Neucleus_l1';
var l_scoreId = '#l_score';
var p_score_instId = '#p_score_inst';
var i_AS_Lvl1Id='#i_AS_Lvl1'
var as_ModelCarbonShellId='#AS_ModelCarbonShell';
var as_ModelCarbonId='#AS_ModelCarbon';
var as_ModelCjjId='#AS_ModelCjj';
var as_ModelQuantumOrbitalId='#AS_ModelQuantumOrbital';
var q1aHighlId='#q1cHighl';
var q1bHighlId='#q1bHighl';
var q1cHighlId='#q1aHighl';
var q1dHighlId='#q1dHighl';



//Q2 All Models

var as_ModelCarbonShellL2Id='#AS_ModelCarbonShellL2';
var as_ModelCarbonL2Id='#AS_ModelCarbonL2';
var as_ModelCjjL2Id='#AS_ModelCjjL2';
var as_ModelQuantumOrbitalL2Id='#AS_ModelQuantumOrbitalL2';

var  i_selectTheMgStruc_ASId ='#i_selectTheMgStruc_AS';



var q1aHighlL2Id='#q1cHighlL2';
var q1bHighlL2Id='#q1bHighlL2';
var q1cHighlL2Id='#q1aHighlL2';
var q1dHighlL2Id='#q1dHighlL2';
var rutherMgId ='#rutherMg';

var btn_okAutoCorrectId='#btn_okAutoCorrect';
var btn_okAutoCorrectL2Id='#btn_okAutoCorrectL2';

var p_comp_asId='#p_comp_as';
var p_lessthanId='#p_lessthan';
var p_greaterthanId= '#p_greaterthan';


var userattempt=0;
var wrongAttempt =0;


//-------------Main Menu Scene-----------------------//

function OnClickObjective() {
    SetActive('#MainMenu', false);
    SetActive('#LO', true);
    PlayVO2('#p_objective');
}

function OnClickL1() {
    SetActive('#MainMenu', false);
    SetActive('#L1', true);
    SetActive(heNucleus_Lvl1Id,true,0.1);
    SetActive(heNucleus_Lvl1_2Id,true,0.1);
    PlayVO2(p_HereWeHave_Lvl1Id);
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
    SetActive(heNucleus_Lvl1Id,true,0.1);
    SetActive(heNucleus_Lvl1_2Id,true,0.1);
    PlayVO2(p_HereWeHave_Lvl1Id);
}



///___________________  Level_1 Functions

function Ok_ClickOnAllPart()
{
  SetActive(p_HereWeHave_Lvl1Id,false);
  SetActive(i_ClickOnAllPart_Lvl1Id,true,0.1);
  SetOnClickListener(heNucleus_Lvl1Id, 'onClickBeyondNucleus();');
  SetOnClickListener(heNucleus_Lvl1_2Id,'onClickBeyondNucleus();');
  SetOnClickListener(btn_outside1Id,'onClickBeyondNucleus();');
  SetOnClickListener(btn_outside2Id,'onClickBeyondNucleus();');
  SetOnClickListener(btn_outside3Id,'onClickBeyondNucleus();');
  SetOnClickListener(btn_outside4Id,'onClickBeyondNucleus();');
  SetOnClickListener(neucleus_l1Id,'onClickNucleus();');
  PlayVO2(i_ClickOnAllPart_Lvl1Id);
}

function onClickNucleus()
{
  SetActive(p_anAtomConsist_Lvl1Id,true);
  SetActive(i_ClickOnAllPart_Lvl1Id,false);
  SetActive(p_theElectronsAre_Lvl1Id,false);
  SetOnClickListener(heNucleus_Lvl1Id, '');
  SetOnClickListener(heNucleus_Lvl1_2Id,'');
  PlayVO2(p_anAtomConsist_Lvl1Id);

}

function onClickBeyondNucleus()
{
  SetActive(p_theElectronsAre_Lvl1Id,true);
  PlayVO2(p_theElectronsAre_Lvl1Id);
  SetActive(i_ClickOnAllPart_Lvl1Id,false);

}

function click_anAtomConsist_OK()
{
  SetActive(p_anAtomConsist_Lvl1Id,false);
  SetActive(p_ActivityComplete_Lvl1Id,true);
  PlayVO2(p_ActivityComplete_Lvl1Id);
}

function click_theElectronsAre_OK()
{
  SetActive(p_theElectronsAre_Lvl1Id,false);
  SetActive(i_ClickOnAllPart_Lvl1Id,true,0.1);
  PlayVO2(i_ClickOnAllPart_Lvl1Id);
}

function click_ActivityComplete_OK()
{
  SetActive(p_ActivityComplete_Lvl1Id,false);
  SetActive('#L1', false);
  SetActive('#AS', true);
  SetActive('#MainMenu', false);
   PlayVO2(p_score_instId);
}


//----------------Assess your knowledge ------------------------//

function onClick_ScoreOK()
{
  SetActive(p_score_instId,false);
  SetActive(as_ModelCarbonShellId,true,0.15);
  SetActive(as_ModelCarbonId,true,0.1);
  SetActive(as_ModelCjjId,true,0.5);
  SetActive(as_ModelQuantumOrbitalId,true,0.5);
  AnimationMixerPlay(as_ModelCarbonShellId);
  AnimationMixerPlay(as_ModelCarbonId);
  SetActive(i_AS_Lvl1Id,true,0.1);
  SetActive(l_scoreId,true,0.1);
  PlayVO2(i_AS_Lvl1Id);

}



function onClickModel1Q1()
{
  //Right answer
    userattempt++;
    addScore(1,userattempt);
    SetActive(q1aHighlId,true);
    PlayVO2(as_ModelCjjId);
    SetOnClickListener(as_ModelCarbonShellId,'');
    SetOnClickListener(as_ModelCarbonId,'');
    SetOnClickListener(as_ModelCjjId,'');
    SetOnClickListener(as_ModelQuantumOrbitalId,'');
    userattempt=0;
    wrongAttempt =0;
    SetActive(i_AS_Lvl1Id,false);
    setTimeout(onClick_OkQ1,6000);

}


function onClickModel2Q1()
{
  //wrong answer
    userattempt++;
    wrongAttempt++;
    autoCorrectQ1();
    SetActive(q1bHighlId,true);
    PlayVO2(as_ModelCarbonId);
    SetOnClickListener(as_ModelCarbonId,'');

}

function onClickModel3Q1()
{
  //wrong answer
    userattempt++;
    wrongAttempt++;
    autoCorrectQ1();
    SetActive(q1cHighlId,true);
    PlayVO2(as_ModelQuantumOrbitalId);
    SetOnClickListener(as_ModelCjjId,'');

}

function onClickModel4Q1()
{
  //wrong answer
    userattempt++;
    wrongAttempt++;
    autoCorrectQ1();
    SetActive(q1dHighlId,true);
    PlayVO2(as_ModelCarbonShellId);
    SetOnClickListener(as_ModelQuantumOrbitalId,'');
}

function autoCorrectQ1()
{
  //Auto correct
  if(wrongAttempt>2)
  {
    userattempt++;
    addScore(1,userattempt);
    wrongAttempt=0;
    userattempt=0;
    SetActive(i_AS_Lvl1Id,false);
    SetOnClickListener(as_ModelCarbonShellId,'');
    SetOnClickListener(as_ModelCarbonId,'');
    SetOnClickListener(as_ModelCjjId,'');
    SetOnClickListener(as_ModelQuantumOrbitalId,'');
    setTimeout(startCorrection,5000);
  }
  else
  {
     return;
  }

}

function startCorrection()
{
    SetActive(q1aHighlId,true);
    PlayVO2('#btn_okAutoCorrectL2');
    SetActive(btn_okAutoCorrectId,true);
}




// AS Question 2 Code


 function onClick_OkQ1()
{
  SetActive(btn_okAutoCorrectId,false);

  SetActive(as_ModelCarbonShellId,false);
  SetActive(as_ModelCarbonId,false);
  SetActive(as_ModelCjjId,false);
  SetActive(as_ModelQuantumOrbitalId,false);

  SetActive(as_ModelCarbonShellL2Id,true,0.15);
  SetActive(as_ModelCarbonL2Id,true,0.1);
  SetActive(as_ModelCjjL2Id,true,0.5);
  SetActive(as_ModelQuantumOrbitalL2Id,true,0.5);

  AnimationMixerPlay(as_ModelCarbonShellL2Id);
  AnimationMixerPlay(as_ModelCarbonL2Id);
  SetActive(i_selectTheMgStruc_ASId,true,0.1);
  PlayVO2(i_selectTheMgStruc_ASId);

}





function onClickModel1Q2()
{
  //Right answer
    userattempt++;
    addScore(1,userattempt);
    SetActive(q1cHighlL2Id,true);
    PlayVO2(rutherMgId);
    SetOnClickListener(as_ModelCarbonShellL2Id,'');
    SetOnClickListener(as_ModelCarbonL2Id,'');
    SetOnClickListener(as_ModelCjjL2Id,'');
    SetOnClickListener(as_ModelQuantumOrbitalL2Id,'');
    userattempt=0;
    wrongAttempt =0;
    SetActive(i_selectTheMgStruc_ASId,false);
    setTimeout(displayCompPanel,5000);


}


function onClickModel2Q2()
{
  //wrong answer
    userattempt++;
    wrongAttempt++;
    autoCorrectQ2();
     SetActive(q1bHighlL2Id,true);
    PlayVO2(as_ModelCarbonId);
    SetOnClickListener(as_ModelCarbonL2Id,'');

}

function onClickModel3Q2()
{
  //wrong answer
    userattempt++;
    wrongAttempt++;
    autoCorrectQ2();
    SetActive(q1aHighlL2Id,true);
    PlayVO2(as_ModelQuantumOrbitalId);
    SetOnClickListener(as_ModelCjjL2Id,'');

}

function onClickModel4Q2()
{
  //wrong answer
    userattempt++;
    wrongAttempt++;
    autoCorrectQ2();
    SetActive(q1dHighlL2Id,true);
    PlayVO2(as_ModelCarbonShellId);
    SetOnClickListener(as_ModelQuantumOrbitalL2Id,'');
}

function autoCorrectQ2()
{
  //Auto correct
  if(wrongAttempt>2)
  {
    userattempt++;
    addScore(1,userattempt);
    wrongAttempt=0;
    userattempt=0;
    SetActive(i_selectTheMgStruc_ASId,false);
    SetOnClickListener(as_ModelCarbonShellL2Id,'');
    SetOnClickListener(as_ModelCarbonL2Id,'');
    SetOnClickListener(as_ModelCjjL2Id,'');
    SetOnClickListener(as_ModelQuantumOrbitalL2Id,'');
    setTimeout(startCorrectionL2,5000);
  }
  else
  {
     return;
  }

}



function startCorrectionL2()
{
    SetActive(q1cHighlL2Id,true);
    PlayVO2('#btn_okAutoCorrectL2');
    SetActive(btn_okAutoCorrectL2Id,true);
}

function onClick_OkL2Q2()
{
  SetActive(btn_okAutoCorrectL2Id,false);
  displayCompPanel();
}


function displayCompPanel()
{
    utility_changeText('#score_percent', getPercent() + " %");
    SetActive(p_comp_asId,true);
    PlayVO2(p_comp_asId);
}

function p_comp_as_click() {
    SetActive(p_comp_asId, false);
    SetActive(l_scoreId, false);

    if (getPercent() >= 60)
    {
        SetActive(p_greaterthanId, true);
        PlayVO2(p_greaterthanId);
    } else {
        SetActive(p_lessthanId, true);
        PlayVO2(p_lessthanId);
    }
}


function p_lessthan_click()
{
    SetActive(p_lessthanId, false);
    GoToMainMenu();
}


function p_greaterthan_click()
{
    SetActive(p_greaterthanId, false);
    GoToMainMenu();
}


function GoToMainMenu() {
    setTimeout(location.reload.bind(location), 1000);

}
