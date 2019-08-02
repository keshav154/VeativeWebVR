AFRAME.registerComponent('hover_region', {
    init: function() {

        var elename = this.el.getAttribute('id');
        var fullid = '#l_info_'.concat(elename);
        this.el.addEventListener('mouseenter', function(evt) {
            ToggleLabel(fullid, true);

        });

        this.el.addEventListener('mouseleave', function(evt) {
            ToggleLabel(fullid, false);


        });
    }
});



function ToggleLabel(id, toggle) {
    if (isHover) {
        SetActive(id, toggle);
        if (toggle)
            PlayVO2(id);
        if (!toggle)
            StopVO2(id);
    }
}
