///////////////////////////////////////////////////////////////////
////////// SetActive True/False
var highlight_reduceBox = true;

AFRAME.registerComponent('highlightbox', {

    tick: function() {

        let scale = this.el.getAttribute('scale').x;
        let opacity = this.el.getAttribute('material', 'opacity');

        this.el.setAttribute('material', 'opacity', (0.5 - scale));

        if (scale >= 1.02) {
            highlight_setReduceBox(true);
        }

        if (scale <= 1) {
            highlight_setReduceBox(false);
        }
        if (highlight_getReduceBox()) {
            let newscale = scale - 0.001;
            this.el.setAttribute("scale", {
                x: newscale,
                y: newscale,
                z: newscale
            });
        } else {
            let newscale = scale + 0.001;
            this.el.setAttribute("scale", {
                x: newscale,
                y: newscale,
                z: newscale
            });
        }
    }
});

function highlight_setReduceBox(bool) {
    highlight_reduceBox = bool;
}

function highlight_getReduceBox() {
    return highlight_reduceBox;
}
