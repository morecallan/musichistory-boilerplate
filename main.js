var viewMusic = document.getElementById("viewMusic");
var addMusic = document.getElementById("addMusic");

var viewMusicPage = document.getElementById("listMusicView");
var addMusicPage = document.getElementById("addMusicView");

var songArray = [["Song Name", "Artist", "Album"]];


addMusic.addEventListener("click", addMusicView);
viewMusic.addEventListener("click", listMusicView)

function addMusicView() {
    viewMusicPage.classList.add("hidden");
    addMusicPage.classList.remove("hidden");
    addMusicPage.classList.add("visible");
}

function listMusicView() {
    viewMusicPage.classList.remove("hidden");
    addMusicPage.classList.add("hidden");
    addMusicPage.classList.remove("visible");
}

