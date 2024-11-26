function display(){
    console.log("Hello world");
}




var name='krish';
var age=20;
var heading = document.getElementById('demo');



function show(){
    
    heading.innerHTML= name+" "+age;
}





function cube(){
    var number=prompt("enter number");
     var result = number * number * number;
    document.getElementById('demo').innerHTML = result;
}


function change(){
    var h1 = document.getElementById('heading');
    h1.style.color='red';
    h1.style.backgroundColor='blue';
}