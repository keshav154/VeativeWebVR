//
//  ///////////     By: Pankaj Verma
// ///////          Last Updated: 16/07/19 03:20
// //-----------------------------------------------
//
//
//   AFRAME.registerComponent('player_movement', {
//
//   init: function () {
//
//       movement_camera = document.querySelector('#main_camera');
//       movement_player = document.querySelector('#player');
//
//       movement_player.addEventListener('collide', function (e) {
//       console.log('Player has collided with body #' , e.detail.body.el.getAttribute('id'));
//
//
//
//
//         // if(e.detail.body.el.getAttribute('id').includes('Highlighhted'))
//         // {
//         //   if(e.detail.body.el.getAttribute('id')!=null)
//         //   console.log("----------- ",e.detail.body.el.getAttribute('id').includes('Highlighhted'));
//         //   ClickOnHighlighted();
//         // }
//
//       e.detail.target.el;  // Original entity (playerEl).
//       e.detail.body.el;    // Other entity, which playerEl touched.
//       e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
//       e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
//
//     });
//
//   },
//
//   tick: function () {
//
//   if(!movement_enabled)
//     return;
//
//       if(movement_isUpPressed)
//         movement_moveForward();
//       if(movement_isDownPressed)
//         movement_moveBackword();
//
//   }
//
//   });
//
//
//
// var movement_player=null;
// var movement_camera=null;
//
// var movement_enabled=true;
//
// var movement_isUpPressed=false;
// var movement_isDownPressed=false;
// var movement_isLeftPressed=false;
// var movement_isRightPressed=false;
//
//
//
// window.addEventListener('keydown', function (e) {
//
//
//  if(e.code=='ArrowUp')
//  {
//     movement_isUpPressed=true;
//  }
//
//  if(e.code=='ArrowDown')
//  {
//     movement_isDownPressed=true;
//  }
//
//  if(e.code=='ArrowLeft')
//  {
//     movement_isLeftPressed=true;
//  }
//
//  if(e.code=='ArrowRight')
//  {
//     movement_isRightPressed=true;
//  }
//
// });
//
//
// window.addEventListener('keyup', function (e) {
//
//
// if(e.code=='ArrowUp')
//  {
//     movement_isUpPressed=false;
//  }
//
//  if(e.code=='ArrowDown')
//  {
//     movement_isDownPressed=false;
//  }
//
//  if(e.code=='ArrowLeft')
//  {
//     movement_isLeftPressed=false;
//  }
//
//  if(e.code=='ArrowRight')
//  {
//     movement_isRightPressed=false;
//  }
//
//
//  if(e.code=='ArrowLeft')
//  {
//     movement_rotateLeft();
//  }
//
//  if(e.code=='ArrowRight')
//  {
//     movement_rotateRight();
//  }
//
// });
//
// function OnMovement()
// {
//   // //
//    let entity1 = document.querySelector('#Highlighhted');
//    let entity1enable=entity1.getAttribute('scale').x;
//    let stp=GetWorldPosition(entity1);
//    let pp=GetWorldPosition(movement_player);
//    var d = stp.distanceTo( pp );
//    // console.log(d);
//
//    if(entity1enable>0&&d<1)
//    {
//      ClickOnHighlighted();
//    }
//
//    let entity2 = document.querySelector('#NextHighlighhted');
//    let entity2enable=entity2.getAttribute('scale').x;
//    console.log("hfdhdfha", entity2enable);
//    let stp2=GetWorldPosition(entity2);
//    let pp2=GetWorldPosition(movement_player);
//    var d2 = stp2.distanceTo( pp2 );
//    console.log(d2);
//
//    if(entity2enable>0&&d2<8)
//    {
//      ClickNextHighlighted();
//    }
//
// }
//
//
// function movement_moveForward()
// {
//
//    var angle = GetWorldRotation(movement_camera);
//    var x = 1 * Math.cos(angle.y * Math.PI / 180)
//    var y = 1 * Math.sin(angle.y * Math.PI / 180)
//    var pos = movement_player.getAttribute("position")
//    pos.x -= y/10;
//    pos.z -= x/10;
//    movement_player.setAttribute("position", pos);
//
//  OnMovement();
//
// }
//
//
// function movement_moveBackword()
// {
//   var angle = GetWorldRotation(movement_camera);
//   var x = 1 * Math.cos(angle.y * Math.PI / 180)
//   var y = 1 * Math.sin(angle.y * Math.PI / 180)
//   var pos = movement_player.getAttribute("position")
//   pos.x += y/10;
//   pos.z += x/10;
//   movement_player.setAttribute("position", pos);
//
//   OnMovement();
// }
//
//
// function movement_rotateLeft()
// {
//   let rot=movement_player.getAttribute('rotation');
//   rot.y = rot.y +20;
//   movement_player.setAttribute('rotation',rot);
// }
//
//
// function movement_rotateRight()
// {
//   let rot=movement_player.getAttribute('rotation');
//   rot.y = rot.y -20;
//   movement_player.setAttribute('rotation',rot);
// }
//
//
// function ClickOnHighlighted()
// {
//
//
// 	SetActive('#Highlighhted',false);
// 	SetActive("#p_L2_MoveToHighlighted",false);
// 	SetActive("#p_L2_ClickOnLamp",true,.1);
//  	PlayVO2("#p_L2_ClickOnLapm");
// 	SetActive('#Q1',true);
//
// }
