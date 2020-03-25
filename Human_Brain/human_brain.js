var assetsId = "#assets";
var entity = document.querySelector(assetsId);
var controllerId = null;

function init() {
  console.log("assetsId:", assetsId, entity);
  if (entity != null) {
    entity.addEventListener("loaded", function() {
      console.log("All Assets looded");
      setTimeout(ShowMainMenu, 5000);
      setInterval(ActivateController, 1000);
      login_isUserAuthenticated();
    });

    entity.addEventListener("timeout", function() {
      console.log("Time up to load assets");
      setTimeout(location.reload.bind(location), 500);
    });
  } else {
    console.log("Exception : Id not found ID: ", assetsId);
  }
}

function ShowMainMenu() {
  SetActive("#MainMenu", true);
  if (!login_isReferred()) {
    SetActive("#btn_close", false);
  }
  console.log("SetActive", SetActive());
}

init();

function ActivateController() {
  let cId = "";

  if (AFRAME.utils.device.isGearVR()) {
    cId = "#gvrc";
    app_device_platform = "GearVR";
  } else if (isDayDream()) {
    cId = "#ddc";
    var gvrc = document.querySelector("#gvrc");
    var oc = document.querySelector("#oc");
    gvrc.parentNode.removeChild(gvrc);
    oc.parentNode.removeChild(oc);
    SetActive("#cursor", false);
    app_device_platform = "Daydream";
  } else if (AFRAME.utils.device.isOculusGo()) {
    cId = "#oc";
    app_device_platform = "OculusGo";
  } else {
    cId = "#cursor";

    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      app_device_platform = "Cardboard";
      let scene = document.querySelector("a-scene");
      //scene.setAttribute('vr-mode-ui','enabled',true);
    } else {
      app_device_platform = "Desktop";
      let scene = document.querySelector("a-scene");
      //scene.setAttribute('vr-mode-ui','enabled',false);
    }
  }

  if (cId != controllerId) {
    SetActive(controllerId, false);
    controllerId = cId;
    SetActive(controllerId, true);
    console.log("controller id is ", controllerId);
  }
}

function isDayDream() {
  let isDayDream = false;
  let gamepad = navigator.getGamepads()[0];
  if (gamepad != undefined) {
    let gamepadId = gamepad.id;
    isDayDream =
      gamepadId.includes("Daydream") || gamepadId.includes("daydream");
  }
  return isDayDream;
}

window.onload = function() {
  login_referred_set();

  if (!login_isUserAuthenticated()) {
    //window.location.href = "login.html";
    //window.location.href = "http://ec2-52-5-117-32.compute-1.amazonaws.com/unicef/public/";
  } else {
    console.log("User Name : ", login_getCookie("unicef_name"));
  }
};
