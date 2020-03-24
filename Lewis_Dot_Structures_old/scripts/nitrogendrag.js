var nitrogendrag_dropable=[];


var nitrogendrag_Top=0;
var nitrogendrag_Bottom=0;
var nitrogendrag_Left=0;
var nitrogendrag_Right=0;



function nitrogenDragDropClass()
{
    this.onDragObject = function (item)
    {
      nitrogendrag_dragObject(item);
    },

    this.onDropObject = function (item)
    {
      nitrogendrag_dropObject(item);
    }
}

function nitrogendrag_dragObject(item)
{
  console.log("drag object ",item);

  let pos='0 0 -2';
  let scale='0.02 0.02 0.02';

  item.setAttribute('position',pos);
  item.setAttribute('setactive','value',true);
  item.setAttribute('setactive','scale',scale);
}

function nitrogendrag_dropObject(item)
{

  let detect_object="";
  let gindex=-1;

   hit_objects.forEach(myFunction);

   if(hit_objects.length==0)
   gindex=-10;

   function myFunction(itemL, index, arr)
   {

     let i=nitrogendrag_dropable.indexOf(itemL.id);

     console.log(nitrogendrag_dropable);
     console.log(itemL.id);

     if(i>-1)
     {
       gindex=index;
       detect_object=itemL;
       nitrogendrag_dropable.splice(i, 1);
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

       if(detect_object.id=='N_CuboidTopLeft_AS'||detect_object.id=='N_CuboidTopRight_AS')
       {
         nitrogendrag_Top++;
       }
       else if(detect_object.id=='N_CuboidBottomLeft_AS'||detect_object.id=='N_CuboidBottomRight_AS')
       {
          nitrogendrag_Bottom++;
       }
       else if(detect_object.id=='N_CuboidLeftUp_AS'||detect_object.id=='N_CuboidLeftDown_AS')
       {
          nitrogendrag_Left++;
       }
       else if(detect_object.id=='N_CuboidRightUp_AS'||detect_object.id=='N_CuboidRightDown_AS')
       {
          nitrogendrag_Right++;
       }



   }
   else {

     dragobject_parent.appendChild(item);
     console.log(dragobject_parent);
     item.setAttribute('setactive','value',true);


   }

}
