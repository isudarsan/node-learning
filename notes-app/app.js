const notes = require('./notes.js');
const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'To Add New Notes',
    builder: {
        title: {
            describe: 'Title of the Note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'delete',
    describe: 'To Delete Notes',
    builder: {
        title: {
            describe: 'Title to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'To Read Notes',
    builder: {
        title: {
            describe: 'Title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.getNote(argv.title)
    }
});

yargs.command({
    command: 'list',
    describe: 'To List Notes',
    handler() {
        notes.getNotes().forEach(note => {
            console.log(note.title);
        });
    }
});

//console.log(yargs.argv);

yargs.parse();
