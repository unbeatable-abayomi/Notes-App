const fs = require('fs');
const chalk = require('chalk');

const getNotes =  function ()  {
	return 'Your  Notes .....';
};

const addNote = function(title, body) {
	const notes = loadNotes();
	
	// const duplicateNotes = notes.filter((note) => note.title === title)
	const duplicateNote = notes.find((note)=>note.title === title)
	if(!duplicateNote){
	    notes.push({
	        title: title,
	        body: body
	    })
	    saveNotes(notes);
	    console.log(chalk.green.inverse('New Note Added'))
	}else{
	    console.log(chalk.red.inverse('New Note Taken'))
    }
    // console.log(notes);
};


const saveNotes = function (notes)  {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function() {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};
const removeNote =  function (title)  {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);

	if (notes.length > notesToKeep.length) {
		saveNotes(notesToKeep);
		console.log(chalk.green.inverse('Note Removed'));
	} else {
		console.log(chalk.red.inverse('No Note Found'));
	}
};

const listNotes = function ()  {
	const notes = loadNotes();
	console.log(chalk.yellow.inverse('Your Note'));
	notes.forEach((note) => {
		console.log(note.title);
	});
};

// const readNote = () =>{
//     const notes = loadNotes();
//    const foundNote =notes.find((note)=> note.title === title)
// if(foundNote){
//     console.log('notes found')
//     saveNotes(foundNote)
// }else{
//     console.log('Error no note')
// }

//     console.log('Reading a notes', notes)
// }

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote
	// listNotes: listNotes
	// readNote: readNote
};
