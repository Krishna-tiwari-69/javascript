// 4 ways 2 display output from javascript;
console.log("Hello");
window.alert('Heloooooooo!!!!!');
document.write('Hello');
document.getElementById('demo').innerHTML="Hello World!!";

// var , let , const
var global1='john';
let global2='dow';
const global3='harry';
// var has global space and let and const has block or function scope
{
    var a = 10;
    let b = 20;
    const c=30;
    console.log(b);
}
console.log(a);