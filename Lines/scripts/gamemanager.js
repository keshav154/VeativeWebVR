///___________________  MainMenu Functions

var m_Line_Lvl1Id  ='#M_Line_Lvl1';
var p_LineTextId ='#p_LineText';
var p_LineTextDistanceId ='#p_LineTextDistance';
var p_complete_Lvl1Id = '#p_complete_Lvl1';
var p_ModeId ='#p_Mode';
var p_RelaxtextId ='#p_Relaxtext';
var as_Cross_ArrowId ='#AS_Cross_Arrow';
var as_DotId = '#AS_Dot';
var as_Dot_ArrowId ='#AS_Dot_Arrow';
var as_Dot_LineId = '#AS_Dot_Line';
var as_Double_ArrowId ='#AS_Double_Arrow';
var as_Single_ArrowId ='#AS_Single_Arrow';
var l_scoreId = '#l_score';
var p_PlayDisplayId ='#p_PlayDisplay';


var p_WellDone_ASId = '#p_WellDone_AS';
var p_TryAgain_ASId='#p_TryAgain_AS';

//voiceover

var animation_VOId = '#Animation_VO';
var p_C_Inst_ActivityCompleteId = '#p_C_Inst_ActivityComplete';
var line_Question_bgId   = '#Line_Question_bg';
var line_Conclusion_bgId = '#Line_Conclusion_bg';
var intersecting_Line_Question_bgId  = '#Intersecting_Line_Question_bg';
var intersecting_Conclusion_bgId  ='#Intersecting_Conclusion_bg';
var ray_Line_Question_bgId = '#Ray_Line_Question_bg';
var ray_Line_Conclusion_bg = '#Ray_Line_Conclusion_bg';
var point_Line_Question_bgId = '#Point_Line_Question_bg';
var point_Line_Conclusion_bgId = '#Point_Line_Conclusion_bg';
var line_Segment_Question_bgId = '#Line_Segment_Question_bg';
var line_Segment_Conclusion_bgId = '#Line_Segment_Conclusion_bg';
var parllel_Line_Question_bgId = '#Parllel_Line_Question_bg';
var parllel_Line_Conclusion_bgId = '#Parllel_Line_Conclusion_bg';
var p_score_instId = '#p_score_inst';
var c_TryAgain1Id  = '#C_TryAgain1';
var c_WellDone1Id = '#C_WellDone1';
var relaxed_Mode_ButtonId = "#Relaxed_Mode_Button";
var time_OverId = '#Time_Over';

//Timer
var i_timerId ='#i_timer';
var i_timeupId ='#i_timeup';

//Correct panel text
var p_As_LineTextId ='#p_As_LineText';
var p_As_IntersectTextId = '#p_As_IntersectText';
var p_As_RayTextId = '#p_As_RayText';
var p_As_PointTextId ='#p_As_PointText';
var p_As_LineSegmentTextId ='#p_As_LineSegmentText';
var p_As_ParallelLineTextId ='#p_As_ParallelLineText';

//After right Answer Models
var as_Cross_ArrowFixId ='#AS_Cross_ArrowFix';
var as_DotFixId = '#AS_DotFix';
var as_Dot_ArrowFixId ='#AS_Dot_ArrowFix';
var as_Dot_LineFixId = '#AS_Dot_LineFix';
var as_Double_ArrowFixId ='#AS_Double_ArrowFix';
var as_Single_ArrowFixId ='#AS_Single_ArrowFix';

//in camera Questions
var i_AS_Rq1Id = '#i_AS_Rq1';
var i_AS_Rq2Id = '#i_AS_Rq2';
var i_AS_Rq3Id = '#i_AS_Rq3';
var i_AS_Rq4Id = '#i_AS_Rq4';
var i_AS_Rq5Id = '#i_AS_Rq5';
var i_AS_Rq6Id = '#i_AS_Rq6';

// Right Answer highlighter
 var q1cHighlId='#q1cHighl';
 var q1bHighlId='#q1bHighl';
 var q1aHighlId='#q1aHighl';
 var q1dHighlId='#q1dHighl';
 var q1eHighlId='#q1eHighl';
 var q1fHighlId='#q1fHighl';


