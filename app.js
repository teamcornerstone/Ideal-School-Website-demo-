// let icon = document.getElementById("icon");

// icon.onclick = function(){
//    document.body.classList.toggle("darkMode");
   // if(document.body.classList.contains("darkMode")){
   //    icon.src ="/sun.png";
   // }else{
   //    icon.src="/moon.png"
   // }


// }



let darkMode =localStorage.getItem('darkMode');

const icon =document.querySelector('#icon');

const enableDarkMode =()=>{
   document.body.classList.add("darkMode")
   localStorage.setItem("darkMode","enabled");

}
const disableDarkMode = () =>{
   document.body.classList.remove("darkMode");
   localStorage.setItem("darkMode",null);
}

if (localStorage.getItem('darkMode') == 'enabled'){
   icon.src ="sun.png"
   enableDarkMode();
}
icon.addEventListener('click',() =>{
   console.log('done');
   darkMode=localStorage.getItem("darkMode");

   // enable dark mode then check if the darkMode class exists or not
   if(darkMode !== "enabled"){
      enableDarkMode();
   }else{
      disableDarkMode();
   }

   // cheking the class if exists or not
   if(document.body.classList.contains("darkMode")){
      icon.src ="sun.png";
   }else{
      icon.src="moon.png"
   }
})





