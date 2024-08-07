
// var password2 = document.getElementById('inputPassword').addEventListener('click', function (){
//     if(password2.type === "password"){
// password2.type = "text"
// chek.textcontent = "hide"
//     }else{
//         password2.type = "password"
//         chek.textcontent = "show"
//     }
// })
var password2 = document.getElementById('inputPassword');

function TogglePasswordShow(){
    var password2 = document.getElementById('inputPassword');
    var passwordShow = document.getElementById('check');

    if(password2.type === 'password'){
password2.type = "text";
passwordShow.type = 'hide'
    }else{
        password2.type = 'password'
        passwordShow.type = 'show'
    }
}
let email = document.getElementById('input-email')
// const email = {id: }
// let emai = JSON.parse (email)

function redirectToPage() {
  window.location.href = "../index.html";
}
let btn= document.getElementById('login-btn')

const submitFun = () => {

    if (password2.value === localStorage.getItem('password') && email.value === localStorage.getItem('email')) {
      redirectToPage()
    }else if (email.value !== localStorage.getItem('email')) {
        alert('Please type corrrect email')
    }else if (password2.value !== localStorage.getItem('password') ) {
        alert('Please type corrrect password')
        
    }
}
btn.addEventListener('click',submitFun)
password2.addEventListener('keydown',(e) => {
    if (e.key == 'Enter') {
        submitFun()
    }
})



const scrollfunction = () => {
    body.style.position = 'absolute'
    body.style.width = '100%'
    SignIn.style.display = 'none'
    bodyContent.style.display = 'block'
}




console.log('signin.js')