var btn_okAutoCorrectId='#btn_okAutoCorrect';
var btn_okAutoCorrectL2Id='#btn_okAutoCorrectL2';

var p_comp_asId='#p_comp_as';
var p_lessthanId='#p_lessthan';
var p_greaterthanId= '#p_greaterthan';

var userattempt=0;
var wrongAttempt =0;
var timecount=10;
var isTrue=false;


//-------------Main Menu Scene-----------------------//

function OnClickObjective() {
    SetActive('#MainMenu', false);
    SetActive('#LO', true);
    PlayVO2('#p_objective');
}

function OnClickL1() {
    PlayVO2(animation_VOId);
    SetActive('#MainMenu', false);
    SetActive('#L1', true);
    SetActive(p_LineTextId,false);
    AnimationMixerPlay(m_Line_Lvl1Id);
    setTimeout(lineTextTrue,10000);
    setTimeout(lineTextFalse,16000);
    setTimeout(linedistance,60000);
    setTimeout(pcompleteactivity,65000);
    setTimeout(audioplay,65000);
}

function audioplay(){

    PlayVO2(p_C_Inst_ActivityCompleteId);

}
//For text enabled and disable
function lineTextTrue(){

    SetActive(p_LineTextId,true);
}

function lineTextFalse(){

    SetActive(p_LineTextId,false);
}

function linedistance(){

    SetActive(p_LineTextDistanceId,true);

}

function pcompleteactivity(){
    SetActive(p_complete_Lvl1Id,true);
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
    setTimeout(OnClickL1,500);
}
///___________________  Level_1 Functions

function Ok_ClickOnComplete()
{
  SetActive('#L1', false);
  SetActive('#AS', true);
  SetActive('#MainMenu', false);
  SetActive(p_complete_Lvl1Id,false);
  PlayVO2(p_score_instId);
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
  isTrue=false;
  SetActive(p_ModeId,false);
  SetActive(p_RelaxtextId,false);
  SetActive(as_Cross_ArrowId,true);
  SetActive(as_DotId,true);
  SetActive(as_Dot_ArrowId,true);
  SetActive(as_Double_ArrowId,true);
  SetActive(as_Dot_LineId,true);
  SetActive(as_Single_ArrowId,true);
  SetActive(l_scoreId,true,0.1);
  SetActive(i_AS_Rq1Id,true,0.1);
  //SetActive(p_PlayDisplayId,false);
  SetActive(p_RelaxtextId,false);
  PlayVO2(line_Question_bgId);
}

function onClickLine(){
  userattempt++;
  addScore(1,userattempt);
  SetActive(p_WellDone_ASId,true,0.1);
  SetOnClickListener(as_Cross_ArrowId,'');
  SetOnClickListener(as_DotId,'');
  SetOnClickListener(as_Dot_ArrowId,'');
  SetOnClickListener(as_Double_ArrowId,'');
  SetOnClickListener(as_Dot_LineId,'');
  SetActive(q1fHighlId,true);
  setTimeout(onTimer,1000);
}

function onTimer(){
  SetActive(q1fHighlId,false);
  SetActive(p_WellDone_ASId,false);
  SetActive(as_Cross_ArrowId,false);
  SetActive(as_DotId,false);
  SetActive(as_Dot_ArrowId,false);
  SetActive(as_Double_ArrowId,false);
  SetActive(as_Dot_LineId,false);
  SetActive(as_Single_ArrowId,false);
  SetActive(i_AS_Rq1Id,false);
  SetActive(p_As_LineTextId,true);
  SetActive(as_Single_ArrowFixId,true,0.15);
  SetActive(i_AS_Rq1Id,false);
}

function onClickCorrectLine()
{
  SetActive(as_Cross_ArrowId,true);
  SetActive(as_DotId,true);
  SetActive(as_Dot_ArrowId,true);
  SetActive(as_Double_ArrowId,true);
  SetActive(as_Dot_LineId,true);
  SetActive(as_Single_ArrowId,true);
  SetActive(l_scoreId,true,0.1);
  SetActive(i_AS_Rq2Id,true,0.1);
  SetActive(p_As_LineTextId,false);
  SetActive(p_WellDone_ASId,false);
  SetActive(as_Single_ArrowFixId,false,0.15);
}

