// regular function
function display (){
    alert("regular function called")
}

// function expression
const display1 = function(){
    alert("function expression called")
}

// arrow function
const display2 = ()=>{
    alert("arrow function called")
}


// whenever you pass a function as an argument to another function 
// never use ()
// you can call regular funtion before declaration but not arrow function and function expression
let button=document.getElementById('btn');
button.addEventListener('dblclick',display);

button.addEventListener('mouseover',function()

{
    console.log('from here');
})



// query slector

let h1 = document.querySelectorAll('h1');

console.log(h1);

h1[0].innerHTML = "hello from query selector id";
h1[0].style.color='red';
h1[0].style.backgroundColor='pink';

h1[1].innerHTML = "hello from query selector class";
h1[1].style.color='pink';
h1[1].style.backgroundColor='red';

