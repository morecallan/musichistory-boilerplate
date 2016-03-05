// Navigation elements
var viewMusic = document.getElementById("viewMusic");
var addMusic = document.getElementById("addMusic");
// Page Views
var viewMusicPage = document.getElementById("listMusicView");
var addMusicPage = document.getElementById("addMusicView");
// Song List Display Area
var songList = document.getElementById("songList")
//Song List Array
var songArray = [["Song Name", "Artist", "Album"],["Song Name", "Artist", "Album"],["Song Name", "Artist", "Album"],["Song Name", "Artist", "Album"],["Song Name", "Artist", "Album"],["Song Name", "Artist", "Album"]];
//Add Music Page Elements
var addSongInput = document.getElementById("addSongName");
var addArtistInput = document.getElementById("addArtist");
var addAlbumInput = document.getElementById("addAlbum");
var addButton = document.getElementById("addSong");



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

// Cycles through each item in the song array and adds it to the DOM
function addToDom(songArray){
    var buildString = ""
    for (var i = 0; i < songArray.length; i++) {
        buildString += "<section> <h2>" + songArray[i][0] + "</h2> <ul class='song'> <li class='borderRight'>" +  songArray[i][1] + "</li> <li class='borderRight'>" + songArray[i][2] + "</li> <li>" + "Genre" + "</li> </ul> </section>";
    }
    songList.innerHTML = buildString
}

addToDom(songArray);


// Grabs input from addSong page and creates an array
addButton.addEventListener("click", createNewSongArray)

function createNewSongArray() {
    var songInput = addSongInput.value;
    var artistInput = addArtistInput.value;
    var albumInput = addAlbumInput.value;
    var newSongArray = [songInput, artistInput, albumInput]
    addASong(newSongArray);
    clearFields();
}

function clearFields() {
    addSongInput.value = "";
    addArtistInput.value = "";
    addAlbumInput.value = "";
}


//Adds new song array to full song list of arrays
function addASong(newSongArray) {
    songArray.unshift(newSongArray);
    addToDom(songArray);
}

