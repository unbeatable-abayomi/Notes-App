const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');
const fs = require('fs');


// customize yargs version
yargs.version('1.1.0')


// console.log(process.argv);

// console.log(process.argv[3]);
// const command = process.argv[2];
// if(command === 'add'){
//     console.log('adding a note')

// }else if(command === 'remove'){
//     console.log('remove a note')
// }

yargs.command({
    command: 'add',
    describe: 'Add a new a note',
    builder : {
        title : {
           describe : 'note title',
           demandOption: true,
           type: 'string'
        },
        body : {
            describe : 'note body',
            demandOption: true,
             type: 'string'
        }
  },
     handler: function(argv) {
         console.log('Adding a new note', argv)
     }      
    
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
   
    handler : function () {
        console.log('Removing the note')
    }
})
yargs.command({
    command : 'list',
    describe : 'List your notes',
    handler : function () {
        console.log('Listing out all notes')
    }
})

yargs.command({
    command : 'read',
    describe : 'Read a note',
    handler : function () {
        console.log('Reading a note')
    }
})
// yargs.parse();
// const dataBuffer = fs.readFileSync('notes.json');
// console.log(dataBuffer)
// const stringData = dataBuffer.toString();
// const newstringData = JSON.parse(stringData)
// newstringData.title = 'abayomi';
// newstringData.body = 'myBody';
// console.log(stringData);
// console.log(newstringData);
// const realData = JSON.stringify(newstringData);
// fs.writeFileSync('notes.json', realData)

