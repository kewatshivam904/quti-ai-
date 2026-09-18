// ==========================
// Splash + Welcome
// ==========================

window.addEventListener("load", function(){

    const splash = document.getElementById("splashScreen");
    const welcome = document.getElementById("welcomeScreen");
    const guest = document.getElementById("guestBtn");

    // Splash 2 sec
    setTimeout(function(){

        splash.style.display = "none";

        if(localStorage.getItem("quti_started") !== "yes"){
            welcome.style.display = "flex";
        }else{
            welcome.style.display = "none";
        }

    },2000);

    // Continue without Login
    guest.onclick = function(){

    localStorage.setItem("quti_started","yes");

welcome.style.display = "none";

speak("Welcome to Quti. I am ready to help you.");

    };

});