const audio = new Audio();
let isPlaying = false;

const playPauseBtn = document.getElementById("playPauseBtn");
playPauseBtn.addEventListener("click", togglePlayPause);

//  tracks list
const tracks = [
    {
        src: "https://github.com/erfan1881/Mu1881/raw/refs/heads/main/Tamara%20-%20Bi%20To%20Nesfam%20(320).mp3",
      
        albumArt: "https://github.com/erfan1881/MI1881/blob/main/IMG_20250127_165807_639.jpg?raw=true",
        trackTitle: "Track 1",
        bandName: "Band 1",
        duration: "4:03" // Format: "minutes:seconds"
    },
 
      {
        src: "https://github.com/erfan1881/Mu1881/raw/refs/heads/main/The%20Technicolors%20-%20Tonight%20You%20Are%20Mine.mp3",
        albumArt: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
        trackTitle: "Track 3",
        bandName: "Band 3",
        duration: "3:50" // Format: "minutes:seconds"
     },
// ---------------------------------------------------------------------






// Duele el corazón
{
    src: "https://github.com/erfan1881/muzickimage18/raw/refs/heads/main/WhatsApp Audio 2025-02-01 at 01.40.03.mp3",
    albumArt: "https://github.com/erfan1881/muzickimage18/blob/main/WhatsApp Image 2025-02-01 at 01.45.15.jpeg?raw=true",
    trackTitle: "Duele el corazón",
    bandName: "Enrique Iglesias",
    duration: "3:18" 
 },


// Shear Mikonam
{
    src: "https://github.com/erfan1881/muzickimage18/raw/refs/heads/main/WhatsApp%20Audio%202025-02-01%20at%2001.38.19.mp3",
    albumArt: "https://github.com/erfan1881/muzickimage18/blob/main/WhatsApp%20Image%202025-02-01%20at%2001.39.15.jpeg?raw=true",
    trackTitle: "Shear Mikonam",
    bandName: "Gdaal & Xteon",
    duration: "3:22" 
 },



// Дикая львица
     {
        src: "https://github.com/erfan1881/muzickimage18/raw/refs/heads/main/WhatsApp%20Audio%202025-02-01%20at%2001.34.14.mp3",
        albumArt: "https://github.com/erfan1881/muzickimage18/blob/main/WhatsApp%20Image%202025-02-01%20at%2001.37.57.jpeg?raw=true",
        trackTitle: " Дикая львица",
        bandName: "ALEX RUS",
        duration: "2:44" 
     },





 //  The Born King

     {
        src: "https://github.com/erfan1881/muzickimage18/raw/refs/heads/main/WhatsApp%20Audio%202025-02-01%20at%2001.30.09.mp3",
        albumArt: "https://github.com/erfan1881/muzickimage18/blob/main/WhatsApp%20Image%202025-02-01%20at%2001.33.40.jpeg?raw=true",
        trackTitle: "Haminim Ke Hastim",
        bandName: "Wantons",
        duration: "3:07" // Format: "minutes:seconds"
    },


   
    // Haminim Ke Hastim
    {
       
        src: "https://github.com/erfan1881/muzickimage18/raw/refs/heads/main/WhatsApp%20Audio%202025-02-01%20at%2000.55.51.mp3",
        albumArt: "https://github.com/erfan1881/muzickimage18/blob/main/WhatsApp%20Image%202025-02-01%20at%2001.28.18.jpeg?raw=true",
        trackTitle: "The Born King",
        bandName: "Daniel Pemberton",
        duration: "2:30" // Format: "minutes:seconds"
    },


// Whataya Want From Me
    {
        src: "https://github.com/erfan1881/muzickimage18/raw/refs/heads/main/WhatsApp%20Audio%202025-02-01%20at%2000.52.07.mp3",
        albumArt: "https://github.com/erfan1881/muzickimage18/blob/main/WhatsApp%20Image%202025-02-01%20at%2000.55.26.jpeg?raw=true",
        trackTitle: "WWFM",
        bandName: "Adam Lambert",
        duration: "3:47" // Format: "minutes:seconds"
    },

// KAMIN
        {
        src: "https://github.com/erfan1881/muzickimage18/raw/refs/heads/main/WhatsApp%20Audio%202025-02-01%20at%2000.42.48.mp3",
        albumArt: "https://github.com/erfan1881/muzickimage18/blob/main/WhatsApp%20Image%202025-02-01%20at%2000.45.59.jpeg?raw=true",
        trackTitle: "Kamin",
        bandName: "Hidden Ft Zakhmi",
        duration: "4:12" // Format: "minutes:seconds"
    },
   
//    Demons
    {
        src: "https://github.com/erfan1881/muzickimage18/raw/refs/heads/main/WhatsApp%20Audio%202025-02-01%20at%2000.46.45.mp3",
        albumArt: "https://github.com/erfan1881/muzickimage18/blob/main/WhatsApp%20Image%202025-02-01%20at%2000.51.17.jpeg?raw=true",
        trackTitle: "Demons",
        bandName: "imagine Dragons",
        duration: "2:55" // Format: "minutes:seconds"
    },
   
   
   
   // zard
   {
    src: "https://github.com/erfan1881/muzickimage18/raw/refs/heads/main/WhatsApp%20Audio%202025-02-01%20at%2000.35.59.mp3",
    albumArt: "https://github.com/erfan1881/muzickimage18/blob/main/WhatsApp%20Image%202025-02-01%20at%2000.40.08.jpeg?raw=true",
    trackTitle: "Zard",
    bandName: "jarshaa",
    duration: "4:12" // Format: "minutes:seconds"
},

   
   
   
    {
        src: "",
        albumArt: "",
        trackTitle: "Track 7",
        bandName: "Band 1",
        duration: "3:09" // Format: "minutes:seconds"
    },
    {
        src: "",
        albumArt: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
        trackTitle: "Track 8",
        bandName: "Band 1",
        duration: "3:09" // Format: "minutes:seconds"
    },
];

