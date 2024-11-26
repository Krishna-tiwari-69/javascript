// object litreal


const person = {
    name:"john",
    age:30,
    city:"bhopal",
};
// to know the data type of person
console.log( typeof person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

// Array
const number= [10,20,30,870]
console.log(number[0])
console.log(number[1])
console.log(number[2])

// Function
// Function declaration
// fuction is a way to group code,together, you can run it anytime anywhere.
function sayhello(){
    console.log('haloooooooo!!!!!');
    alert('hello');
    document.write('hello');
}
// function runs when we call it
// function calling
sayhello();


// parameters
// parameters are whe  you declraing a funtion 
function addition(num1,num2){
    return num1 + num2;
}

// arguments while calling the function
console.log(addition(20,50));
document.getElementById("demo").innerHTML=addition(110,234);
document.write(addition(200,300));

let num = 345;

function cube(){
    return num * num * num;
}
console.log(cube());

// function expression
const multiply = function(x,y){
    return x*y;
}
console.log(multiply(10,20))

// arrow function
const divide = (a,b)=>{
    return a/b;

}
console.log(divide(100,200));