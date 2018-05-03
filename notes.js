console.log('Starting note.js');


var addNote = (title, body) => {
  console.log('Adding note ', title, body);
}
var getAll = () => {
  console.log('Getting all Notes');
}
var getRead = (title) => {
  console.log('Reading Notes', title)
}
var getRemove = (title) => {
  console.log('Remove Notes', title)
}

module.exports = {
  addNote,
  getAll,
  getRead,
  getRemove
}
