const fs = require('fs');

const getNotes = () => {
    return loadNotes();
}


const getNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title);
    if (!note) {
        console.log('Note Not found');
    } else {
        console.log('Note Found : ', note.title, note.body);
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    notesToDelete = notes.filter((note) => note.title !== title);

    if (notes.length > notesToDelete.length) {
        saveData(notesToDelete);
        console.log('Note Deleted');
    } else {
        console.log('Note doesnt exist');
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    //const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });

        saveData(notes);
        console.log('Note Added.');
    } else {
        console.log('Note Already added.');
    }
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const notesJSONString = dataBuffer.toString();
        return JSON.parse(notesJSONString);
    } catch (e) {
        return [];
    }
}

const saveData = (notes) => {
    const notesJSONString = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSONString);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    getNote: getNote
}
