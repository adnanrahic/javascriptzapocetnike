(function() {
"use strict";

var notes = document.getElementById("notes");
var addNewNoteBtn = document.getElementById("addNewNoteBtn");
var newNote = document.getElementById("newNote");
var newNoteDesc = document.getElementById("newNoteDesc");

function addNote() {
    function toggleDiv(event) {
        if (event.srcElement.children[0].style.display == "none") {
            event.srcElement.children[0].style.display = "block";
        } else if (event.srcElement.children[0].style.display == "block") {
            event.srcElement.children[0].style.display = "none";
        }
        event.stopPropagation();
    }
    var li = document.createElement("li");
    var div = document.createElement("div");
    li.innerText = newNote.value;
    div.innerText = newNoteDesc.value;
    div.style.display = "none";
    li.appendChild(div);
    li.addEventListener("click", toggleDiv);
    notes.appendChild(li);
    newNote.value = "";
    newNoteDesc.value = "";
}
addNewNoteBtn.addEventListener("click", addNote);


})();




