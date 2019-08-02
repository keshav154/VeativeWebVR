gazeDownObject = null;
gazeUpObject = null;
gazeObject = null;
isMouseDown = false;

AFRAME.registerComponent('cardboard_input', {

    init: function() {


        this.el.addEventListener('mouseenter', function(evt) {
            gazeObject = this;
            //console.log('+++ ',this.getAttribute('id'));
        });


        this.el.addEventListener('mouseleave', function(evt) {
            //console.log('--- ',gazeObject.getAttribute('id'));
            gazeObject = null;
        });


    }
});


window.addEventListener("keydown", function(event) {
    //alert("key: " + event.key + ", code: " + event.code);
    if (event.code == 'Enter' && !isMouseDown) {
        isMouseDown = true;
        gazeDownObject = gazeObject;
        //console.log("-------------------",gazeObject.getAttribute('id'));
        TryFireMouseDownEvent();
    }

}, true);


window.addEventListener("keyup", function(event) {
    //alert("key: " + event.key + ", code: " + event.code);
    if (event.code == 'Enter') {
        isMouseDown = false;
        gazeUpObject = gazeObject;
        //console.log("+++++++++++++++ ",gazeObject.getAttribute('id'));
        TryFireMouseUpEvent();
        TryFireClickEvent();
    }

}, true);



function TryFireClickEvent() {
    if (gazeUpObject != gazeDownObject) {
        console.log("Gaze is null");
    } else if (gazeUpObject != null) {
        gazeObject.emit('click');
    }

    gazeDownObject = null;
    gazeUpObject = null;
}



function TryFireMouseDownEvent() {
    if (gazeDownObject == null) {
        console.log("GazeDown is null");
    } else {
        gazeObject.emit('mousedown');
    }
}


function TryFireMouseUpEvent() {
    if (gazeUpObject == null) {
        console.log("GazeUp is null");
    } else {
        gazeObject.emit('mouseup');
    }
}