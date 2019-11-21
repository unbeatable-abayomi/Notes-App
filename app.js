const fs = require('fs');
const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');


// customize yargs version
// yargs.version('1.1.0')

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
         
         notes.addNote(argv.title,argv.body)
     }      
    
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
   
    handler : function (argv) {
        notes.removeNote(argv.title)
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

yargs.parse();

























// fs.writeFileSync('notes.txt', "This file was created by Node.js and i included this in the second command true")
// fs.appendFileSync('notes.txt', " Second New text i just included lorem ispusn")
// const validator = require('validator');


// console.log(notes.getNotes())
// console.log(notes.getNumber(11,11))
// const newNotes = notes();
// const newword = notes.getNumber(11,11);
// console.log(validator.isEmail('igwbor@yahoo.com'))
// console.log(validator.isURL('www.com.com'))



// log(chalk.red.bgWhite.inverse.bold('Error!'))
// log(process.argv)

// const command = process.argv[2];
// if (command === 'add'){
//     log('adding new note')
// }else if (command === 'remove'){
//     log('removed note!')
// }
// yargs.version('1.1.0')
// create add command
// yargs.command({
//     command: 'add',
//     describe: 'add a new note',
//     builder : {
//         title : {
//             describe: "note title",
//             demandOption: true,
//             type: "string"
//         },
//         body: {
//             describe: 'Note Body',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler (argv)  {
//         console.log('title:', argv.title)
//         console.log('body:', argv.body)
//         notes.addNotes(argv.title, argv.body);
//     }
// })
// yargs.command({
//     command: 'remove',
//     describe: 'remove a note',
//     builder: {
//         title: {
//             describe: 'remove note',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler  (argv) {
//         notes.removeNote(argv.title);
//     }
// })
// yargs.command({
//     command: 'list',
//     describe: 'list your notes',
//     handler (){
//         notes.listNotes()
//     }
// })

// yargs.command({
//     command: 'read',
//     describe : 'read a note',
//     builder :  {
//         title: {
//             describe : 'read note',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler (argv) { 
//         notes.readNote(argv.title)
//     }
    
// })

// yargs.parse();
