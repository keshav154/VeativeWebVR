var mousehover_enable=false;


AFRAME.registerComponent('mouse_hover', {
  init: function () {

  var elename=this.el.getAttribute('id');

  this.el.addEventListener('mouseenter', function (evt) {

    if(mousehover_get())
    {
      SetActive('#'.concat('i_').concat(elename),true);
    }
  });

  this.el.addEventListener('mouseleave', function (evt) {

    if(mousehover_get())
    {
      SetActive('#'.concat('i_').concat(elename),false);
    }

  });

  this.el.addEventListener('mouseclick', function (evt) {

    // if(mousehover_get())
    // {
    //   let id='#'.concat('cm_').concat(elename);
    //   SetActive(id,true,0.1);
    //   setTimeout('mousehover_disableModel',2000,id);
    // }
  });

  }
  });


function mousehover_set(bool)
{
  mousehover_enable=bool;
}

function mousehover_get()
{
  return mousehover_enable;
}

// function mousehover_disableModel(id)
// {
//   SetActive(id,false);
// }
