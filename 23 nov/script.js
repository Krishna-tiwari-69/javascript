
// function display(){
// btn1=alert('button was click');
// }
// var btn1=document.getElementById("btn");
// btn1.addEventListener("mouseover",function(){
//     alert("hello")
// })
document.getElementById('myForm').addEventListener("submit",validate);

function validate(e){
    // to prevent the default behaaviour of form submission
    e.preventDefault();
    // fetch input values
    let myname = document.getElementById('name').value;
    let myemail = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cnfirm = document.getElementById('confirm').value;

    console.log(myname,myemail,password,cnfirm)

// validation the form

    if(myname=="" || myemail=="" || password=="" || cnfirm==""){
        alert('all field are required');
        return false;
    }
    if(password != confirm){
        alert('password dosent match');
        return false;
    }
    alert('form submission succesfull')

}




