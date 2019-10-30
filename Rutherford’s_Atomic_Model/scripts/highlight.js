///////////////////////////////////////////////////////////////////
////////// SetActive True/False
var highlight_reduce = true;
var highlight_max = 23;
var highlight_min = 15;

AFRAME.registerComponent('highlight', {

    tick: function() {

        let scale = this.el.getAttribute('scale').x;
        let opacity = this.el.getAttribute('material', 'opacity');

        //this.el.setAttribute('material', 'opacity', (2 - scale));

        if (scale >= highlight_max) {
            highlight_setReduce(true);
        }

        if (scale <= highlight_min) {
            highlight_setReduce(false);
        }
        if (highlight_getReduce()) {
            let newscale = scale - 0.1;
            this.el.setAttribute("scale", {
                x: newscale,
                y: newscale,
                z: 0.5
            });
        } else {
            let newscale = scale + 0.1;
            this.el.setAttribute("scale", {
                x: newscale,
                y: newscale,
                z: 0.5
            });
        }
    }
});

function highlight_setReduce(bool) {
    highlight_reduce = bool;
}

function highlight_getReduce() {
    return highlight_reduce;
}
