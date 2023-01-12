const fs = require('fs');

const add = function(note=[],oldNote){
    let fNote = JSON.parse(oldNote);

    fNote.push(note);

    let objectNote = JSON.stringify(fNote);
fs.writeFileSync('data.txt',objectNote);
}
module.exports = add;