let currentTrackIndex = 0;

function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    audio.src = track.src;
    document.getElementById("albumArt").src = track.albumArt;
    document.getElementById("trackTitle").textContent = track.trackTitle;
    document.getElementById("bandName").textContent = track.bandName;
    document.getElementById("trackTime").textContent = track.duration;
}

loadTrack(currentTrackIndex);

audio.addEventListener("timeupdate", () => {
    const currentTime = formatTime(audio.currentTime);
    document.getElementById("currentTime").textContent = currentTime;
    document.getElementById("seekSlider").value = audio.currentTime;

    if (audio.buffered.length > 0) {
        const buffered = audio.buffered.end(0);
        const bufferPercent = (buffered / audio.duration) * 100;
        document.getElementById("bufferingIndicator").style.width = `${bufferPercent}%`;
    }

    const currentPercent = (audio.currentTime / audio.duration) * 100;
    document.getElementById("seekIndicator").style.width = `${currentPercent}%`;
});

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}


const seekSlider = document.getElementById("seekSlider");
seekSlider.addEventListener("input", handleSeek);

function handleSeek() {
    const seekTime = parseFloat(seekSlider.value);
    audio.currentTime = seekTime;
}

audio.addEventListener("loadedmetadata", () => {
    seekSlider.max = audio.duration;
    const totalDuration = formatTime(audio.duration);
    document.getElementById("trackTime").textContent = totalDuration;
});


function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="bi bi-play"></i>';
    
    
    
    
    } else {
        audio.play();
        playPauseBtn.innerHTML = '<i class="bi bi-pause"></i>';
    }
    isPlaying = !isPlaying;
}

audio.addEventListener("pause", () => {
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="bi bi-play"></i>';
});

audio.addEventListener("play", () => {
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="bi bi-pause"></i>';
});

audio.addEventListener("ended", playNextOrLoop);

function playNextOrLoop() {
    if (isLooping) {
        // If looping is enabled, replay the current track
        audio.currentTime = 0;
        audio.play();
    } else {
        if (isShuffled) {
            playNextTrackInShuffle();
        } else {
            playNextSequentialTrack();
        }
    }
}


function playNextTrackInShuffle() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function playNextSequentialTrack() {
    if (currentTrackIndex === tracks.length - 1) {
        currentTrackIndex = 0;
    } else {
        currentTrackIndex++;
    }
    loadTrack(currentTrackIndex);
    audio.play();
}

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", playNextTrack);
prevBtn.addEventListener("click", playPreviousTrack);

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
}

function playPreviousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
}


const shuffleBtn = document.getElementById("shuffleBtn");
const loopBtn = document.getElementById("loopBtn");

let isShuffled = false;
let isLooping = false;

shuffleBtn.addEventListener("click", toggleShuffle);
loopBtn.addEventListener("click", toggleLoop);

function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle("active", isShuffled);
    
    if (isShuffled) {
        shuffleTracks();
    }
}

function shuffleTracks() {

    for (let i = tracks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tracks[i], tracks[j]] = [tracks[j], tracks[i]];
    }
}

function toggleLoop() {
    isLooping = !isLooping;
    loopBtn.classList.toggle("active", isLooping);
    audio.loop = isLooping;
}


const muteBtn = document.getElementById("muteBtn");
const volumeSlider = document.getElementById("volumeSlider");
const volumeIndicator = document.getElementById("volumeIndicator");
const volumeBar = document.getElementById("volume-bar"); // Assuming #volume-bar exists

let isMuted = false;
let savedVolume = 1; // Store the volume before muting

muteBtn.addEventListener("click", toggleMute);
volumeSlider.addEventListener("input", setVolume);

function toggleMute() {
    isMuted = !isMuted;
    if (isMuted) {
        savedVolume = audio.volume;
        audio.volume = 0;
        muteBtn.innerHTML = '<i class="bi bi-play"></i>';
        volumeBar.classList.add("muted"); // Add muted class
    } else {
        audio.volume = savedVolume;
        muteBtn.innerHTML = '<i class="bi bi-pause"></i>';
        volumeBar.classList.remove("muted"); // Remove muted class
    }
    volumeSlider.value = isMuted ? 0 : savedVolume;
    muteBtn.classList.toggle("active", isMuted);

    updateVolumeIndicator();
}

function setVolume() {
    if (!isMuted) {
        audio.volume = volumeSlider.value;
        savedVolume = volumeSlider.value;
    }

   
    updateVolumeIndicator();
}


function updateVolumeIndicator() {
    const volumePercentage = audio.volume * 100;
    volumeIndicator.style.width = `${volumePercentage}%`;
}


updateVolumeIndicator();


const likeBtn = document.getElementById("likeBtn");
let isLiked = false;

likeBtn.addEventListener("click", function() {
    if (isLiked) {
        likeBtn.classList.remove("liked");
        likeBtn.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        likeBtn.classList.add("liked");
        likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    }
    isLiked = !isLiked;
});