function soundPlay(s){
  switch (s) {
    case 1:
    PlayVO2(line_Conclusion_bgId);
    break;
    case 2:
    PlayVO2(intersecting_Conclusion_bgId);
    break;
    case 3:
    PlayVO2(ray_Line_Conclusion_bg)
    break;
    case 4:
    PlayVO2(point_Line_Conclusion_bgId);
    break;
    case 5:
    PlayVO2(line_Segment_Conclusion_bgId);
    break;
    case 6:
    PlayVO2(parllel_Line_Conclusion_bgId);
    break;
  }
}

var u_attempt=0;
var u_wrongAttempt=3;
var k=0;
function onClickRightOption(n)
{
  u_attempt++;
  countStop = true;
  SetActive(i_timerId,false);
  switch (n)
  {
    case 1:
    SetActive(q1fHighlId,true);
    addScore(1,u_attempt);
    setTimeout('enableModels(1)',1500);
    setTimeout('soundPlay(1)',1500);

    break;

    case 2:
    SetActive(q1aHighlId,true);
    addScore(2,u_attempt);
    setTimeout('enableModels(2)',1500);
    setTimeout('soundPlay(2)',1500);

    break;

    case 3:
    SetActive(q1cHighlId,true);
    addScore(3,u_attempt);
    setTimeout('enableModels(3)',1500);
    setTimeout('soundPlay(3)',1500);
    break;

    case 4:
    SetActive(q1bHighlId,true);
    addScore(4,u_attempt);
    setTimeout('enableModels(4)',1500);
    setTimeout('soundPlay(4)',1500);
    break;

    case 5:
    SetActive(q1dHighlId,true);
    addScore(5,u_attempt);
    setTimeout('enableModels(5)',1500);
    setTimeout('soundPlay(5)',1500);
    break;

    case 6:
    SetActive(q1eHighlId,true);
    addScore(6,u_attempt);
    setTimeout('enableModels(6)',1500);
    setTimeout('soundPlay(6)',1500);
    break;
  }

      SetActive(p_WellDone_ASId,true,0.1);
      PlayVO2(c_WellDone1Id);
      setTimeout(disableWellDoneTryAgain,1000);
      SetOnClickListener(as_Single_ArrowId,'');
      SetOnClickListener(as_Cross_ArrowId,'');
      SetOnClickListener(as_DotId,'');
      SetOnClickListener(as_Dot_ArrowId,'');
      SetOnClickListener(as_Double_ArrowId,'');
      SetOnClickListener(as_Dot_LineId,'');
      setTimeout(disableModels,1500);
      u_attempt=0;
      u_wrongAttempt=3;
      k++;
  }



