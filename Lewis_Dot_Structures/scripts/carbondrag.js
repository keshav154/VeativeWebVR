var carbondrag_dropable=[];

function carbonDragDropClass()
{
    this.onDragObject = function (item)
    {
      carbondrag_dragObject(item);
    },

    this.onDropObject = function (item)
    {
      carbondrag_dropObject(item);
    }
}

function carbondrag_dragObject(item)
{
  console.log("drag object ",item);

  let pos='0 0 -2';
  let scale='0.02 0.02 0.02';

  item.setAttribute('position',pos);
  item.setAttribute('setactive','value',true);
  item.setAttribute('setactive','scale',scale);
}

var k=0;
function carbondrag_dropObject(item)
{

  let detect_object="";
  let gindex=-1;

   hit_objects.forEach(myFunction);

   if(hit_objects.length==0)
   gindex=-10;

   function myFunction(itemL, index, arr)
   {

     let i=carbondrag_dropable.indexOf(itemL.id);

     console.log(carbondrag_dropable);
     console.log(itemL.id);

     if(i>-1)
     {
       gindex=index;
       detect_object=itemL;
       carbondrag_dropable.splice(i, 1);
     }
   }

   console.log("gindex ",gindex);

   if(gindex>-1)
   {
     detect_object.appendChild(item);
     pos="15.5 5.5 1.5";
     let scale='0.2 0.2 0.2';
     item.setAttribute('position',pos);
     item.setAttribute('setactive','value',true);
     item.setAttribute('scale',scale);
     dragobject_removeDragables(item.id);
     k++;
     onClick_btn_okLvl1(k);

   }
   else {

     dragobject_parent.appendChild(item);
     item.setAttribute('setactive','value',true);

   }

}
