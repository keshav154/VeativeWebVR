///////////     By: Pankaj Verma
///////         Last Updated: 05/07/19 03:20
//------------------------------------------
///     Update: 05/07/19 03:20
///     Description: Bugs Fixed : ClickSound(id,bool)
///                  Add Method: utility_changeText(id,txt)    
//
//------------------------------------------
///     Update: 04/07/19 4:30
///     Description: Add Method
///         1. GetEntityById(id)
///         2. ClickSound(id,bool)
///         3. Update component click_sound



///////////////////////////////////////////////////////////////////
//////////  Click Sound
AFRAME.registerComponent('click_sound', {

    schema: {
        enable: {
            type: 'string',
            default: 'true'
        }
    },

    init: function() {

        var elename = this.el.getAttribute('id');
        var element = this.el;

        this.el.addEventListener('click', function(evt) {

            var entity = document.querySelector('[sound]');
            var soundplay = element.getAttribute('click_sound', 'enable').enable;

            if (entity != null) {
                if (soundplay == 'true') {
                    entity.components.sound.playSound();
                }
            }
        });


        this.el.addEventListener('mouseenter', function(evt) {

            var entity = document.querySelector('#s_hover');

            if (entity != null) {
                entity.components.sound.playSound();
            }

        });

    }

});




///////////////////////////////////////////////////////////////////
//////////  SetActive True/False
AFRAME.registerComponent('setactive', {

    schema: {
        value: {
            type: 'string',
            default: 'true'
        },
        scale: {
            type: 'number',
            default: 1.0
        }
    },


    init: function() {

    },


    update: function() {


        if (this.data.value == 'true') {
            this.el.setAttribute('visible', 'true');
            this.el.setAttribute("scale", {
                x: this.data.scale,
                y: this.data.scale,
                z: this.data.scale
            });
        }

        if (this.data.value == 'false') {
            this.el.setAttribute('visible', 'false');
            this.el.setAttribute("scale", {
                x: 0.0,
                y: 0.0,
                z: 0.0
            });
        }

    }
});



///////////////////////////////////////////////////////
///////////////// Entity Enable/Disable
// function SetActive(id,bool)
// {
//    // var prefix = "#";
//    // var entityId = prefix.concat(id);
//    var entity = document.querySelector(id);


//    if(entity==null)
//    {
//        console.log('Exception : Id not found' ,id);
//        return;
//    }


//    if(bool)
//    {
//        entity.setAttribute('visible', 'true');
//        entity.setAttribute ("scale",
//        {
//            x: 1.0,y: 1.0,z: 1.0
//        });
//    }
//    if(!bool)
//    {
//        entity.setAttribute('visible', 'false');
//        entity.setAttribute ("scale",
//        {
//            x: 0.0,y: 0.0,z: 0.0
//        });
//    }

// }


///////////////////////////////////////////////////////
///////////////// Overloaded method for Entity Enable/Disable
function SetActive(id, bool, scale) {
    //var prefix = "#";
    //var entityId = prefix.concat(id);
    var entity = document.querySelector(id);
    if (entity == null) {
        console.log('Exception : Id not found', id);
        return;
    }

    if (bool) {
        entity.setAttribute('visible', 'true');
        entity.setAttribute("scale", {
            x: scale,
            y: scale,
            z: scale
        });
    }
    if (!bool) {
        entity.setAttribute('visible', 'false');
        entity.setAttribute("scale", {
            x: 0.0,
            y: 0.0,
            z: 0.0
        });
    }

}


///////////////////////////////////////////////////////
////////// Add Set Method on onclick event
function SetOnClickListener(id, method) {
    var entity = document.querySelector(id);

    if (entity != null) {
        entity.setAttribute('onclick', method);
    } else {
        console.log("Exception : Id not found ID: ", id);
    }

}


///////////////////////////////////////////////////////
////////// Play Animation
function PlayAnimation(id) {
    var entity = document.querySelector(id);

    if (entity != null) {
        entity.setAttribute('animation', 'enabled', 'true');
    } else {
        console.log("Exception : Id not found ID: ", id);
    }
}




///////////////////////////////////////////////////////
////////// Add Event Listener for Animation
function AddAnimationCallBack(id, method) {
    var entity = document.querySelector(id);
    if (entity != null) {
        entity.addEventListener('animationcomplete', method);
    } else {
        console.log("Exception : Id not found ID: ", id);
    }
}



function SetPosition(id, _x, _y, _z) {
    var entity = document.querySelector(id);
    if (entity == null) {
        console.log('Exception : Id not found', id);
        return;
    }

    entity.setAttribute("position", {
        x: _x,
        y: _y,
        z: _z
    });
}



///////////////////////////////////////////////////
///////// GetEntityById

function GetEntityById(id) {
    var entity = document.querySelector(id);
    if (entity != null) {
        return entity;
    } else {
        console.log("Exception : Id not found ID: ", id);
    }
}



///////////////////////////////////////////////////////
//////////////////// Disable Click sound

function ClickSound(id, bool) {
    var entity = GetEntityById(id);
    if (bool)
        entity.setAttribute('click_sound', 'enable', 'true');
    else
        entity.setAttribute('click_sound', 'enable', 'false');
}


//////////////////////////////
///////// Change Text Value
function utility_changeText(id, txt) {
    var entity = GetEntityById(id)
    entity.setAttribute("text", {
        value: txt
    });
}