function onclickWrongOption(n,id)
{
  u_attempt++;

  switch (n)
  {
    case 1:
          if(u_wrongAttempt>0)
          {
            SetActive(p_TryAgain_ASId,true,0.1);
            PlayVO2(c_TryAgain1Id);
            //SetActive(q1bHighrId,true);
            setTimeout(disableWellDoneTryAgain,1000);
          }
          u_wrongAttempt--;
          if(u_wrongAttempt==0)
          {
             k++;
             isover = false;
            setTimeout('autoCorrectAS(1)',1200);
          }

    break;

    case 2:
          if(u_wrongAttempt>0)
          {
            SetActive(p_TryAgain_ASId,true,0.1);
            PlayVO2(c_TryAgain1Id);
            setTimeout(disableWellDoneTryAgain,1000);
          }
          u_wrongAttempt--;
          if(u_wrongAttempt==0)
          {
            k++;
             isover = false;
            setTimeout('autoCorrectAS(2)',1200);
          }

    break;

    case 3:
          if(u_wrongAttempt>0)
          {
            SetActive(p_TryAgain_ASId,true,0.1);
            PlayVO2(c_TryAgain1Id);
            setTimeout(disableWellDoneTryAgain,1000);
          }
          u_wrongAttempt--;
          if(u_wrongAttempt==0)
          {
              k++;
               isover = false;
            setTimeout('autoCorrectAS(3)',1200);
          }

    break;

    case 4:
          if(u_wrongAttempt>0)
          {
            SetActive(p_TryAgain_ASId,true,0.1);
            PlayVO2(c_TryAgain1Id);
            setTimeout(disableWellDoneTryAgain,1000);
          }
          u_wrongAttempt--;
          if(u_wrongAttempt==0)
          {
              k++;
               isover = false;
            setTimeout('autoCorrectAS(4)',1200);
          }

    break;

    case 5:
          if(u_wrongAttempt>0)
          {
            SetActive(p_TryAgain_ASId,true,0.1);
            PlayVO2(c_TryAgain1Id);
            setTimeout(disableWellDoneTryAgain,1000);
          }
          u_wrongAttempt--;
          if(u_wrongAttempt==0)
          {
              k++;
               isover = false;
            setTimeout('autoCorrectAS(5)',1200);
          }

    break;

    case 6:
          if(u_wrongAttempt>0)
          {
            SetActive(p_TryAgain_ASId,true,0.1);
            PlayVO2(c_TryAgain1Id);
            setTimeout(disableWellDoneTryAgain,1000);
          }
          u_wrongAttempt--;
          if(u_wrongAttempt==0)
          {
              k++;
               isover = false;
            setTimeout('autoCorrectAS(6)',1200);
          }

    break;

  }
  var z = GetEntityById('#'.concat(id))
  z.setAttribute('onclick', '');
  //k++;

  if(id=="AS_Double_Arrow")
  {
    SetActive(q1eHighlId,true);
  }
  else if (id=="AS_Single_Arrow")
  {
    SetActive(q1fHighlId,true);
  }
  else if (id=="AS_Dot_Line")
  {
    SetActive(q1dHighlId,true);
  }
  else if (id=="AS_Dot_Arrow")
  {
    SetActive(q1cHighlId,true);
  }
  else if (id=="AS_Dot")
  {
    SetActive(q1bHighlId,true);
  }
  else if(id=="AS_Cross_Arrow")
  {
    SetActive(q1aHighlId,true);
  }
}


function autoCorrectAS(a)
{
  countStop = true;
  SetActive(i_timerId,false);
  disableModels();
  switch (a)
  {
    case 1:
          SetActive(p_As_LineTextId,true);
          SetActive(as_Single_ArrowFixId,true,0.15);
          SetActive(i_AS_Rq1Id,false);
          PlayVO2(line_Conclusion_bgId);
          addScore(1,4);
    break;
    case 2:
          SetActive(p_As_IntersectTextId,true);
          SetActive(as_Cross_ArrowFixId,true,0.15);
          SetActive(i_AS_Rq2Id,false);
          PlayVO2(intersecting_Conclusion_bgId);
          addScore(2,4);
    break;
    case 3:
           SetActive(p_As_RayTextId,true);
           SetActive(as_Dot_ArrowFixId,true,0.15);
           SetActive(i_AS_Rq3Id,false);
             PlayVO2(ray_Line_Conclusion_bg);
          addScore(3,4);
    break;
    case 4:

          SetActive(p_As_PointTextId,true);
          SetActive(as_DotFixId,true,0.15);
          SetActive(i_AS_Rq4Id,false);
          PlayVO2(point_Line_Conclusion_bgId);
          addScore(4,4);
    break;
    case 5:
           SetActive(p_As_LineSegmentTextId,true);
           SetActive(as_Dot_LineFixId,true,0.15);
           SetActive(i_AS_Rq5Id,false);
           PlayVO2(line_Segment_Conclusion_bgId);
          addScore(5,4);
    break;
    case 6:
           SetActive(p_As_ParallelLineTextId,true);
           SetActive(as_Double_ArrowFixId,true,0.15);
           SetActive(i_AS_Rq6Id,false);
           PlayVO2(parllel_Line_Conclusion_bgId);
          addScore(6,4);
    break;


  }
    u_attempt=0;
    u_wrongAttempt=3;

}


