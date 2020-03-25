var oxygendrag_dropable=[];


var oxygendrag_dragAgain1="";
var oxygendrag_dragAgain2="";
var oxygendrag_changeScale=false;


function oxygenDragDropClass()
{
    this.onDragObject = function (item)
    {
      oxygendrag_dragObject(item);
    },

    this.onDropObject = function (item)
    {
      oxygendrag_dropObject(item);
    }
}

function oxygendrag_dragObject(item)
{
  console.log("drag object ",item);

  let pos='0 0 -2';
  let scale='0.02 0.02 0.02';

  item.setAttribute('position',pos);
  item.setAttribute('setactive','value',true);
  item.setAttribute('setactive','scale',scale);
}

 var count=0;
function oxygendrag_dropObject(item)
{

  let detect_object="";
  let gindex=-1;

   hit_objects.forEach(myFunction);

   if(hit_objects.length==0)
   gindex=-10;

   function myFunction(itemL, index, arr)
   {

     let i=oxygendrag_dropable.indexOf(itemL.id);

     console.log(oxygendrag_dropable);
     console.log(itemL.id);

     if(i>-1)
     {
       gindex=index;
       detect_object=itemL;
       oxygendrag_dropable.splice(i, 1);
     }
   }

   console.log("gindex ",gindex);

   if(gindex>-1)
   {

       detect_object.appendChild(item);
       pos="15.3 5.5 1.5";
       let scale='0.2 0.2 0.2';
       item.setAttribute('position',pos);
       item.setAttribute('setactive','value',true);
       item.setAttribute('scale',scale);
       dragobject_removeDragables(item.id);
        count++;
        if(count==12)
        {
          onClickOKDragAgain2();
        }
        else if(count==14)
        {
          onClickokAfterCompleteOctate();
        }
        else {
          onClickOKDragAgain(count);
        }

        if(detect_object.id=="atomBoxHighlight11_lvl1")
        oxygendrag_dragAgain1=item.id;

        if(detect_object.id=="atomBoxHighlight16_lvl1")
        oxygendrag_dragAgain2=item.id;

   }
   else {

     dragobject_parent.appendChild(item);
     console.log(dragobject_parent);
     item.setAttribute('setactive','value',true);

     if(oxygendrag_changeScale)
     {
       let pos="15.3 5.5 1.5";
       let scale='0.2 0.2 0.2';
       item.setAttribute('position',pos);
       item.setAttribute('scale',scale);
     }

   }

}
