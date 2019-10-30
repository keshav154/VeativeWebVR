# VeativeWebVR
WebVR Module for Cardboard, DayDream, Oculus Go and GearVR devices

Technology Used
===================================

Framework : A-Frame
IDE       :	Atom
Scripting : JavaScript



How to setup Atom
----
Install Atom : Download the file from https://atom.io/ and Install  AtomSetup-x64 in your pc.

Install html-preview package: To show Output on editor we will have to add html-preview package to Atom editor:

Step 1. Open Atom editor.

Step 2. Go to Packages Tab &gt;&gt; Setting View &gt;&gt; Install Packages/Themes

Step 3. Search for atom-html-preview Package

Step 4. Install first one from showing list.

Step 5. After installation we can show output of web page

Use html-preview package: To use html preview Go to Packages Tab &gt;&gt; Preview HTML &gt;&gt; Enable Preview. By enabling preview you can show the output of your project.



How to create new Project
-----------------------

Step1: Create folder structure same as below

Module Id (Root Directory)

○images

○models

○scripts

○sounds

○loginform

○index.html (welcome page)

○login.html (login form)

○manifest.json

○Appdata.js

Step2: Create index.html text file under the root directory, it will be Game Play page.

Step3: Copy login.html, manifest.json, appdata.js file and loginform folder to your project

Step4: Open Atom editor and Select File tab then select Add Project Folder and select project directory.


Uses and Description of Downloaded Project
---

Step1: Open Atom editor and Select File tab then select Add Project Folder and select downloaded project directory

Login page (login.html)

If login cookie does not find in browser, Application shows Login form
  
Fill below detail to the form
User name, user age , avatar and gender

After submitting the form user will be redirected to module. User will login for 24 hour with login name.
 

Creating Game play(Using Index.html)
----



 Linking Manifest
---

Linking manifest file to add below line

--------------Code -----------------


&lt; link rel="manifest" href="manifest.json" &gt;



Add Module Title
----

Add Title to page to add below line


----------------------------- Code ------------------------------

&lt;Title&gt;MS300035&lt;/Title&gt;


 Load scripts
---

Load Script using &lt;script&gt; tag

----------------------------- Code ------------------------------

&lt;script src="scripts/aframe.min.js"&gt;&lt;/script&gt;
&lt;script src="scripts/utility.js"&gt;&lt;/script&gt;
&lt;script src="scripts/voiceover.js"&gt;&lt;/script&gt;
&lt;script src="scripts/gamemanager.js"&gt;&lt;/script&gt;
&lt;script src="scripts/cardboardjoystick.js"&gt;&lt;/script&gt;
&lt;script src="scripts/colorchange.js"&gt;&lt;/script&gt;
&lt;script src="scripts/questionmanager.js"&gt;&lt;/script&gt;
&lt;script src="scripts/scoremanager.js"&gt;&lt;/script&gt;
&lt;script src="scripts/databasemanager.js"&gt;&lt;/script&gt;
&lt;script src="scripts/login.js"&gt;&lt;/script&gt;
&lt;script src="scripts/cursorzoom.js"&gt;&lt;/script&gt;
&lt;script src="appdata.js"&gt;&lt;/script&gt;







Create Scene
---
 
Create Scene by adding a-scene Tag like below line

----------------------------- Code ------------------------------

&lt; a-scene renderer="antialias: true;"&gt;  code here    &lt;/a-scene&gt; &gt;





Add Camera
------

Add following code:

----------------------------- Code ------------------------------

&lt; a-scene renderer="antialias: true;" &gt;

&lt;a-camera look-controls wasd-controls&gt;
		&lt;a-cursor 
		fuse="false" 
		fuseTimeout='60000' 
		rayOrigin= "mouse" 
		geometry="primitive: ring" 
		material="color: white;  shader: flat"&gt;
		
		&lt;/a-cursor&gt;
&lt;/a-camera&gt;

 &lt;/a-scene&gt;






Load sound in scene
--------

Write code to load sound inside a-scene Tag.
Load sound with a-sound 

Note: This is recommended if clip name is ‘click.wav’ then sound id sound be ‘s_click’ 
(s_NameOfClip).


----------------------------- Code ------------------------------

&lt;a-scene renderer="antialias: true;"&gt;

&lt;a-sound id="s_click" src="src: url(sounds/click.mp3)" poolSize=5&gt;&lt;/a-sound&gt; 
&lt;a-sound id="s_hover" src="src: url(sounds/hover.wav)" poolSize=5&gt;&lt;/a-sound&gt; 
&lt;a-sound id="s_btn_lo" src="src: url(sounds/btn_lo.wav)" poolSize=5&gt;&lt;/a-sound&gt; 
&lt;a-sound id="s_btn_l1" src="src: url(sounds/btn_l1.wav)" poolSize=5&gt;&lt;/a-sound&gt; 

 &lt;/a-scene&gt;