function disableWellDoneTryAgain()
{
  SetActive(p_WellDone_ASId,false);
  SetActive(p_TryAgain_ASId,false);
}

function disableModels()
{
    SetActive(as_Cross_ArrowId,false);
    SetActive(as_DotId,false);
    SetActive(as_Dot_ArrowId,false);
    SetActive(as_Double_ArrowId,false);
    SetActive(as_Dot_LineId,false);
    SetActive(as_Single_ArrowId,false);
    SetActive(q1fHighlId,false);
    SetActive(q1cHighlId,false);
    SetActive(q1aHighlId,false);
    SetActive(q1bHighlId,false);
    SetActive(q1dHighlId,false);
    SetActive(q1eHighlId,false);
}

function enableModels(b)
{
  switch (b)
  {
    case 1:
          SetActive(p_As_LineTextId,true);
          SetActive(as_Single_ArrowFixId,true,0.15);
          SetActive(i_AS_Rq1Id,false);
        //  PlayVO2(intersecting_Line_Question_bgId);
    break;

    case 2:
           SetActive(p_As_IntersectTextId,true);
           SetActive(as_Cross_ArrowFixId,true,0.15);
          SetActive(i_AS_Rq2Id,false);
    break;

    case 3:
           SetActive(p_As_RayTextId,true);
           SetActive(as_Dot_ArrowFixId,true,0.15);
           SetActive(i_AS_Rq3Id,false);
    break;

    case 4:
           SetActive(p_As_PointTextId,true);
           SetActive(as_DotFixId,true,0.15);
           SetActive(i_AS_Rq4Id,false);
    break;

    case 5:
           SetActive(p_As_LineSegmentTextId,true);
           SetActive(as_Dot_LineFixId,true,0.15);
           SetActive(i_AS_Rq5Id,false);
    break;

    case 6:
           SetActive(p_As_ParallelLineTextId,true);
           SetActive(as_Double_ArrowFixId,true,0.15);
           SetActive(i_AS_Rq6Id,false);
    break;

  }
}

