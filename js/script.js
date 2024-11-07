let label = document.getElementById("label");
let note = document.getElementById("note");
let arr_notes = [];
showFromLocal();

function addNote(){
    let input_note ={
        label:label.value,
        note:note.value,
    }
    arr_notes.push(input_note);
    storeInLocal(arr_notes);
    displayNotes();
    clearInputs();
}

function displayNotes(){
    let note_card = "";
    for(let i = 0;i<arr_notes.length;i++){
        note_card += `
            <div class="ele rounded-3 shadow-lg p-3">
                <a href="" class="h3">${arr_notes[i].label}</a>
                <p>${arr_notes[i].note}</p>
                <div class="d-flex justify-content-end  ">
                    <button onclick="deleteNote(${i})" class="btn"><i class="fa-regular fa-trash-can"></i></button>
                    <button class="btn"><i class="fa-regular fa-pen-to-square"></i></button>
                </div>
            </div>
        `;
    }
    document.getElementById("notes_container").innerHTML = note_card;
}

function clearInputs(){
    label.value = "";
    note.value = "";
}

function storeInLocal(arr){
    localStorage.setItem("notes", JSON.stringify(arr));
}
function showFromLocal(){
    if(localStorage.getItem("notes")){
        arr_notes = JSON.parse(localStorage.getItem('notes'));
    }
    displayNotes();
}
function deleteNote(index){
    arr_notes.splice(index, 1);
    storeInLocal(arr_notes);
    displayNotes();
}