AFRAME.registerComponent('dragit', {
// Could use a schem to preserve the color! then simply change it on update
// if clicked?
schema: {
   enable: {type: 'string', default: 'true'}
},

init: function () {

var element=this.el;

this.el.addEventListener('mousedown', function (evt) {

  let isEnable=element.getAttribute('dragit','enable').enable;

  if(isEnable=='true')
  {
    drag(this);
  }

});

this.el.addEventListener('mouseup', function (evt) {

  let isEnable=element.getAttribute('dragit','enable').enable;

  if(isEnable=='true')
  {
    drop(this);
  }

});


window.addEventListener("keydown", function(event) {

  let isEnable=element.getAttribute('dragit','enable').enable;

  if(isEnable=='true')
  {
    drag(element);
  }

}, true);


window.addEventListener("keyup", function(event) {
  //alert("key: " + event.key + ", code: " + event.code);
  let isEnable=element.getAttribute('dragit','enable').enable;

  if(isEnable=='true')
  {
    drop(element);
  }

}, true);


},

tick : function ()
{
  //console.clear();
  //if(active!=null)
  //  console.log(GetWorldPositionN(active));
}
});



var cam = document.querySelector('a-camera');


var parent=null;
var active=null;
var pos=null;
var scale=null;


function drag(item)
{

  if(active==null)
  {
      parent=item.parentNode;

      pos=item.getAttribute('position');
      scale=item.getAttribute('scale');
      active=item;

      //active.setAttribute('id','activeID')

      let ctrl = document.querySelector(controllerId);
      //console.log(ctrl.object3D.el);
      ctrl.object3D.el.appendChild(item);
      item.setAttribute('position','0 0 -1');
      item.setAttribute('scale','0.25 0.25 0.25');
  }

}



function drop(item)
{

    if(active!=null)
    {
      let gindex=-1;
      hit_objects.forEach(myFunction);

      function myFunction(item, index, arr) {
        if(item.id=='test2')
        {
          gindex=index;
          return;
        }
      }

      if(gindex==-1)
      {
        parent.appendChild(active);
      }
      else {
        hit_objects[gindex].appendChild(active);
        active.setAttribute('position','0 0 0');
      }

      active=null;
    }
}