function onClickOkAfterQ(c)
{
  switch (c)
  {
    case 1:
      SetActive(p_As_LineTextId,false);
      SetActive(as_Single_ArrowFixId,false);
      SetActive(i_AS_Rq1Id,false);
      SetActive(i_AS_Rq2Id,true,0.1);
      SetOnClickListener(as_Single_ArrowId,"onclickWrongOption(2,'AS_Single_Arrow');");
      SetOnClickListener(as_DotId,"onclickWrongOption(2,'AS_Dot');");
      SetOnClickListener(as_Dot_ArrowId,"onclickWrongOption(2,'AS_Dot_Arrow');");
      SetOnClickListener(as_Double_ArrowId,"onclickWrongOption(2,'AS_Double_Arrow');");
      SetOnClickListener(as_Dot_LineId,"onclickWrongOption(2,'AS_Dot_Line');");
      SetOnClickListener(as_Cross_ArrowId,'onClickRightOption(2);');
      PlayVO2(intersecting_Line_Question_bgId);
      var entity1 = document.querySelector(q1fHighlId);
      entity1.setAttribute('material','color','red');
      var entity1 = document.querySelector(q1bHighlId);
      entity1.setAttribute('material','color','red');
      var entity1 = document.querySelector(q1cHighlId);
      entity1.setAttribute('material','color','red');
      var entity1 = document.querySelector(q1eHighlId);
      entity1.setAttribute('material','color','red');
      var entity1 = document.querySelector(q1dHighlId);
      entity1.setAttribute('material','color','red');
      var entity1 = document.querySelector(q1aHighlId);
      entity1.setAttribute('material','color','green');
    break;

    case 2:

      SetActive(p_As_IntersectTextId,false);
      SetActive(as_Cross_ArrowFixId,false);
      SetActive(i_AS_Rq2Id,false);
      SetActive(i_AS_Rq3Id,true,0.1);
      SetOnClickListener(as_Single_ArrowId,"onclickWrongOption(3,'AS_Single_Arrow');");
      SetOnClickListener(as_DotId,"onclickWrongOption(3,'AS_Dot');");
      SetOnClickListener(as_Dot_ArrowId,'onClickRightOption(3);');
      SetOnClickListener(as_Double_ArrowId,"onclickWrongOption(3,'AS_Double_Arrow');");
      SetOnClickListener(as_Dot_LineId,"onclickWrongOption(3,'AS_Dot_Line');");
      SetOnClickListener(as_Cross_ArrowId,"onclickWrongOption(3,'AS_Cross_Arrow');");
      PlayVO2(ray_Line_Question_bgId);
      var entity2 = document.querySelector(q1fHighlId);
      entity2.setAttribute('material','color','red');
      var entity2 = document.querySelector(q1bHighlId);
      entity2.setAttribute('material','color','red');
      var entity2 = document.querySelector(q1cHighlId);
      entity2.setAttribute('material','color','green');
      var entity2 = document.querySelector(q1eHighlId);
      entity2.setAttribute('material','color','red');
      var entity2 = document.querySelector(q1dHighlId);
      entity2.setAttribute('material','color','red');
      var entity2 = document.querySelector(q1aHighlId);
      entity2.setAttribute('material','color','red');
    break;

    case 3:

      SetActive(p_As_RayTextId,false);
      SetActive(as_Dot_ArrowFixId,false);
      SetActive(i_AS_Rq3Id,false);
      SetActive(i_AS_Rq4Id,true,0.1);
      SetOnClickListener(as_Single_ArrowId,"onclickWrongOption(4,'AS_Single_Arrow');");
      SetOnClickListener(as_DotId,'onClickRightOption(4);');
      SetOnClickListener(as_Dot_ArrowId,"onclickWrongOption(4,'AS_Dot_Arrow');");
      SetOnClickListener(as_Double_ArrowId,"onclickWrongOption(4,'AS_Double_Arrow');");
      SetOnClickListener(as_Dot_LineId,"onclickWrongOption(4,'AS_Dot_Line');");
      SetOnClickListener(as_Cross_ArrowId,"onclickWrongOption(4,'AS_Cross_Arrow');");
      PlayVO2(point_Line_Question_bgId);
      var entity3 = document.querySelector(q1fHighlId);
      entity3.setAttribute('material','color','red');
      var entity3 = document.querySelector(q1bHighlId);
      entity3.setAttribute('material','color','green');
      var entity3 = document.querySelector(q1cHighlId);
      entity3.setAttribute('material','color','red');
      var entity3 = document.querySelector(q1eHighlId);
      entity3.setAttribute('material','color','red');
      var entity3 = document.querySelector(q1dHighlId);
      entity3.setAttribute('material','color','red');
      var entity3 = document.querySelector(q1aHighlId);
      entity3.setAttribute('material','color','red');

    break;

    case 4:

       SetActive(p_As_PointTextId,false);
       SetActive(as_DotFixId,false);
       SetActive(i_AS_Rq4Id,false);
       SetActive(i_AS_Rq5Id,true,0.1);
       SetOnClickListener(as_Single_ArrowId,"onclickWrongOption(5,'AS_Single_Arrow');");
       SetOnClickListener(as_DotId,"onclickWrongOption(5,'AS_Dot');");
       SetOnClickListener(as_Dot_ArrowId,"onclickWrongOption(5,'AS_Dot_Arrow');");
       SetOnClickListener(as_Double_ArrowId,"onclickWrongOption(5,'AS_Double_Arrow');");
       SetOnClickListener(as_Dot_LineId,'onClickRightOption(5);');
       SetOnClickListener(as_Cross_ArrowId,"onclickWrongOption(5,'AS_Cross_Arrow');");
       PlayVO2(line_Segment_Question_bgId);
       var entity4 = document.querySelector(q1fHighlId);
       entity4.setAttribute('material','color','red');
       var entity4 = document.querySelector(q1bHighlId);
       entity4.setAttribute('material','color','red');
       var entity4 = document.querySelector(q1cHighlId);
       entity4.setAttribute('material','color','red');
       var entity4 = document.querySelector(q1eHighlId);
       entity4.setAttribute('material','color','red');
       var entity4 = document.querySelector(q1dHighlId);
       entity4.setAttribute('material','color','green');
       var entity4 = document.querySelector(q1aHighlId);
       entity4.setAttribute('material','color','red');
    break;

    case 5:

      SetActive(p_As_LineSegmentTextId,false);
      SetActive(as_Dot_LineFixId,false);
      SetActive(i_AS_Rq5Id,false);
      SetActive(i_AS_Rq6Id,true,0.1);
      SetOnClickListener(as_Single_ArrowId,"onclickWrongOption(6,'AS_Single_Arrow');");
      SetOnClickListener(as_DotId,"onclickWrongOption(6,'AS_Dot');");
      SetOnClickListener(as_Dot_ArrowId,"onclickWrongOption(6,'AS_Dot_Arrow');");
      SetOnClickListener(as_Double_ArrowId,'onClickRightOption(6);');
      SetOnClickListener(as_Dot_LineId,"onclickWrongOption(6,'AS_Dot_Line');");
      SetOnClickListener(as_Cross_ArrowId,"onclickWrongOption(6,'AS_Cross_Arrow');");
      PlayVO2(parllel_Line_Question_bgId);
      var entity5 = document.querySelector(q1fHighlId);
      entity5.setAttribute('material','color','red');
      var entity5 = document.querySelector(q1bHighlId);
      entity5.setAttribute('material','color','red');
      var entity5 = document.querySelector(q1cHighlId);
      entity5.setAttribute('material','color','red');
      var entity5 = document.querySelector(q1eHighlId);
      entity5.setAttribute('material','color','green');
      var entity5 = document.querySelector(q1dHighlId);
      entity5.setAttribute('material','color','red');
      var entity5 = document.querySelector(q1aHighlId);
      entity5.setAttribute('material','color','red');
    break;

    case 6:
       SetActive(i_timerId,false);
       SetActive(p_As_ParallelLineTextId,false);
       SetActive(as_Double_ArrowFixId,false);
    break;
  }

  if (c==6)
  {

    SetActive(as_Cross_ArrowId,false);
    SetActive(as_DotId,false);
    SetActive(as_Dot_ArrowId,false);
    SetActive(as_Double_ArrowId,false);
    SetActive(as_Dot_LineId,false);
    SetActive(as_Single_ArrowId,false);

    setTimeout(displayCompPanel,.300);
  }
  else
  {
   SetActive(as_Cross_ArrowId,true);
   SetActive(as_DotId,true);
   SetActive(as_Dot_ArrowId,true);
   SetActive(as_Double_ArrowId,true);
   SetActive(as_Dot_LineId,true);
   SetActive(as_Single_ArrowId,true);
  }

  if(isTrue)
  {
    isover = true;
    timecount=10;
    SetActive(i_timerId,true,0.1);
    countStop = false;
    countDown();
  }
}

