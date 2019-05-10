const fs = require('fs');

const getNotes = function () {
    return 'List of Notes';
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {

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


const loadNotes = function () {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const notesJSONString = dataBuffer.toString();
        return JSON.parse(notesJSONString);
    } catch (e) {
        return [];
    }
}

const saveData = function (notes) {
    const notesJSONString = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSONString);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}