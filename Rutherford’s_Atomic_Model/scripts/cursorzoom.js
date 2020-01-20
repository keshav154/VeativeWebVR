///////////     By: Pankaj Verma
///////         Last Updated: 25/07/19
//-----------------------------------------------
//
// To use cursor zoom add component "cursor-zoom" in <a-cursor>
var gaze_zooming=!1,gaze_zooming_speed=1.5,gaze_inner=.002,gaze_outer=.007;function gaze_zoom_in(){gaze_inner=.01,gaze_outer=.016,gaze_zooming=!0}function gaze_zoom_out(){gaze_inner=.002,gaze_outer=.007,gaze_zooming=!1}AFRAME.registerComponent("cursor-zoom",{init:function(){this.el.addEventListener("mouseleave",function(e){gaze_zoom_out()}),this.el.addEventListener("mouseenter",function(e){null!=e.detail.intersectedEl.getAttribute("cardboard_input")&&gaze_zoom_in()})},tick:function(){let e=this.el.getAttribute("geometry").radiusInner,t=this.el.getAttribute("geometry").radiusOuter,i=.001*gaze_zooming_speed;gaze_zooming?e<gaze_inner&&(e+=i,t+=i,this.el.setAttribute("geometry","radiusInner",e),this.el.setAttribute("geometry","radiusOuter",t)):e>gaze_inner&&(e-=i,t-=i,this.el.setAttribute("geometry","radiusInner",e),this.el.setAttribute("geometry","radiusOuter",t))}});