function onModebutton(){

  SetActive(p_PlayDisplayId,true);
  SetActive(p_ModeId,false);
  StopVO2(5);
//  SetActive(p_RelaxtextId,true);
}

function onPlaybutton()
{
  PlayVO2(relaxed_Mode_ButtonId);
  SetActive(p_PlayDisplayId,false);
   SetActive(p_RelaxtextId,true);
}

let countStop = false;
function onClickTimerMode()
{
  onClick_ScoreOK();
  isTrue=true;
  countDown();
  SetActive(i_timerId,true,0.1);
  SetActive(p_RelaxtextId,false);
}

let isover = true;
function countDown()
{
  if(!countStop)
  {
    utility_changeText(i_timerId, "Time : " + timecount);
      if (timecount > 0)
       {
         timecount--;
         setTimeout(countDown,1000);
       }
      else
      {
        enabletimesup();
      }
    }
}

function enabletimesup()
{
  SetActive(i_timeupId,true,0.1);
  PlayVO2(time_OverId);
  //PlayVO2(timesupId);
  setTimeout(timesupAnswer,1000);
}



count=1;
function timesupAnswer()
{

  SetActive(i_timeupId,false);

  if(isover)
  {
    k++;
    autoCorrectAS(k);
  }
}

function displayCompPanel()
{
    SetActive(i_timerId,false);
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
