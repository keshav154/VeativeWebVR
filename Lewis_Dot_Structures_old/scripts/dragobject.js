var dragobject_callback_instance=null;

dragobject_dragables=[];

function dragobject_set_callback(instance)
{
  dragobject_callback_instance=instance;
}


AFRAME.registerComponent('dragit', {

schema: {
   enabled: {type: 'string', default: 'true'}
},

init: function () {

var element=this;

this.el.addEventListener('mousedown', function (evt) {


  if(dragobject_dragables.indexOf(this.id)>-1)
  dragobject_dragObject(this);

});

this.el.addEventListener('mouseup', function (evt) {


  if(dragobject_dragables.indexOf(this.id)>-1)
  dragobject_dropObject(this);


});


window.addEventListener("keyup", function(event) {

  if(dragobject_dragables.indexOf(this.id)>-1)
  dragobject_dropObject(this);


}, true);


},


tick : function ()
{

}
});


var dragobject_parent=null;
var dragobject_active=null;
var dragobject_pos=null;
var dragobject_scale=null;


function dragobject_dragObject(item)
{

  if(dragobject_active==null)
  {
      dragobject_parent=item.parentNode;

      dragobject_active=item;
      let ctrl = document.querySelector(controllerId);
      ctrl.object3D.el.appendChild(item);
      if(dragobject_callback_instance!=null)
      dragobject_callback_instance.onDragObject(item);
  }

}



function dragobject_dropObject(item)
{
    if(dragobject_active!=null)
    {
      if(dragobject_callback_instance!=null)
      dragobject_callback_instance.onDropObject(item);

      dragobject_active=null;
    }
}


function dragobject_addDragables(item)
{
  if(dragobject_dragables.indexOf(item)==-1)
  dragobject_dragables.push(item)
}

function dragobject_removeDragables(item)
{
  let i=dragobject_dragables.indexOf(item);
  if(i>-1)
  {
    dragobject_dragables.splice(i, 1);
  }
}

function dragobject_hasDragables(item)
{
  return dragobject_dragables.indexOf(item)>-1;
}

function dragobject_clearDragables()
{
  dragobject_dragables=[];
}
