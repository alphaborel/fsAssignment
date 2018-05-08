var fs = require('fs');
const path = require('path');

//ch1
var myFile = fs.readFileSync('./challenge1/info.txt', 'utf-8');
console.log(myFile);

//ch2
let names = fs.readFileSync('./challenge2/info.txt', 'utf-8')
//checks and doesn't run twice (regExpress would work better)
if(names.length < 57){
names = names + 'John\nLuke\nChris\n'
fs.writeFileSync('./challenge2/info.txt', names)}
console.log(names);

//ch3
try {var renameFile = fs.readFileSync('./challenge3/binfo.txt');
fs.rename('./challenge3/binfo.txt', './challenge3/info.txt', function (err) {
  if (err) throw err;
  console.log('Challenge 3 rename complete');
});
} catch(err) {console.log('Challenge 3 file already renamed')};

//ch4
fs.copyFile('./challenge4/info.txt', './challenge4/copyfolder/info.txt', (err) => {
  if (err) throw err;
  console.log('info.txt was copied to destination asynchronously');
});

//ch5
let dashes = fs.readFileSync('./challenge5/info.txt', 'utf-8')
var noDash = dashes.replace(/([-])+/g, " ");
fs.writeFileSync('./challenge5/info.txt', noDash);

//ch6
var dirArray = fs.readdirSync('./challenge6/', 'utf-8');
onlyTxt = dirArray.filter(word => word.includes("txt"));
console.log('Directory List of Text Files ', onlyTxt);
