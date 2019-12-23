///////////     By: Pankaj Verma
///////         Last Updated: 24/07/19 03:20
//---------------------------------------------------
var question_count = 12;
var score = 0;

function addScore(id, attempt) {
    if (id < 100) {
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
        qinfo.lKnowledgeDom = "Conceptual Knowledge";
        qinfo.lType = "Experiment Setup";
        qinfo.lInteractivity = "Perform Experiment";
        qinfo.qType = "Multiple Choice Question";
        qinfo.qActionVerb = "Identify";
        qinfo.cognitiveDom = "Analyze";
    } else if (id == 2) {
        qinfo.lId = 'AS';
        qinfo.lName = "Assess your knowledge";
        qinfo.lKnowledgeDom = "Conceptual Knowledge";
        qinfo.lType = "Experiment Setup";
        qinfo.lInteractivity = "Perform Experiment";
        qinfo.qType = "Multiple Choice Question";
        qinfo.qActionVerb = "Identify";
        qinfo.cognitiveDom = "Analyze";
    } else if (id == 3) {
        qinfo.lId = 'AS';
        qinfo.lName = "Assess your knowledge";
        qinfo.lKnowledgeDom = "Conceptual Knowledge";
        qinfo.lType = "Experiment Setup";
        qinfo.lInteractivity = "Perform Experiment";
        qinfo.qType = "Multiple Choice Question";
        qinfo.qActionVerb = "Identify";
        qinfo.cognitiveDom = "Analyze";
    } else if (id == 4) {
        qinfo.lId = 'AS';
        qinfo.lName = "Assess your knowledge";
        qinfo.lKnowledgeDom = "Conceptual Knowledge";
        qinfo.lType = "Experiment Setup";
        qinfo.lInteractivity = "Perform Experiment";
        qinfo.qType = "Multiple Choice Question";
        qinfo.qActionVerb = "Identify";
        qinfo.cognitiveDom = "Analyze";
    } else {
        qinfo.lId = 'AS';
        qinfo.lName = "Assess your knowledge";
        qinfo.lKnowledgeDom = "Conceptual Knowledge";
        qinfo.lType = "Experiment Setup";
        qinfo.lInteractivity = "Perform Experiment";
        qinfo.qType = "Multiple Choice Question";
        qinfo.qActionVerb = "Identify";
        qinfo.cognitiveDom = "Analyze";
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
