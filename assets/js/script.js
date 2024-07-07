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


window.addEventListener("resize", (event) => {
   if(window.screen.width >= 768){
      navbarUl.classList.remove("hamburger_active");
   }
   console.log("rezizing "+window.screen.width);
});













// function toggleNav(){
//    let toggleVar= document.getElementById("navbar_ul");
//    console.log(toggleVar);
//    console.log(toggleVar.style.display);

//    if(toggleVar.style.display=='none'){
//     toggleVar.style.display='flex'
//    }
//    else{
//     toggleVar.style.display='none'
//    }
//    console.log(window.innerWidth);
// }

