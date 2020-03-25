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
AFRAME.registerComponent("click_sound", {
    schema: {
        enable: {
            type: "string",
            default: "true"
        }
    },

    init: function() {
        var elename = this.el.getAttribute("id");
        var element = this.el;
        console.log("el inside register component", element);

        this.el.addEventListener("click", function(evt) {
            var entity = document.querySelector("[sound]");
            var soundplay = element.getAttribute("click_sound", "enable").enable;

            if (entity != null) {
                if (soundplay == "true") {
                    entity.components.sound.playSound();
                }
            }
        });

        this.el.addEventListener("mouseenter", function(evt) {
            var entity = document.querySelector("#s_hover");

            if (entity != null) {
                entity.components.sound.playSound();
            }
        });
    }
});

///////////////////////////////////////////////////////////////////
//////////  SetActive True/False
AFRAME.registerComponent("setactive", {
    schema: {
        value: {
            type: "string",
            default: "true"
        },
        scale: {
            type: "number",
            default: 1.0
        }
    },

    init: function() {},

    update: function() {
        if (this.data.value == "true") {
            this.el.setAttribute("visible", "true");
            this.el.setAttribute("scale", {
                x: this.data.scale,
                y: this.data.scale,
                z: this.data.scale
            });
        }

        if (this.data.value == "false") {
            this.el.setAttribute("visible", "false");
            this.el.setAttribute("scale", {
                x: 0.0,
                y: 0.0,
                z: 0.0
            });
        }
    }
});

var t = 0;

AFRAME.registerComponent("rot", {
    tick: function(time, timeDelta) {
        t += timeDelta / 30;
        this.el.setAttribute("rotation", {
            x: 0,
            y: t,
            z: 0
        });
    }
});

///////////////////////////////////////////////////////
///////////////// Overloaded method for Entity Enable/Disable
function SetActive(id, bool, el, scale = 1) {
    //var prefix = "#";
    //var entityId = prefix.concat(id);
    var setActiveAttr = {};

    if (el === undefined) {
        entity = document.querySelector(id);
        if (entity == null) {
            setActiveAttr = {
                el: el,
                exception: "Exception : Id not found " + id,
                entityState: entity
            };
        }
    } else if (bool) {
        entity = document.createElement("a-entity");
        entity.setAttribute("id", id);
        entity.setAttribute("visible", true);
        entity.setAttribute("scale", {
            x: scale,
            y: scale,
            z: scale
        });

        setActiveAttr = {
            exception: "No Exception",
            entityState: entity,
            entityId: id,
            visible: "true",
            scale: {
                x: scale,
                y: scale,
                z: scale
            }
        };
    } else if (!bool) {
        entity = document.createElement("a-entity");
        entity.setAttribute("id", id);
        entity.setAttribute("visible", "false");
        entity.setAttribute("scale", {
            x: 0.0,
            y: 0.0,
            z: 0.0
        });

        setActiveAttr = {
            entityState: entity,
            entityId: id,
            visible: "false",
            scale: {
                x: 0.0,
                y: 0.0,
                z: 0.0
            }
        };
    }
    return setActiveAttr;
}

///////////////////////////////////////////////////////
////////// Add Set Method on onclick event
function SetOnClickListener(id, method, el) {
    var entity; // = document.querySelector(id);
    var SetOnClickListenerAttr;

    if (el === undefined) {
        entity = document.querySelector(id);

        if (entity != null) {
            entity.setAttribute("onclick", method);
        } else {
            SetOnClickListenerAttr = {
                exception: "Exception : Id not found ID: " + id
            };
        }
    } else {
        entity = document.createElement("a-entity");

        if (entity != null) {
            entity.setAttribute("id", id);
            entity.setAttribute("onclick", method);
            SetOnClickListenerAttr = {
                id: id,
                onClick: method,
                entity: entity
            };
        } else {
            // console.log("Exception : Id not found ID: ", id);
        }
    }

    return SetOnClickListenerAttr;
}

///////////////////////////////////////////////////////
////////// Play Animation
function PlayAnimation(id, el) {
    var entity;
    var playAnimationAttr;
    if (el == undefined) {
        entity = document.querySelector(id);

        if (entity != null) {
            entity.setAttribute("animation", "enabled", "true");
        } else {
            playAnimationAttr = {
                id: id,
                entity: entity,
                exception: "Exception : Id not found ID: " + id
            };
            // console.log("Exception : Id not found ID: ", id);
        }
    } else {
        entity = document.createElement("a-entity");
        entity.setAttribute("id", id);
        entity.setAttribute("animation", "enabled", "true");
        playAnimationAttr = {
            id: id,
            entity: entity
        };
    }

    return playAnimationAttr;
}