Load Assets
---

Write code to load assets inside a-scene Tag.
Load assets with a-sound 


Note: This is recommended if loading file name is ‘dog.png’ then id should be ‘dog’ .


----------------------------- Code ------------------------------------------------------------------


&lt;a-scene renderer="antialias: true;"&gt;

&lt;a-assets id="assets"  timeout="3600000"&gt;
    
	&lt;img id="tex_menu_off" src="images/Btn_Off.png"&gt;   // Load texture

	&lt;img id="img360" src="images/skybox.jpg"&gt;    // Load 360 Image

	&lt;audio id="bgsound" src="sounds/bg.mp3"&gt;&lt;/audio&gt;  //Load audio

    &lt;a-asset-item id="butterFly_full" src="models/Butterfly/ButterFly_Full.glb"&gt;&lt;/a-asset-item&gt;  // Load 3D model (.gltf)
    
&lt;/a-assets&gt;

&lt;/a-scene"&gt;







Add Background music
------------


Add Background music with a-sound tag in a-scene tag.

Note: To disable autoplay change property autoplay="false"


----------------------------- Code ------------------------------------------------------------------


&lt;a-scene renderer="antialias: true;"&gt;

&lt;a-sound src="#bgsound" autoplay="true" volume="0.5" loop='true'&gt;&lt;/a-sound&gt;

&lt;a-scene&gt;





Add Skybox	
---



Add Skybox in with a-sky tag inside a-scene tag.

Note: Change rotation with rotation property.



----------------------------- Code ------------------------------------------------------------------


&lt;a-scene renderer="antialias: true;"&gt;

&lt;a-sky src="#img360" rotation="0 -130 0"&gt;&lt;/a-sky&gt;

&lt;a-scene&gt;
 













Add Level
--


Add level inside a-scene tag with a-entity tag.


Note: To active/deactive level as default use property setactive="value:true/false"


----------------------------- Code ------------------------------------------------------------------

&lt;a-scene renderer="antialias: true;"&gt;

&lt;a-entity id="MainMenu" setactive="value:true"&gt; Code for main menu level  &lt;/a-entity&gt;

&lt;a-entity id="LO" setactive="value:false"&gt; Code for LO level  &lt;/a-entity&gt;

&lt;a-entity id="L1" setactive="value:false"&gt; Code for L1 level  &lt;/a-entity&gt;

&lt;a-entity id="AS" setactive="value:false"&gt; Code for AS level  &lt;/a-entity&gt;

&lt;a-scene&gt;





Add MainMenu
---



----------------------------- Code ------------------------------------------------------------------

&lt;a-entity id="MainMenu" setactive="value:true"&gt;


&lt;!-- Title --&gt;
&lt;a-entity  position="0 2.5 -3"
  geometry="primitive: plane; width: 3; height: 0.35;"
  material="color: black; opacity:0.53"
  text="value: Line and Plane of Symmetry; align:center; width: 5 "&gt;
&lt;/a-entity&gt;



&lt;a-image id="btn_lo" position="-1.3 1.5 -3"
  geometry="primitive: plane; width: 1.2; height: 0.65"
  material="color: white; opacity:1 ; src: #tex_menu_off ;"
  text="value: View learning \n objectives; align:center; width: 3"
  click_sound cardboard_input vo_hover color_hover onclick="OnClickObjective();"&gt;
&lt;/a-image&gt;

&lt;!-- &lt;a-image src="#tex_menu_off" position="0.7 1.5 -3"&gt;&lt;/a-image&gt; --&gt;

&lt;a-image id="btn_l1" position="0 1.5 -3"
  geometry="primitive: plane; width: 1.2; height: 0.65"
  material="color: white; opacity:1 ; src: #tex_menu_off ;"
  text="value: Learn about lines\n and planes\n of symmetry; align:center; width: 3"
  click_sound cardboard_input vo_hover color_hover onclick="OnClickL1();"&gt;
&lt;/a-image&gt;



&lt;a-image id="btn_as" position="1.3 1.5 -3"
  geometry="primitive: plane; width: 1.2; height: 0.65"
  material="color: white; opacity:1 ; src: #tex_menu_off ;"
  text="value: Assess your \n knowledge; align:center; width: 3"
  click_sound  cardboard_input vo_hover color_hover  onclick="OnClickAS();"&gt;
