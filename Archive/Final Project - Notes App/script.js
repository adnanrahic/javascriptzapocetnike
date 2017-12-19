// 1. napraviti nizove gdje cemo cuvati nase biljeske
// elementi niza ce biti objekti
var notes = [];
var completedNotes = [];
var indexCounter = 1;

// 2. funkcija za dodavanje novih biljeski
function addNote(note) {
    notes.push(note);
}

// 3.funkcija za brisanje biljeske
function deleteNote(notes, id) {
    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        if (note.id === id) {
            return notes.splice(i, 1).pop();
        }
    }
}

// 4. markirati kao gotovo
function markAsComplete(id) {
    var completed = deleteNote(notes, id);
    completedNotes.push(completed);
    console.log(completedNotes);
}




// DOM interaction
var notesEl = document.getElementById('notes'); 
var completedNotesEl = document.getElementById('completed-notes'); 

var form = document.forms['form']; //https://www.airbnb.com/rooms/10967313?guests=3&adults=3&s=ywNV67Da
var title = form.elements.title;
var description = form.elements.description;
var addNoteBtn = form.elements.addNoteBtn;

addNoteBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var note = {
        id: indexCounter,
        title: title.value,
        description: description.value
    }
    ++indexCounter;
    addNote(note);
    appendNotes();
    title.value = '';
    description.value = '';
});

function appendNotes() {
    notesEl.innerHTML = '';
    notes.forEach(function(note) {
        var noteEl = document.createElement('li');

        var titleEl = document.createElement('h5');
        titleEl.innerText = note.title;
        noteEl.appendChild(titleEl);

        var descriptionEl = document.createElement('p');
        descriptionEl.innerText = note.description;
        noteEl.appendChild(descriptionEl);

        var deleteNoteBtn = document.createElement('button');
        deleteNoteBtn.innerText = 'Delete';
        deleteNoteBtn.addEventListener('click', function (e) {
            deleteNote(notes, note.id);
            appendNotes();
        });
        noteEl.appendChild(deleteNoteBtn);

        var markNoteAsCompleteBtn = document.createElement('button');
        markNoteAsCompleteBtn.innerText = 'Complete';
        markNoteAsCompleteBtn.addEventListener('click', function (e) {
            markAsComplete(note.id);
            appendNotes();
            appendCompletedNotes();
        });
        noteEl.appendChild(markNoteAsCompleteBtn);

        notesEl.appendChild(noteEl);
    });
}

function appendCompletedNotes() {
    completedNotesEl.innerHTML = '';
    completedNotes.forEach(function(note) {
        var noteEl = document.createElement('li');

        var titleEl = document.createElement('h5');
        titleEl.innerText = note.title;
        noteEl.appendChild(titleEl);

        var descriptionEl = document.createElement('p');
        descriptionEl.innerText = note.description;
        noteEl.appendChild(descriptionEl);

        var deleteNoteBtn = document.createElement('button');
        deleteNoteBtn.innerText = 'Delete';
        deleteNoteBtn.addEventListener('click', function (e) {
            deleteNote(completedNotes, note.id);
            appendCompletedNotes();
        });
        noteEl.appendChild(deleteNoteBtn);

        completedNotesEl.appendChild(noteEl);
    });
}