const fs =require ('fs')

const write = function (){
    fs.writeFileSync('data.txt','data');
}

module.exports = write ;