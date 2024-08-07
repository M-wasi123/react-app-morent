let email = document.getElementById('email')
let pasword = document.getElementById('password');
let passwordShow = document.getElementById('eye');
let passwordShow2 = document.getElementById('eyeSlash');

document.getElementById('password').addEventListener('input', function() {
    var password = this.value;
    var strength = 0;

if (password.length >= 8){
    strength++;
}
if(/\d/.test(password)){
    strength++;
}
if(/[A-Z]/.test(password)){
    strength++;
}
if(/[$-/:-?{-~!"^_`\[\]]/.test(password)){
    strength++;}
var strengthText = '';
switch (strength){
    case 0:
      strengthText = 'Weak'
      break;
      case 1:
        strengthText = 'Weak'
      break;
      case 2:
        strengthText = 'medium';
        break;
      case 3:
      case 4:
                strengthText = 'strong'
                break;

}
document.getElementById('passwordStrength').innerHTML = 'Password Strength: ' +  strengthText;
});

pasword.addEventListener('click',()=>{
           if (pasword.value.length == 0) {
            if ( passwordShow2.style.display = 'block') {
                 passwordShow.style.display = 'none'
                 pasword.type = 'password'
            }
           }
    
})
passwordShow2.addEventListener('click', function () {
    if (pasword.type === 'text') {
        passwordShow.style.display = 'block'
        passwordShow2.style.display= 'none'
    }
})
passwordShow.addEventListener('click', function () {
    if (pasword.type === 'password') {
        passwordShow.style.display = 'none'
        passwordShow2.style.display= 'block'
    }
})

function TogglePasswordShow(){

    if(pasword.type === 'text'){
pasword.type = "password";
passwordShow.type = 'show'
passwordShow2.type = 'hide'
    }
}
function TogglePasswordShow2(){

    if(pasword.type === 'password'){
pasword.type = "text";
passwordShow2.type = 'show'
passwordShow.type = 'hide'
    }
}
var form = document.querySelector('form');
var submit = document.querySelector('#submit')

submit.addEventListener('click', function () {
            localStorage.setItem('email',email.value)
            if (strengthText == 'strong') {
                localStorage.setItem('password',inputPassword.value)
            }
})

