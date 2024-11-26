var heading = document.getElementById("demo");

var fname="john smith ";
var age = 34;
// concatination
// + " "+ use for spacing
console.log(fname + " " +age)
// for print in html body
heading.innerHTML=fname + " " + age;
// ----------------------------
// to get value from user
// promt is use for to get value from user
var userName = prompt("enter yor name");
var userAge = prompt("enter yor age");

heading.innerHTML=userName + " " + userAge;

// get color name and background color
// from user and applly on heading
var txtColor=prompt("enter color");
var bgColor=prompt("enter background color");

 heading.style.color=txtColor;
 heading.style.backgroundColor=bgColor;

//  change attributes
var img=document.getElementById("img");
img.src="medium.webp";

// hw
// take a name from user and display 
// in innerhtml of h1 element and change its style

