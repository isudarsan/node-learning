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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'delete',
    describe: 'To Delete Notes',
    handler: function () {
        console.log('-------delete note');
    }
});

yargs.command({
    command: 'read',
    describe: 'To Read Notes',
    handler: function () {
        console.log('---- Read Notes');
    }
});

yargs.command({
    command: 'list',
    describe: 'To List Notes',
    handler: function () {
        console.log('---List Notes');
    }
});

//console.log(yargs.argv);

yargs.parse();