const SAVE_TIME_PERIOD = 5; // seconds
const NEW_NOTE_TITLE = 'Your note title, please';
const NEW_NOTE_BODY = 'Your text note, please';
const NOTE_STORAGE = 'NOTE_STORAGE';

const addBtn = document.getElementById('add');
const notesList = document.getElementById('notes');

const makeItem = (title = null, body = null) => {
  const note = document.createElement('li');
  note.classList.add('note-item');

  const noteBody = document.createElement('div');
  noteBody.classList.add('note-body');
  noteBody.setAttribute('contenteditable', true);
  noteBody.innerText = body || NEW_NOTE_BODY;

  const noteHeader = document.createElement('div');
  noteHeader.classList.add('note-header');

  const noteHeaderTitle = document.createElement('div');
  noteHeaderTitle.classList.add('note-header-title');
  noteHeaderTitle.setAttribute('contenteditable', true);
  noteHeaderTitle.innerText = !title || title instanceof PointerEvent ?  NEW_NOTE_TITLE : title;

  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas');
  deleteIcon.classList.add('fa-trash');
  deleteIcon.addEventListener('click', () => note.remove());

  noteHeader.appendChild(noteHeaderTitle);
  noteHeader.appendChild(deleteIcon);

  note.appendChild(noteHeader);
  note.appendChild(noteBody);
  
  return note;
}


const save = () => {
  const items = [];
  const titles = document.getElementsByClassName('note-header-title');
  const bodies =  document.getElementsByClassName('note-body');

  for (let count = 0; count < titles.length; count++) {
    items.push({title: titles[count].innerText, body: bodies[count].innerText});
  }

  localStorage.setItem(NOTE_STORAGE, JSON.stringify(items));
}

setInterval(save, SAVE_TIME_PERIOD * 1000);

const addNote = (title = null, body = null) => notesList.appendChild(makeItem(title, body));

const loadItens = () => {
  try {
    const items = JSON.parse(localStorage.getItem(NOTE_STORAGE));

    if (items && items.length) {
      for (const item of items) {
        addNote(item.title, item.body); 
      }
      return;
    }

    addNote();
  } catch (err) {
    console.error(err);
    addNote();
  } 
}

addBtn.addEventListener('click', addNote);
loadItens();