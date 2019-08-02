////////// Play Animation Using AnimationMixer
function AnimationMixerPlay(id) {
    var entity = document.querySelector(id);

    if (entity != null) {
        entity.setAttribute('animation-mixer', 'timeScale', 1);
    } else {
        console.log("Exception : Id not found ID: ", id);
    }
}


///////////////////////////////////////////////////////
////////// pause Animation Using AnimationMixer
function AnimationMixerPause(id) {
    var entity = document.querySelector(id);

    if (entity != null) {
        entity.setAttribute('animation-mixer', 'timeScale', 0);
    } else {
        console.log("Exception : Id not found ID: ", id);
    }
}
