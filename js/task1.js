
//first option
let str = 'ddd@bbb@ccc';

let newstr = str.replace(/ddd@bbb@ccc/gi , 'ddd!bbb!ccc');

console.log(newstr);


//second option
var string = 'ddd@bbb@ccc';

console.log(string.replace(/@/g, '!'));

