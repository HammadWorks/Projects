console.log('Javascript Loading');
let currentSong = new Audio();
let songs;
let currFolder;
let songNames;

function secondsToMinutesSeconds(seconds) {
    seconds = Math.max(0, Math.floor(seconds));

    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    let formattedTime = formattedMinutes + ':' + formattedSeconds;

    return formattedTime;
}

function getSongName() {
    let songName = [];
    for (let index = 0; index < songs.length; index++) {
        const element = songs[index];
        songName.push(((element.split('/songs/' + currFolder + '/')[1]).replaceAll('%20', ' ')))
    }
    return songName;
}

function createPlaylist() {
    // Getting Song Names
    songNames = getSongName();

    // Creating Playlist For the songs
    let playlist = document.querySelector('.playlist')
    playlist.innerHTML = '';
    for (const song of songNames) {
        playlist.innerHTML = playlist.innerHTML + `<div class="song">
        <img class="invert logo_width" src="./svg_folder/song_logo.svg" alt="logo">
        <h4>${song}</h4>
        <div class="play_now">Play Now 
            <img class="invert logo_width" src="./svg_folder/play.svg" alt="play">
        </div>
    </div>`
    }

    // Attaching an event listener to each song
    Array.from(document.querySelectorAll('.song')).forEach(e => {
        e.addEventListener('click', () => {
            playMusic(e.getElementsByTagName('h4')[0].innerText.trim());
        }
        )
    });
}

async function getSongs() {
    let a = await fetch('/songs/' + currFolder);
    let response = await a.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let as = div.getElementsByTagName('a');

    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }

    createPlaylist();
}

function playMusic(track, play_now = true) {
    currentSong.src = `\\songs\\${currFolder}\\${track}`;
    if (play_now) {
        play.src = './svg_folder/pause.svg';
        currentSong.play();
    }
    volRange.value = 100;
    document.querySelector('.song_info').innerHTML = track;
    document.querySelector('.duration').innerHTML = '00:00 / 00:00';

}

async function displayAlbums() {
    let a = await fetch('/songs/');
    let response = await a.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let anchors = div.getElementsByTagName('a');
    let card_container = document.querySelector('.card_container');
    card_container, innerHTML = '';
    let array = Array.from(anchors);
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (e.href.includes("/songs")) {
            let folder = e.href.split('/').slice(-2)[0];
            // get the metadata of the folder
            let a = await fetch(`/songs/${folder}/info.json`);
            let response = await a.json();
            card_container.innerHTML = card_container.innerHTML + `<div data-folder="${folder}" class="card">
            <img src="/songs/${folder}/cover.jpeg" alt="">
            <h3>${response.title}</h3>
            <p>${response.discription}</p>
            </div>`;
        }
    }
    
    

    // Add event listner to cards
    Array.from(document.getElementsByClassName('card')).forEach((element) => {
        element.addEventListener('click', async (e) => {
            currFolder = e.currentTarget.dataset.folder;
            await getSongs();
            playMusic(songNames[0])
        }
        )
    }
    )
}


(async function main() {
    // Getting Songs List
    currFolder = 'ncs';
    await getSongs();

    // Default first song from the playlist
    playMusic(songNames[0], false)

    // Display all the albums on the page
    displayAlbums()


    // Attaching an event listener to play
    play.addEventListener('click', () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = './svg_folder/pause.svg';
        }
        else {
            currentSong.pause();
            play.src = './svg_folder/play.svg';
        }
    }
    );

    // Attaching an event listener to previous and next
    previous.addEventListener('click', () => {
        let index = songs.indexOf(currentSong.src);
        if (index - 1 >= 0) {
            playMusic(songNames[index - 1])
        }
    });

    next.addEventListener('click', () => {
        let index = songs.indexOf(currentSong.src);
        if (index + 1 < songNames.length) {
            playMusic(songNames[index + 1])
        }
    });

    // Listen for time update event
    currentSong.addEventListener('timeupdate', () => {
        document.querySelector('.duration').innerHTML = secondsToMinutesSeconds(currentSong.currentTime) + ' / ' + secondsToMinutesSeconds(currentSong.duration);
        document.querySelector('.circle').style.left = (currentSong.currentTime / currentSong.duration) * 100 + '%';

        // Pauses song when song ends
        if (currentSong.currentTime == currentSong.duration) {
            currentSong.pause();
            document.querySelector('.circle').style.left = '0%'
            currentSong.currentTime = 0;
            play.src = './svg_folder/play.svg';
        }
    }
    );

    // Add event listener to seekbar
    document.querySelector('.seek_bar').addEventListener('click', (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector('.circle').style.left = percent + '%';
        currentSong.currentTime = (currentSong.duration) * percent / 100;
    }
    );

    // Add event listener to volume bar
    volRange.addEventListener('change', (e) => {
        currentSong.volume = (e.target.value) / 100;
        if (e.target.value > 55) {
            volImg.src = "./svg_folder/volHigh.svg";
        }
        else if (e.target.value > 0) {
            volImg.src = "./svg_folder/volLow.svg";
        }
        else if (e.target.value == 0) {
            volImg.src = "./svg_folder/volMute.svg";
        }
    }
    );

    // Add event listener on volume icon to mute
    volImg.addEventListener('click', () => {
        if (volImg.src.includes('volMute.svg')) {
            currentSong.volume = 0.1;
            volRange.value = 10;
            volImg.src = "./svg_folder/volLow.svg";
        }
        else{
            currentSong.volume = 0;
            volImg.src = "./svg_folder/volMute.svg";
            volRange.value = 0;
        }
    }
    );

    // Adding event to Hamburger
    hamburger.addEventListener('click', () => {
        document.querySelector('.left').style.left = '0%';
    }
    )

    // Adding event to close button
    cancel.addEventListener('click', () => {
        document.querySelector('.left').style.left = '-120%';
    }
    )


})()

