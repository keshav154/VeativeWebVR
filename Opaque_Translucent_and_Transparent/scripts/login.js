///////////     By: Pankaj Verma
///////         Last Updated: 24/07/19 03:20
//---------------------------------------------------
var login_setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


var login_getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}


var login_isUserAuthenticated = function() {
    app_unicef_name = login_getCookie("unicef_name");
    app_unicef_age = login_getCookie("unicef_age");
    app_unicef_avatar = login_getCookie("unicef_avatar");
    app_unicef_gender = login_getCookie("unicef_gender");

    //console.log(app_unicef_name);

    if (app_unicef_name == null || app_unicef_age == null)
        return false;
    else
        return true;
}

function login_isReferred() {
    return login_referred_get().length > 0;
}

function login_referred_set() {
    let isRefTrue = document.referrer !== location.href && !document.referrer.includes('login.html');
    if (isRefTrue) {
        sessionStorage.setItem("v_ref_address", document.referrer);
    }
}

function login_referred_get() {
    return sessionStorage.getItem("v_ref_address");
}