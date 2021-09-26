"use strict";

window.addEventListener("load", ()=>{
    dragElement(document.getElementById("root"));
    console.log("lol xD");
//https://www.youtube.com/watch?v=H3Fn33lYuE0&ab_channel=DrewConley
});


function dragElement(Item){
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    Item.onmousedown = (e)=>{ //ändra till rätt element
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    };
    
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        Item.style.top = (Item.offsetTop - pos2) + "px";
        Item.style.left = (Item.offsetLeft - pos1) + "px";
      }
    
      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
}