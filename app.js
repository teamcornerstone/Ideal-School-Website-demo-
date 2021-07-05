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
const play_button = document.getElementById('play');

const icon =document.querySelector('#icon');

const enableDarkMode =()=>{
   document.body.classList.add("darkMode")
   localStorage.setItem("darkMode","enabled");
   play_button.classList.remove('play_button_light');
   play_button.classList.add('play_button_dark')
   
}
const disableDarkMode = () =>{
   document.body.classList.remove("darkMode");
   localStorage.setItem("darkMode",null);
   play_button.classList.remove('play_button_dark');
   play_button.classList.add('play_button_light');
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


play_button.addEventListener('click',(event)=>{
   if(video.paused){
      video.play()
      play_button.style.opacity = '0';
   }else{
      video.pause()
      play_button.style.opacity = '1';
   }
})
console.log(video)
video.addEventListener('timeupdate',(event)=>{
   orange_bar.style.width = `${(video.currentTime/ video.duration) * 100}%`
})



