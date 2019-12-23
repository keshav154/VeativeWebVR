///////////     By: Pankaj Verma
///////         Last Updated: 15/07/19 03:20
//-----------------------------------------------
function GetWorldPosition(entity) {
    let pos = entity.getAttribute('position');
    if (entity.object3D.parent.el !== undefined) {
        pos = SumVector(pos, GetWorldPosition(entity.object3D.parent.el));
    }
    return pos;
}


function GetWorldRotation(entity) {
    let pos = entity.getAttribute('rotation');
    if (entity.object3D.parent.el !== undefined) {
        pos = SumVector(pos, GetWorldRotation(entity.object3D.parent.el));
    }
    return pos;
}


function GetLocalPosition(child, parent) {
    let pos = new THREE.Vector3();
    let childPos = GetWorldPosition(child);
    let parentPos = GetWorldPosition(parent);
    return SubVector(childPos, parentPos);
}



function GetLocalRotation(child, parent) {
    let rot = new THREE.Vector3();
    let childRot = GetWorldRotation(child);
    let parentRot = GetWorldRotation(parent);
    return SubVector(childRot, parentRot);
}



function SumVector(v1, v2) {
    var v = new THREE.Vector3();
    v.x = v1.x + v2.x;
    v.y = v1.y + v2.y;
    v.z = v1.z + v2.z;
    return v;
}


function SubVector(v1, v2) {
    var v = new THREE.Vector3();
    v.x = v1.x - v2.x;
    v.y = v1.y - v2.y;
    v.z = v1.z - v2.z;
    return v;
}
