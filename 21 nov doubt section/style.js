var mypara=document.getElementById('demo');
console.log(mypara);

function display(){
    mypara.innerHTML ="this is coming from javascript";

}
function styling(){
    mypara.style.color='red';
    mypara.style.backgroundColor='blue';
    mypara.style.fontFamily='curcer';
    mypara.style.fontSize='24px';
    mypara.style.animation='101px';
    mypara.style.border="solid white 2px";
    mypara.style.borderRadius='60px';
    
}

var input1 = document.getElementById('myinput');
var image = document.getElementById('image');

function change (){
    input1.value="indore";
    image.src="download2.jpeg";
}


// using dom you can manipulate 3 things
// innerHtml , css(style) , attributes