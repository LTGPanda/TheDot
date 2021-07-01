"use strict";

window.addEventListener("load", ()=>
{
    let HexMal = document.createElement("div");
    let HexaBox = document.querySelector(".hexcon");

    HexMal.classList.add("hexagon");
    console.log(HexaBox);
    console.log(HexMal);

    HexaBox.appendChild(HexMal.cloneNode(true));
    HexaBox.appendChild(HexMal.cloneNode(true));
    HexaBox.appendChild(HexMal.cloneNode(true));
    HexaBox.appendChild(HexMal.cloneNode(true));
    HexaBox.appendChild(HexMal.cloneNode(true));
});