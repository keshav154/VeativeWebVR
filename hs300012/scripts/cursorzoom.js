///////////     By: Pankaj Verma
///////         Last Updated: 25/07/19
//-----------------------------------------------
//
// To use cursor zoom add component "cursor-zoom" in <a-cursor>
var gaze_zooming = false;
var gaze_zooming_speed = 1.5;
var gaze_inner = 0.002;
var gaze_outer = 0.007;
AFRAME.registerComponent('cursor-zoom', {
    init: function() {

        this.el.addEventListener('mouseleave', function(evt) {

            gaze_zoom_out();
        });

        this.el.addEventListener('mouseenter', function(evt) {
            //console.log(evt.detail.intersectedEl.getAttribute('cardboard_input'));
            if (evt.detail.intersectedEl.getAttribute('cardboard_input') != null) {
                gaze_zoom_in();
            }

        });
    },

    tick: function() {

        let ir = this.el.getAttribute('geometry').radiusInner;
        let or = this.el.getAttribute('geometry').radiusOuter;
        let speed = 0.001 * gaze_zooming_speed;



        if (gaze_zooming) {
            if (ir < gaze_inner) {
                ir += speed;
                or += speed;
                this.el.setAttribute('geometry', 'radiusInner', ir);
                this.el.setAttribute('geometry', 'radiusOuter', or);
            }
        } else {
            if (ir > gaze_inner) {
                ir -= speed;
                or -= speed;
                this.el.setAttribute('geometry', 'radiusInner', ir);
                this.el.setAttribute('geometry', 'radiusOuter', or);
            }
        }
    }

});

function gaze_zoom_in() {
    gaze_inner = 0.01;
    gaze_outer = 0.016;
    gaze_zooming = true;
}

function gaze_zoom_out() {
    gaze_inner = 0.002;
    gaze_outer = 0.007;
    gaze_zooming = false;
}
