///////////     By: Pankaj Verma
///////         Last Updated: 26/07/19 12:47
//---------------------------------------------------


//var url='http://192.168.1.210/unicef-development/deepak.gupta/public';
var url = 'http://ec2-52-5-117-32.compute-1.amazonaws.com/unicef/public';
// var url='http://192.168.1.210/unicef-development/deepak.gupta/public';
var saveActivity = '/api/app-activity';


var method = 'POST';
//var userNamePassword='unity:@piun!ty';
var userNamePassword = 'unicef-api:Un!cef-P@ssw0rd';

var xhr = new XMLHttpRequest();
var data = new datamodel();
var database_uuid = getUUID();


function getUUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}



// return date 2019-03-05 14:12:49:890 format
function getFullDate() {
    var date = new Date();
    var y = addZero(date.getFullYear(), 4);
    var mo = addZero(date.getMonth(), 2);
    var d = addZero(date.getDate(), 2);
    var h = addZero(date.getHours(), 2);
    var m = addZero(date.getMinutes(), 2);
    var s = addZero(date.getSeconds(), 2);
    var ms = addZero(date.getMilliseconds(), 3);
    return y + "-" + mo + "-" + d + " " + h + ":" + m + ":" + s + ":" + ms;
}

function addZero(x, n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
}



function addScoreData(qinfo) {
    let qdata = new questiondata();

    qdata.GL_LEVEL_ID = qinfo.lId;
    qdata.GL_LEVEL_NAME = qinfo.lName;
    qdata.GL_LEVEL_KNOWLEDGE_DOMAIN = qinfo.lKnowledgeDom;
    qdata.GL_LEVEL_TYPE = qinfo.lType;
    qdata.GL_LEVEL_INTERACTIVITY = qinfo.lInteractivity;

    qdata.GL_QUESTION_ID = qinfo.qId;
    qdata.LL_QUESTION_TYPE = qinfo.qType;
    qdata.GL_QUESTION_ACTION_VERB = qinfo.qActionVerb;

    qdata.GL_LEVEL_COGNITIVE_DOMAIN = qinfo.cognitiveDom;
    qdata.GL_QUESTION_COGNITIVE = qinfo.cognitiveDom;
    qdata.TR_USER_SCORE = ''.concat(qinfo.uScore);

    qdata.UUID = database_uuid;
    qdata.GL_MODULE_ID = app_module_id;
    qdata.GL_MODULE_NAME = app_module_name;
    qdata.ATTEMPTED_ON = getFullDate();

    qdata.HOST_IP = window.location.host;
    qdata.DEVICE_BROWSER_VERSION = get_browser().name.concat(' ').concat(get_browser().version);
    qdata.DEVICE_PLATFORM = app_device_platform;

    qdata.USR_NAME = app_unicef_name;
    qdata.USR_AGE = app_unicef_age;
    qdata.USR_AVATAR = app_unicef_avatar;
    qdata.USR_GENDER = app_unicef_gender;

    data.data.push(qdata);
    console.log("Entry Added ", qdata);
}



function saveScoreToLocalDB() {
    let dataInJson = JSON.stringify(data);
    data = new datamodel();
    localStorage.setItem("UserScoreData", "");
    localStorage.setItem("UserScoreData", dataInJson);

    if (app_unicef_name != null) {
        setTimeout(sendDataToServer, 1000);
    }
}


function sendDataToServer() {
    xhr.open(method, url.concat(saveActivity), true);
    xhr.setRequestHeader("Authorization", "Basic " + btoa(userNamePassword));
    xhr.setRequestHeader("Content-type", "application/json");
    let scoreDate = localStorage.getItem("UserScoreData");
    xhr.send(scoreDate);
}



xhr.onload = function() {
    //console.log("State : ",xhr.readyState," || Status : ",xhr.status," || ",xhr.responseText);
    if (xhr.readyState = 4 && xhr.status == 200) {
        console.log("Data send seccussfull");
        clearLocalDbData();
    }
}

xhr.onerror = function(e) {
    console.log("Error in sending data ", xhr.status);
}


function clearLocalDbData() {
    localStorage.setItem("UserScoreData", "");
}


////////////////////// POJOS
function datamodel() {
    this.data = [];
}

function questiondata() {
    this.UUID = "ef718367-41d9-41fd-a0sfdf-ac2b01007epd";
    this.USR_NAME = "Pankaj Verma";
    this.USR_AGE = 22;
    this.USR_AVATAR = "mango";
    this.USR_GENDER = "Boy";
    this.USR_LANGUAGE = "English";
    this.GL_MODULE_ID = "SSD";
    this.GL_MODULE_NAME = "Disability Statistics";
    this.GL_LEVEL_ID = 1;
    this.GL_LEVEL_NAME = "L1";
    this.GL_LEVEL_KNOWLEDGE_DOMAIN = "Seeing";
    this.GL_LEVEL_COGNITIVE_DOMAIN = "CFM-7";
    this.GL_LEVEL_TYPE = "T1";
    this.GL_LEVEL_INTERACTIVITY = "GL_l1";
    this.GL_QUESTION_ID = "1";
    this.GL_QUESTION_COGNITIVE = "dsgdsgsdg";
    this.GL_QUESTION_ACTION_VERB = "sdgdgdfg";
    this.LL_QUESTION_TYPE = "QT1";
    this.TR_USER_SCORE = "1";
    this.HOST_IP = "";
    this.DEVICE_BROWSER_VERSION = "";
    this.DEVICE_MODEL = "NA";
    this.DEVICE_KERNEL_VERSION = "NA";
    this.DEVICE_SERIAL_NUMBER = "NA";
    this.DEVICE_PLATFORM = "";
    this.ATTEMPTED_ON = "";
}


function get_browser() {
    var ua = navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {
            name: 'IE',
            version: (tem[1] || '')
        };
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR|Edge\/(\d+)/)
        if (tem != null) {
            return {
                name: 'Opera',
                version: tem[1]
            };
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return {
        name: M[0],
        version: M[1]
    };
}


// function GoLauncherPage()
// {
// 	window.location.href = document.referrer;
// }
