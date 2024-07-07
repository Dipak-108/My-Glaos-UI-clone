const hamburgerBtn=document.querySelector("#hamburger_id");
const navbarUl=document.querySelector(".navbar_ul");

hamburgerBtn.addEventListener("click",function (){
if(navbarUl.classList.contains("hamburger_active")){
   navbarUl.classList.remove("hamburger_active");
   
}

else{
   navbarUl.classList.add("hamburger_active");
}
})





