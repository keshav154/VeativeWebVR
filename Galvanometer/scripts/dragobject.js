var drag_dragable=[];
var drag_additem=true;
var question_chances = {};

AFRAME.registerComponent('dragit', {
// Could use a schem to preserve the color! then simply change it on update
// if clicked?
schema: {
   enabled: {type: 'string', default: 'true'}
},

init: function () {

var element=this;
drag_AddObject(this.el.id);


this.el.addEventListener('mousedown', function (evt) {


  let isObject=drag_HasObject(element.el.getAttribute('id'));


  if(element.data.enabled=='true' && isObject)
  {
    dragObject(this);
  }

});

this.el.addEventListener('mouseup', function (evt) {

  //let isEnable=element.getAttribute('dragit','enabled');

  let isObject=drag_HasObject(element.el.getAttribute('id'));

  if(element.data.enabled=='true' && isObject)
  {
    dropObject(this);
  }

});


// window.addEventListener("keydown", function(event) {
//
//   let isObject=drag_HasObject(element.el.getAttribute('id'));
//
//
//   if(element.data.enabled=='true' && isObject)
//   {
//     dragObject(this);
//   }
//
// }, true);
//
//
// window.addEventListener("keyup", function(event) {
//   //alert("key: " + event.key + ", code: " + event.code);
//   let isObject=drag_HasObject(element.el.getAttribute('id'));
//
//
//   if(element.data.enabled=='true' && isObject)
//   {
//     dropObject(this);
//   }
//
// }, true);


},


tick : function ()
{
  //console.clear();
  //if(active!=null)
  //  console.log(GetWorldPositionN(active));
//  console.clear();
//  console.log(hit_objects);
}
});



var cam = document.querySelector('a-camera');


var parent=null;
var active=null;
var pos=null;
var scale=null;


function dragObject(item)
{

  if(active==null)
  {
      parent=item.parentNode;

      active=item;

      let ctrl = document.querySelector(controllerId);
      ctrl.object3D.el.appendChild(item);

      let pos=dragdrop_getPosition(item.id);
      let scale=dragdrop_getScale(item.id);

      item.setAttribute('position',pos);
      item.setAttribute('setactive','scale',scale);
  }

}



function dropObject(item)
{
    if(active!=null)
    {
      let gindex=-1;

      hit_objects.forEach(myFunction);

      function myFunction(itemL, index, arr) {

        if(itemL.id==dragdrop_getAnswerId(item.id))
        {

          gindex=index;
          return;
        }
      }

      if(gindex==-1)
      {
        parent.appendChild(active);
        onWrongAnswer(active.getAttribute('id'));
      }
      else {

        parent.appendChild(active);
        active.setAttribute('position','0 0 -7');
        //console.log("removing id ",active.getAttribute('id'));
        drag_DeleteObject(active.getAttribute('id'));
        //console.log("ree ",drag_HasObject(active.getAttribute('id')))
        onRightAnswer(active.getAttribute('id'));

      }

      active=null;
    }
}

function onRightAnswer(id)
{
  question_chances[id]=question_chances[id]-1;
  addScore(dragdrop_getQuestionId(id),3-question_chances[id]);
  //Play right sound
  //Add Score Entry
}


function onWrongAnswer(id)
{
  question_chances[id]=question_chances[id]-1;

  if(question_chances[id]==0)
  {
    doAutoCurrect(id);
    drag_DeleteObject(id);
    addScore(dragdrop_getQuestionId(id),3-question_chances[id]);
  }
  else {
    //Play wrong sound
  }
}

function doAutoCurrect(id)
{
    //Play autocurrent sound
    //Add Score Entry
    let element=document.querySelector('#'.concat(id));
    element.setAttribute('position','0 0 -7');
}



function dragdrop_getAnswerId(id)
{
    if(id=="ElectroMagnet_lvlAs")
    return "TransparentMotorAS";

    if(id=="Meter_lvlAs")
    return "TransparentScaleAS";


    if(id=="Niddle_lvlAs")
    return "TransparentNeedleAS";

    if(id=="Ring_lvlAs")
    return "TransparentRingAS";

    if(id=="Magnet_lvlAs")
    return "TransparentMagnetAS";

    return "";

}


function dragdrop_getQuestionId(id)
{
    if(id=="ElectroMagnet_lvlAs")
    return 1;

    if(id=="Meter_lvlAs")
    return 2;


    if(id=="Niddle_lvlAs")
    return 3;

    if(id=="Ring_lvlAs")
    return 4;

    if(id=="Magnet_lvlAs")
    return 5;

    return 0;
}



function dragdrop_getPosition(id)
{

  let pos="0 -0.5 -2";

  if(id=='Ring_lvlAs')
  pos="0 -0.25 -2";

  if(id=='ElectroMagnet_lvlAs')
  pos="0 0 -2";

return pos;

}



function dragdrop_getScale(id)
{
  let scale="0.05 0.05 0.05";

  if(id=='Ring_lvlAs')
  scale="0.1 0.1 0.1";

  if(id=='ElectroMagnet_lvlAs')
  scale="0.075 0.075 0.075";

return scale;
}


function drag_AddObject(item)
{
 if(drag_dragable.indexOf(item)==-1 && drag_additem)
 {
   drag_dragable.push(item);
   question_chances[item]=3;
 }

 if(drag_dragable.length>4)
 drag_additem=false;
}

function drag_DeleteObject(item)
{
  let index=drag_dragable.indexOf(item);
 if(index>-1)
 drag_dragable.splice(index, 1);
}

function drag_HasObject(item)
{
 if(drag_dragable.indexOf(item)!=-1)
 {
   return true;
 }
 else {
    return false;
 }
}
