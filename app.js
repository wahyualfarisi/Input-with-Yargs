console.log('Starting app.js');

const fs     = require('fs');
const _      = require('lodash');
const yargs  = require('yargs');
const notes  = require('./notes.js');

//create new yargs
const argv   = yargs.argv;

var command = argv._[0];
console.log('Comman : ', command);
console.log('Yargs', argv);

if(command === 'add'){
  notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
  notes.getAll();
}else if(command === 'read'){
  notes.getRead(argv.title);
}else if(command === 'remove'){
  notes.getRemove(argv.title);
}else{
  console.log('Command Not Recognized');
}
