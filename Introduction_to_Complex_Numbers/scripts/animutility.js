///////////////////////////////////////////////////////
////////// Play Animation
function PlayAnimation(id)
{
    var entity = document.querySelector(id);

    if(entity!=null)
    {
        entity.setAttribute('animation','enabled','true');
    }
    else
    {
        console.log("Exception : Id not found ID: ",id);
    }
}




///////////////////////////////////////////////////////
////////// Add Event Listener for Animation
function AddAnimationCallBack(id,method)
{
    var entity = document.querySelector(id);
    if(entity!=null)
    {
        entity.addEventListener('animationcomplete', method);
    }
    else
    {
        console.log("Exception : Id not found ID: ",id);
    }
}



///////////////////////////////////////////////////////
////////// Play Animation __For animation-mixer
// function PlayAnimation_mixer(id)
// {
//     var entity = document.querySelector(id);
//
//     if(entity!=null)
//     {
//         entity.setAttribute('animation','enabled','true');
//     }
//     else
//     {
//         console.log("Exception : Id not found ID: ",id);
//     }
// }




///////////////////////////////////////////////////////
////////// Add Event Listener for Animation
function AddAnimationCallBack_mixer(id,method)
{
    var entity = document.querySelector(id);
    if(entity!=null)
    {
        entity.addEventListener('animation-finished', method);
    }
    else
    {
        console.log("Exception : Id not found ID: ",id);
    }
}
