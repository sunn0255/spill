window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");
    //Hva som skal skje
    showStart();
}

function showStart() {
    console.log("show start");
    document.querySelector("#exitknapp").removeEventListener("click", showStart); //når du kommer fra settingsmenyen.
    document.querySelector("#settings_background").classList.add("hide");
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#play").classList.remove("hide");
    document.querySelector("#menu_background").classList.remove("hide");
    document.querySelector("#astronaut").classList.remove("hide");
    document.querySelector("#romskip").classList.remove("hide");
    document.querySelector("#game_background").classList.add("hide");
    document.querySelector("#astronaut_spill").classList.add("hide");
    document.querySelector("#romskip_spill").classList.add("hide");
    document.querySelector("#astronaut_tau").classList.add("hide");
    document.querySelector("#time").classList.add("hide");
    document.querySelector("#tyggis2").classList.add("hide");
    document.querySelector("#tyggis3").classList.add("hide");
    document.querySelector("#tyggis4").classList.add("hide");
    document.querySelector("#tyggis5").classList.add("hide");
    document.querySelector("#tyggis6").classList.add("hide");
    document.querySelector("#tyggis7").classList.add("hide");
    document.querySelector("#tyggis8").classList.add("hide");
    document.querySelector("#points").classList.add("hide");
    document.querySelector("#tyggis1").classList.add("hide");
    document.querySelector("#tyggis2").classList.add("hide");
    document.querySelector("#tyggis3").classList.add("hide");
    document.querySelector("#tyggis4").classList.add("hide");
    document.querySelector("#tyggis5").classList.add("hide");
    document.querySelector("#tyggis6").classList.add("hide");
    document.querySelector("#tyggis7").classList.add("hide");
    document.querySelector("#tyggis8").classList.add("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#settingsknapp").addEventListener("click", showSettings);
}

function hideStart() {
    console.log("du har klikket")
    document.querySelector("#play").removeEventListener("click", hideStart);

    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#menu_background").classList.add("fade_out");
    document.querySelector("#play").classList.add("fade_out");
    document.querySelector("#astronaut").classList.add("fade_out");
    document.querySelector("#romskip").classList.add("fade_out");
    document.querySelector("#menu_background").addEventListener("animationend", startGame);

}

function startGame() {
    console.log("start game");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#menu_background").classList.add("hide");
    document.querySelector("#menu_background").classList.remove("fade_out");
    document.querySelector("#game_background").classList.remove("hide");
    document.querySelector("#romskip_spill").classList.remove("hide");
    document.querySelector("#astronaut_spill").classList.remove("hide");
    document.querySelector("#game_background").classList.remove("hide");
    document.querySelector("#astronaut_tau").classList.remove("hide");
    document.querySelector("#time").classList.remove("hide");
    document.querySelector("#points").classList.remove("hide");
    document.querySelector("#tyggis1").classList.remove("hide");
    document.querySelector("#tyggis2").classList.remove("hide");
    document.querySelector("#tyggis3").classList.remove("hide");
    document.querySelector("#tyggis4").classList.remove("hide");
    document.querySelector("#tyggis5").classList.remove("hide");
    document.querySelector("#tyggis6").classList.remove("hide");
    document.querySelector("#tyggis7").classList.remove("hide");
    document.querySelector("#tyggis8").classList.remove("hide");
}

function showSettings() {
    console.log("show settings menu");
    document.querySelector("#settings").removeEventListener("click", showSettings);
    document.querySelector("#menu_background").classList.add("hide");
    document.querySelector("#settings_background").classList.remove("hide");
    document.querySelector("#astronaut").classList.add("hide");
    document.querySelector("#romskip").classList.add("hide");
    document.querySelector("#play").classList.add("hide");
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#exitknapp").addEventListener("click", showStart);
}
