var notes = document.getElementById("notes");
var form = document.forms["noteForm"];

//var addNewNoteBtn = document.getElementById("addNewNoteBtn");
var addNewNoteBtn = form.elements.addNewNoteBtn;

//var newNote = document.getElementById("newNote");
var newNote = form.elements.newNote;
//var newNoteDesc = document.getElementById("newNoteDesc");
var newNoteDesc = form.elements.newNoteDesc;

function addNote(event1) {
    event1.preventDefault();    
    function toggleDiv(event2) {
        if (event2.srcElement.children[0].style.display == "none") {
            event2.srcElement.children[0].style.display = "block";
        } else if (event2.srcElement.children[0].style.display == "block") {
            event2.srcElement.children[0].style.display = "none";
        }
        event2.stopPropagation();
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