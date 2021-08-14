let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
     }
})
 chrome = document.getElementsByClassName("chrome")[0]
let chromeopen = document.getElementsByClassName("chromeopen")[0]

chrome.addEventListener("click", ()=>{
    console.log("clicked");
    if(chromeopen.style.bottom == "-55px"){
        chromeopen.style.bottom = "-1300px"
    }
    else{
        chromeopen.style.bottom = "-55px"
    }
})
