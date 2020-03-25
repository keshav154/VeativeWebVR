///////////     By: Pankaj Verma
///////         Last Updated: 24/07/19 03:20
//---------------------------------------------------
var question_count = 5;
var score = 0;

function addScore(id, attempt) {
    score += getScore(attempt);
    var scorePanel = document.querySelector(l_scoreId);
    scorePanel.setAttribute('text', 'value', 'Score : '.concat(score));

    let qinfo = GetQuestionInfo(id);
    qinfo.uScore = getScore(attempt);
    qinfo.qId = 'Q'.concat(id);

    addScoreData(qinfo);

    if (id == question_count)
        saveScoreToLocalDB();
}



function getPercent() {
    return ((score / question_count) * 100).toFixed(0);
}




function getScore(attempt) {
    switch (attempt) {
        case 1:
            return 1;
            break;
        case 2:
            return 0;
            break;
        case 3:
            return 0;
            break;
        case 4:
            return 0;
            break;
    }
}


function GetQuestionInfo(id) {
    let qinfo = new questionInfo();

    if (id == 1) {
        qinfo.lId = 'AS';
        qinfo.lName = "Assess your knowledge";
        qinfo.lKnowledgeDom = "Factual Knowledge";
        qinfo.lType = "Structure";
        qinfo.lInteractivity = "Explore Structure";
        qinfo.qType = "Multiple Choice Question";
        qinfo.qActionVerb = "Select";
        qinfo.cognitiveDom = "Understand";
    } else if (id == 2) {
        qinfo.lId = 'AS';
        qinfo.lName = "Assess your knowledge";
        qinfo.lKnowledgeDom = "Factual Knowledge";
        qinfo.lType = "Structure";
        qinfo.lInteractivity = "Explore Structure";
        qinfo.qType = "Multiple Choice Question";
        qinfo.qActionVerb = "Select";
        qinfo.cognitiveDom = "Understand";
    } else if (id == 3) {
        qinfo.lId = 'AS';
        qinfo.lName = "Assess your knowledge";
        qinfo.lKnowledgeDom = "Factual Knowledge";
        qinfo.lType = "Structure";
        qinfo.lInteractivity = "Explore Structure";
        qinfo.qType = "Multiple Choice Question";
        qinfo.qActionVerb = "Select";
        qinfo.cognitiveDom = "Understand";
    } else {
        qinfo.lId = 'AS';
        qinfo.lName = "Assess your knowledge";
        qinfo.lKnowledgeDom = "Conceptual Knowledge";
        qinfo.lType = "Theorem";
        qinfo.lInteractivity = "Perform Experiment";
        qinfo.qType = "Select";
        qinfo.qActionVerb = "Recognize";
        qinfo.cognitiveDom = "Understand";
    }

    return qinfo;

}




function questionInfo() {
    this.lId = "";
    this.lName = "";
    this.lKnowledgeDom = "";
    this.lType = "";
    this.lInteractivity = "";
    this.qId = "";
    this.qType = "";
    this.qActionVerb = "";
    this.cognitiveDom = "";
    this.uScore = 0;
}
