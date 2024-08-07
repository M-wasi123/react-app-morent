const SignIn = document.getElementById('signinsho')
const body = document.querySelector('#parrentbody')
const shadow = document.querySelector('#shadow')
const bodyContent = document.querySelector('#parrentbody')

function togglerNavbar() {

    var navbarLinks = document.getElementById("navbarLinks");
    if (navbarLinks.style.display == "block") {

      navbarLinks.style.display = "none" ;
    } else {
      navbarLinks.style.display = "block";
    }
  }
  function togglerNavbarClose() {
    var navbarLinksClose = document.getElementById("navbarClose");
    if(navbarLinks.style.display == "none"){
      navbarLinks.style.display = "block" ;
    }else{
      navbarLinks.style.display = "none";
    }
  }



window.onscroll = function () {
  scrollfunction();
}
function scrollfunction() {
  if (document.documentElement) {
   SignIn.style.display = 'block'
  bodyContent.classList.add("fixed")

  }else{
    SignIn.style.display = 'none'
  }
}

var signInClose = document.getElementById('closeIcon');

signInClose.addEventListener('click',() => {
  if ( SignIn.style.display === 'block') {
    SignIn.style.display = 'none'
    bodyContent.classList.remove('fixed')
  
  }else{
    SignIn.style.display = 'none'
  }
window.onscroll = function () {
  scrollfunction();
}
function scrollfunction() {
}
});
if (localStorage.getItem('email')) {
  function scrollfunction() {
  }
}


const scrollTOTop = document.getElementById('topBtn')

window.onscrollend = function () {
  scrollfunction2();
}
function scrollfunction2() {
  if (document.documentElement.scrollTop > 10) {
    scrollTOTop.style.display = 'block'
  }else{
    scrollTOTop.style.display = 'none'
  }
}
console.log('sign.js')




  
