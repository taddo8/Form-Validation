var main = document.getElementById('main');
main.style.backgroundColor = 'tan';

var form = document.getElementById('form');
form.style.fontFamily = "verdana";



function login(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var pw = document.getElementById('pw').value;
    var error = document.getElementById('error');
    var text;

error.style.padding ="10px";

    if(name.length < 5)
    {
        text = 'Please Enter Valid Name';
        error.innerText = text;
        return true;
    }
    if(email.indexOf('@') == -1 || email.length < 6){
        text = "Please Enter Valid Email";
        error.innerText = text;
        return false;
    } 
    if(isNaN(phone) || phone.length < 10){
        text = "Please Enter Valid Phone Number";
        error.innerText = text;
        return false;
    }  
    if(pw.length < 6){
        text = "Please Enter Valid Password";
        error.innerText = text;
        return false;
    }

    alert("Form Submit Successfully")
}

form.addEventListener('submit', (e) => {
        e.preventDefault() 
    })
