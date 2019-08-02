////////////////////////////////////////////////////////////////////
/////////////   Play Voice Over On Hover
voEntityPlaying = null;
voIsPlaying = false;
isPlaying = false;

voEntityPlaying2 = null;
voIsPlaying2 = false;
isPlaying2 = false;

AFRAME.registerComponent('vo_hover', {
    init: function() {

        var elename = this.el.getAttribute('id');

        var soundId = '#s_'.concat(elename);

        this.el.addEventListener('mouseenter', function(evt) {

            // var entity = document.querySelector(soundId);

            // if(entity!=null)
            // {
            //    entity.components.sound.playSound();
            // }

            PlayVO('#'.concat(elename));

        });

        this.el.addEventListener('mouseleave', function(evt) {

            // var entity = document.querySelector(soundId);

            // if(entity!=null)
            // {
            //    entity.components.sound.stopSound();
            // }

            StopVO(1);

        });


        this.el.addEventListener('click', function(evt) {

            // var entity = document.querySelector(soundId);

            // if(entity!=null)
            // {
            //    entity.components.sound.stopSound();
            // }
            StopVO(2);

        });


    }
});




////////////////////////////////////////////////////////////////////
/////////////   Play Voice Enable


AFRAME.registerComponent('vo_enable', {

    schema: {
        play: {
            type: 'string',
            default: 'true'
        },
        stopOnDisable: {
            type: 'string',
            default: 'true'
        }
    },


    init: function() {

        //elename=this.el.getAttribute('id');

        // soundId='#s_'.concat(elename);

        // entity = document.querySelector(soundId);



    },


    tick: function(time, timeDelta) {

        // Do something on every scene tick or frame.
        //console.log("isPlaying ",isPlaying," visible",this.el.getAttribute('visible'));


        if (this.data.play == 'false') {
            return;
        }


        //console.log(this.el.getAttribute('visible'));


        if (!this.el.getAttribute('visible')) {
            if (isPlaying2 && this.data.stopOnDisable == 'true') {
                //StopVO2(3);
                //console.log('Stoping Vo 1',voEntityPlaying);
            }
            if (isPlaying2) {
                isPlaying2 = false;
            }

        } else {
            if (!isPlaying2) {
                //PlayVO2('#'.concat(this.el.getAttribute('id')));
                isPlaying2 = true;
            }
        }
    }


});




function PlayVO(id) {
    try {
        //console.log("Playing VO : ",id);
        var soundId = '#s_'.concat(id.substring(1));
        var entity = document.querySelector(soundId);


        entity.components.sound.stopSound();
        entity.components.sound.playSound();
        voEntityPlaying = entity;
        voIsPlaying = true;



    } catch (err) {
        console.log('Error in playing VO id : ', id);
    }
}


function StopVO(stid) {
    try {
        //console.log("Stoping VO : ",stid,'  ',voEntityPlaying);
        voEntityPlaying.components.sound.stopSound();
        voIsPlaying = false;
    } catch (err) {
        console.log('Error in Stoping VO');
    }
}



function PlayVO2(id) {
    try {
        console.log("Playing VO : ", id.substring(1));
        var soundId = '#s_'.concat(id.substring(1));
        var entity = document.querySelector(soundId);
        StopVO2(10);
        entity.components.sound.playSound();
        voEntityPlaying2 = entity;
        voIsPlaying2 = true;

    } catch (err) {
        console.log('Error in playing VO id : ', id);
    }
}


function StopVO2(stid) {
    try {
        //console.log("Stoping VO : ",stid,'  ',voEntityPlaying2);
        voEntityPlaying2.components.sound.stopSound();
        voIsPlaying2 = false;
    } catch (err) {
        console.log('Error in Stoping VO');
    }
}