&lt;/a-image&gt;



&lt;/a-entity&gt;





Add Panel With OK Button
--



Note: Method execute on ok click should name PanelIdName_click().
Eg. if panel id is ‘p_comp_as’ method should be declared ‘p_comp_as_click()’



----------------------------- Code ------------------------------------------------------------------

&lt;a-entity id="p_comp_as" position="0 2 -3"
    setactive="value:false"
    geometry="primitive: plane; width: 2.4; height: 1.1"
    material="color: black; opacity:0.53"&gt;

    &lt;a-text value="You have completed the assessment. 
    Here is your score:" position="0 0.3 0" align="center"  
     width="2.8"&gt;&lt;/a-text&gt;

    &lt;a-image id="btn_ok" position="0 -0.56 0.01"
   src="#tex_menu_off"
  geometry="primitive: plane; width: 0.6; height: 0.3"
  text="value: OK; align:center; width: 3; color: white"
  click_sound cardboard_input color_hover onclick="p_comp_as_click();"&gt;
&lt;/a-image&gt;
  
 &lt;/a-entity&gt;












Add Panel In Camera
--


Add panel inside &lt;a-camera&gt; tag.


Note: Panel in camera should have scale ‘0.1’ for xyz.


----------------------------- Code ------------------------------

&lt;a-entity id="i_nextToProceed" 
  setactive="value:false ; scale: 0.1"
  vo_enable
  position="0 -0.13 -0.3"
  scale="0.1 0.1 0.1"
  geometry="primitive: plane; width: 1.7; height: 0.27"
  material="color: black; opacity:0.53"
  text="value:Select NEXT to proceed.; align:center; width: 2.8;"&gt;
&lt;/a-entity&gt;






Add Controller For GearVR, Oculus and Daydream
--


----------------------------- Code ------------------------------

&lt;!-- Controllers --&gt;
    &lt;a-entity setactive="value:false" gearvr-controls laser-controls="hand: right"  
           id="gvrc" line="color: #00ffff; opacity: 0.75"&gt;&lt;/a-entity&gt;
    &lt;a-entity setactive="value:false" daydream-controls laser-controls="hand: right" 
id="ddc" line="color: #00ffff; opacity: 0.75"&gt;&lt;/a-entity&gt;
    &lt;a-entity setactive="value:false" oculus-go-controls laser-controls="hand: right" 
id="oc" line="color: #00ffff; opacity: 0.75"&gt;&lt;/a-entity&gt;
 &lt;!-- /Controllers --&gt;




Controller setting for different platforms (Cardboard,DayDream,GearVR and OculusGo)
--

Add below code in index.html file at last

----------------------------- Code ------------------------------

&lt;script&gt;
    var assetsId = '#assets';
    var entity = document.querySelector(assetsId);
    var controllerId = null;

    if (entity != null) {
        entity.addEventListener("loaded", function() {
            console.log("All Assets loaded");
            setTimeout(ShowMainMenu, 2000);
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


    function ShowMainMenu() {
        SetActive('#MainMenu', true);
        if (!login_isReferred()) {
            SetActive('#btn_close', false);
        }
    }


    function ActivateController() {
        let cId = "";

        if (AFRAME.utils.device.isGearVR()) {
            cId = '#gvrc';
            app_device_platform = "GearVR";
        } else if (isDayDream()) {
            cId = '#ddc';
            var gvrc = document.querySelector('#gvrc');
            var oc = document.querySelector('#oc');
            gvrc.parentNode.removeChild(gvrc);
            oc.parentNode.removeChild(oc);
            SetActive('#cursor', false);
            app_device_platform = "Daydream";
        } else if (AFRAME.utils.device.isOculusGo()) {
            cId = '#oc';
            app_device_platform = "OculusGo";
        } else {
            cId = '#cursor';

            let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            if (isMobile) {
                app_device_platform = "Cardboard";
                let scene = document.querySelector('a-scene');
                //scene.setAttribute('vr-mode-ui','enabled',true);
            } else {
                app_device_platform = "Desktop";
                let scene = document.querySelector('a-scene');
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
            isDayDream = gamepadId.includes("Daydream") || gamepadId.includes("daydream");
        }
        return isDayDream;
    }


    window.onload = function() {

        login_referred_set();

        if (!login_isUserAuthenticated()) {
            window.location.href = "login.html";
        } else {
            console.log("User Name : ", login_getCookie('unicef_name'));
        }
    };
&lt;/script&gt;






Cookie parameters
----

unicef_name,

unicef_age,

unicef_avatar,

unicef_gender





