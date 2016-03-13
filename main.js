// Navigation elements
var viewMusic = document.getElementById("viewMusic");
var addMusic = document.getElementById("addMusic");
// Page Views
var viewMusicPage = document.getElementById("listMusicView");
var addMusicPage = document.getElementById("addMusicView");
// Song List Display Area
var songList = document.getElementById("songList")
//Song List Array
// var songArray = [["Song Name", "Artist", "Album"],["Song Name", "Artist", "Album"],["Song Name", "Artist", "Album"],["Song Name", "Artist", "Album"],["Song Name", "Artist", "Album"],["Song Name", "Artist", "Album"]];
//Add Music Page Elements
var addSongInput = document.getElementById("addSongName");
var addArtistInput = document.getElementById("addArtist");
var addAlbumInput = document.getElementById("addAlbum");
var addButton = document.getElementById("addSong");
var moreMusic = document.getElementById("moreButton");



var songSectionID = 0;

// Read from local JSON file with an XHR.
//Step 1: Set up http req for songs
var mySongsReq = new XMLHttpRequest;

//Step 2: Go get it
mySongsReq.open("GET", "songs.json");
mySongsReq.send();

//Step 3: Event Listener
mySongsReq.addEventListener("load", songsSuccess);
mySongsReq.addEventListener("failed", failedExecution);

//Step 4: Translate into JS
function failedExecution() {
    alert("Error loading page. Please refresh.")
};

//Step 5: Create callback for once the product page loads
function songsSuccess() {
    var songData = JSON.parse(this.responseText);
    addToDom(songData.songs);
}

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
        buildString += "<section id='sectionID" + songSectionID + "'> <h2>" + songArray[i]["name"] + "</h2> <ul class='song'> <li class='borderRight'>" +  songArray[i]["artist"] + "</li> <li class='borderRight'>" + songArray[i]["album"] + "</li> <li>" + songArray[i]["genre"] + "</li> </ul> <button class='deleteButton'>Delete</button> </section>";
        songSectionID++;
    }
    songList.innerHTML += buildString;
    
    addEventListenerToDeleteButton();
}

function addEventListenerToDeleteButton() {
    var deleteButtons = document.getElementsByClassName("deleteButton");
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteSong);
    }
}

function deleteSong(e) {
    var myParent = e.target.parentElement;
    songList.removeChild(myParent);
    console.log("myParent", myParent);
    console.log("songList", songList);
}


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

//When the user clicks the MORE button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.
moreButton.addEventListener("click", loadNextJson);

function loadNextJson(e) {
    //Step 1: Set up http req for songs
    var moreSongsReq = new XMLHttpRequest;

    //Step 2: Go get it
    moreSongsReq.open("GET", "songs2.json");
    moreSongsReq.send();

    //Step 3: Event Listener
    moreSongsReq.addEventListener("load", moreSongsSuccess);
    moreSongsReq.addEventListener("failed", failedExecution);

    //Step 4: Translate into JS
    function failedExecution() {
        alert("Error loading page. Please refresh.")
    };

    //Step 5: Create callback for once the product page loads
    function moreSongsSuccess() {
        var moreSongData = JSON.parse(this.responseText);
        songList.classList.add("overflow");
        addToDom(moreSongData.songs);
    };
}