///////////////////////////////////////////////////////////////////
////////// SetActive True/False
var highlight_reduce = true;

AFRAME.registerComponent('highlight', {

    tick: function() {

        let scale = this.el.getAttribute('scale').x;
        let opacity = this.el.getAttribute('material', 'opacity');

        this.el.setAttribute('material', 'opacity', (2 - scale));

        if (scale >= 2) {
            highlight_setReduce(true);
        }

        if (scale <= 1.5) {
            highlight_setReduce(false);
        }
        if (highlight_getReduce()) {
            let newscale = scale - 0.03;
            this.el.setAttribute("scale", {
                x: newscale,
                y: newscale,
                z: newscale
            });
        } else {
            let newscale = scale + 0.03;
            this.el.setAttribute("scale", {
                x: newscale,
                y: newscale,
                z: newscale
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
