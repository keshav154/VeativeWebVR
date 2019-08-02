AFRAME.registerComponent('color_hover', {
    init: function() {

        var elename = this.el.getAttribute('id');

        //this.el.setAttribute('material', 'offset', {x:0.05 , y:0});
        //this.el.setAttribute('material', 'repeat', {x:0.95 , y:0.95});
        this.el.setAttribute('material', 'src', '#tex_menu_off');
        this.el.setAttribute('material', 'color', 'white');
        //this.el.setAttribute('material', 'opacity', '1');

        //console.log(this.el.getAttribute('material'));

        this.el.addEventListener('mouseenter', function(evt) {
            ChangeColorToGreen(this);

        });

        this.el.addEventListener('mouseleave', function(evt) {
            ChangeColorToWhite(this);


        });

    }
});



function ChangeColorToGreen(element) {
    element.setAttribute('text', 'color', '#4df215');
    element.setAttribute('material', 'src', '#tex_menu_on');
    //console.log("I am here2");
}

function ChangeColorToWhite(element) {
    element.setAttribute('text', 'color', 'white');
    element.setAttribute('material', 'src', '#tex_menu_off');
    //console.log("I am here3");
}
