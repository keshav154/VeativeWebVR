var hydrogenfluorindrag_dropable=[];


var hydrogenfluorindrag_Top=0;
var hydrogenfluorindrag_Bottom=0;
var hydrogenfluorindrag_Right=0;
var hydrogenfluorindrag_Center=0;


function hydrogenfluorinDragDropClass()
{
    this.onDragObject = function (item)
    {
      hydrogenfluorindrag_dragObject(item);
    },

    this.onDropObject = function (item)
    {
      hydrogenfluorindrag_dropObject(item);
    }
}

function hydrogenfluorindrag_dragObject(item)
{
  console.log("drag object ",item);

  let pos='0 0 -2';
  let scale='0.02 0.02 0.02';

  item.setAttribute('position',pos);
  item.setAttribute('setactive','value',true);
  item.setAttribute('setactive','scale',scale);
}

function hydrogenfluorindrag_dropObject(item)
{

  let detect_object="";
  let gindex=-1;

   hit_objects.forEach(myFunction);

   if(hit_objects.length==0)
   gindex=-10;

   function myFunction(itemL, index, arr)
   {

     let i=hydrogenfluorindrag_dropable.indexOf(itemL.id);

     console.log(hydrogenfluorindrag_dropable);
     console.log(itemL.id);

     if(i>-1)
     {
       gindex=index;
       detect_object=itemL;
       hydrogenfluorindrag_dropable.splice(i, 1);
     }
   }

   console.log("gindex ",gindex);

   if(gindex>-1)
   {

       detect_object.appendChild(item);
       pos="0 0 0.15";
       let scale='0.05 0.05 0.05';
       item.setAttribute('position',pos);
       item.setAttribute('setactive','value',true);
       item.setAttribute('scale',scale);
       dragobject_removeDragables(item.id);

       if(detect_object.id=='HF_CuboidTopRightR_AS'||detect_object.id=='HF_CuboidTopRightL_AS')
         {
            hydrogenfluorindrag_Top++;
         }
       else if(detect_object.id=='HF_CuboidBottomRightR_AS'||detect_object.id=='HF_CuboidBottomRightL_AS')
         {
            hydrogenfluorindrag_Bottom++;
         }
       else if(detect_object.id=='HF_CuboidRightUp_AS'||detect_object.id=='HF_CuboidRightDown_AS')
         {
           hydrogenfluorindrag_Right++;
         }
       else if(detect_object.id=='HF_CuboidCenterDown_AS'||detect_object.id=='HF_CuboidCenterUp_AS')
         {
            hydrogenfluorindrag_Center++;
         }


   }
   else {

     dragobject_parent.appendChild(item);
     console.log(dragobject_parent);
     item.setAttribute('setactive','value',true);


   }

}