///////////////////////////////////////////////////////
////////// Add Event Listener for Animation
function AddAnimationCallBack(id, method, el) {
    // var entity = document.querySelector(id);
    // if (entity != null) {
    //   entity.addEventListener("animationcomplete", method);
    // } else {
    //   // console.log("Exception : Id not found ID: ", id);
    // }

    var entity;
    var playAnimationAttr;
    if (el == undefined) {
        entity = document.querySelector(id);

        if (entity != null) {
            entity.addEventListener("animationcomplete", method);
        } else {
            playAnimationAttr = {
                id: id,
                entity: entity,
                exception: "Exception : Id not found ID: " + id
            };
            // console.log("Exception : Id not found ID: ", id);
        }
    } else {
        entity = document.createElement("a-entity");
        entity.setAttribute("id", id);
        entity.addEventListener("animationcomplete", method);
        playAnimationAttr = {
            id: id,
            entity: entity
        };
    }

    return playAnimationAttr;
}

function SetPosition(id, _x, _y, _z, el) {
    var SetPositionAttr;
    var entity;
    if (el === undefined) {
        entity = document.querySelector(id);

        if (entity == null) {
            console.log("Exception : Id not found ", id);
            SetPositionAttr = {
                id: id,
                exception: "Exception : Id not found " + id
            };
            // return id;
        } else {
            entity.setAttribute("position", {
                x: _x,
                y: _y,
                z: _z
            });
        }
    } else {
        // unit test area
        entity = document.createElement("a-entity");
        entity.setAttribute("id", id);
        entity.setAttribute(
            "pos",
            JSON.stringify({
                x: _x,
                y: _y,
                z: _z
            })
        );

        SetPositionAttr = {
            id: id,
            entity: entity
        };
    }
    return SetPositionAttr;
}

function SetRotation(id, _x, _y, _z, el) {
    var SetRotationAttr;
    var entity;



    if (el === undefined) {
        console.log("elelelelel:----- ", el)
        entity = document.querySelector(id);
        if (entity == null) {
            return;
        }

        entity.setAttribute("rotation", {
            x: _x,
            y: _y,
            z: _z
        });

        SetRotationAttr = {
            el: el
        };

    } else {
        entity = document.createElement("a-entity");
        entity.setAttribute("id", id);

        // rotation is used as rotations to mock it and get the values during test case.
        entity.setAttribute("rotations", JSON.stringify({
            x: _x,
            y: _y,
            z: _z
        }));

        SetRotationAttr = {
            id: id,
            entity: entity
        };
    }
    return SetRotationAttr;
}

///////////////////////////////////////////////////
///////// GetEntityById

function GetEntityById(id, el) {
    var entity;
    var GetEntityByIdAttr;

    if (el === undefined) {
        entity = document.querySelector(id);

        if (entity != null) {
            GetEntityByIdAttr = { entity: entity };
        } else {
            console.log("Exception : Id not found ID: ", id);
        }
    } else {
        entity = document.createElement("a-entity");
        entity.setAttribute("id", id);
        GetEntityByIdAttr = { entity: entity };
    }

    return GetEntityByIdAttr;
}

///////////////////////////////////////////////////////
//////////////////// Disable Click sound

function ClickSound(id, bool, el) {
    var entity;
    var ClickSoundAttr;
    if (el === undefined) {
        entity = GetEntityById(id);

        if (entity) {
            if (bool) {
                entity.setAttribute('click_sound', 'enable', 'true');
            } else {
                entity.setAttribute('click_sound', 'enable', 'false');
            }
        }
    } else {
        entity = document.createElement("a-entity");
        entity.setAttribute("id", id);

        if (bool) {
            entity.setAttribute("click_sounds", "enable", "true");

            ClickSoundAttr = {
                id: id,
                entity: entity,
                bool: bool
            };
            // console.log("ClickSoundAttr Pankaj kumar", ClickSoundAttr);
        } else {
            entity.setAttribute("click_sounds", "enable", "false");

            ClickSoundAttr = {
                id: id,
                entity: entity,
                bool: bool
            };
            // console.log("ClickSoundAttr Pankaj kumar", ClickSoundAttr);
        }
    }
    return ClickSoundAttr;
}

//////////////////////////////
///////// Change Text Value
function utility_changeText(id, txt, el) {
    var entity;
    var utility_changeTextAttr;
    if (el === undefined) {
        if (entity != null) {
            entity = GetEntityById(id);
            entity.setAttribute("text", {
                value: txt
            });
        }
        return entity;
    } else {
        var textval = {
            value: txt
        };
        console.log("textval", textval);
        entity = document.createElement("a-entity");
        entity.setAttribute("id", id);
        entity.setAttribute("text", textval);
        utility_changeTextAttr = {
            id: id,
            value: txt,
            attrs: entity.attributes
        };

        return utility_changeTextAttr;
    }
}