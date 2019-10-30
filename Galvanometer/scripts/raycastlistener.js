var hit_objects=[];

AFRAME.registerComponent('raycastlistener', {

  schema: {
     enable: {type: 'string', default: 'true'}
  },

init: function () {
  // Use events to figure out what raycaster is listening so we don't have to
  // hardcode the raycaster.

  var element=this.el;

  this.el.addEventListener('raycaster-intersected', evt => {

    let isEnable=element.getAttribute('raycastlistener','enable').enable;

    if(isEnable=='true')
    {
      this.raycaster = evt.detail.el;
    }

  });
  this.el.addEventListener('raycaster-intersected-cleared', evt => {

    let isEnable=element.getAttribute('raycastlistener','enable').enable;

    if(isEnable=='true')
    {
      this.raycaster = null;
      setTimeout(hit_ClearObjects,100);
    }

  });
},

tick: function () {



  if (!this.raycaster) {
    return; }  // Not intersecting.

//console.log("Hello pankaj verma ",hit_objects);

  let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
  if (!intersection) {
    hit_DeleteObject(this.el);
    return;
  }
  else {
    hit_AddObject(this.el);
  }

}
});

function hit_AddObject(item)
{
 if(hit_objects.indexOf(item)==-1)
 hit_objects.push(item);
}

function hit_DeleteObject(item)
{
 if(hit_objects.indexOf(item)!=-1)
 hit_objects.push(item);
}

function hit_ClearObjects()
{
 hit_objects=[];
}
