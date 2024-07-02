

function toggleNav(){
   let toggleVar= document.getElementById("navbar_ul");
   console.log(toggleVar);
   console.log(toggleVar.style.display);

   if(toggleVar.style.display=='none'){
    toggleVar.style.display='flex'
   }
   else{
    toggleVar.style.display='none'
   }
   console.log(window.innerWidth);
}

