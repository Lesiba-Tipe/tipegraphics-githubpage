

//$(document).ready(function(){})

// Change link to server
const frm_submit = document.getElementById('frm_submit_request');

//frm_submit.action = 'http://192.168.43.194:3000/send-review';
frm_submit.action = 'https://express-server-dmq0.onrender.com/send-review';

//QUOTE


const primary_nav = document.querySelector(".primary-navigation");
const mobile_nav_toogle = document.querySelector(".mobile-nav-toogle");

mobile_nav_toogle.addEventListener("click", () => {

  const visibility = primary_nav.getAttribute('data-visible')
  //const x = document.querySelector(".mobile-text-animatione");

  if(visibility === "true"){
    primary_nav.setAttribute("data-visible", false)
    mobile_nav_toogle.setAttribute("aria-expanded", false)
    //x.style.display = "none";
  }else{
    primary_nav.setAttribute("data-visible",true);
    mobile_nav_toogle.setAttribute("aria-expanded", true)
    //x.style.display = "block";
  }
  
})

const buttons = document.querySelectorAll(".btn_nav");

 buttons.forEach(btn => {

  btn.addEventListener("click", () => {
    primary_nav.setAttribute("data-visible", false)
    mobile_nav_toogle.setAttribute("aria-expanded", false)
  })

});

 const div_dev_contentElement = document.getElementById('developer');

 const dev_contentElement = '<p> Designed and Developed by: <a href="https://tipegraphics.co.za/">Tipe Graphics</a>   | '+ new Date().getFullYear() + ' | &copy; Copyright reserved<p/>'

 div_dev_contentElement.innerHTML += dev_contentElement

 //
 var myIndex = 0;
 carousel();
 
 function carousel() {
   var i;
   var x = document.getElementsByClassName("mobile-text-slide");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
   }
   myIndex++;
   if (myIndex > x.length) {myIndex = 1}    
   x[myIndex-1].style.display = "block";  
   setTimeout(carousel, 8000); // Change image every 2 seconds
 }

 //FORM VALIDATE
function validateForm(event) {
  // Access the form and its elements
  var form = event.target;
  var fullname = form.elements['fullname'].value;

  // Do something with the data
  console.log("FORM: ", form);
  console.log("Elements", form.elements);
  console.log("FullName", fullname);
}




