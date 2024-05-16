let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let recent_volume = document.querySelector("#volume");
let volume_show = document.querySelector("#volume_show");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration");
let track_image = document.querySelector("#track_image");
let auto_play = document.querySelector("#auto");
let present = document.querySelector("#present");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");

let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement("audio");

//All songs list
let All_song = [
  {
    name: "Parody Of the Music",
    path: "music/Harun.mp4",
    img: "img/Beta.jpeg",
    singer: "Kamlun",
  },
  {
    name: "Sholawatan Full Album",
    path: "music/SholawatanZM.mp3",
    img: "img/ZM.jpeg",
    singer: "Zaadul Muslim",
  },
  {
    name: "Lagu Lawas Erni Johan Full Album",
    path: "music/Erni Johan.mp3",
    img: "img/GIF.gif",
    singer: "Erni Johan",
  },
  {
    name: "THE SIGIT FULL ALBUM",
    path: "music/The sigit full album.mp3",
    img: "img/record.gif",
    singer: "THE SIGIT",
  },
  {
    name: "STAY",
    path: "music/Justin Bieber - STAY.mp3",
    img: "img/relax.gif",
    singer: "The Kid LAROI, Justin Bieber",
  },
  {
    name: "Calm Down",
    path: "music/Calm Down.mp3",
    img: "img/GIF2.gif",
    singer: "Rema Selena Gomez - Calm Down",
  },
  {
    name: "We Don't Talk Anymore",
    path: "music/charlie puth.mp3",
    img: "img/Gift1.gif",
    singer: "Charlie Puth feat. Selena Gomez",
  },
  {
    name: "Closer",
    path: "music/closer.mp3",
    img: "img/closer.gif",
    singer: "The Chainsmokers ft. Halsey",
  },
  {
    name: "Love Yourself",
    path: "music/love yourself.mp3",
    img: "img/relax1.jpg",
    singer: "Justin Bieber",
  },
  {
    name: "Here's Your Perfect",
    path: "music/jamie.mp3",
    img: "img/closer.gif",
    singer: "Jamie Miller",
  },
  {
    name: "At My Worst",
    path: "music/pink sweat.mp3",
    img: "img/pink.gif",
    singer: "Pink Sweat (feat. Kehlani)",
  },
  {
    name: "I Love You 3000",
    path: "music/iloveu3000.mp3",
    img: "img/closer.gif",
    singer: "Stephanie Poetri",
  },
  {
    name: "Young Dumb & Broke",
    path: "music/khalid.mp3",
    img: "img/khalid.gif",
    singer: "Khalid",
  },
  {
    name: "Beautiful Girls",
    path: "music/beatifulgirls.mp3",
    img: "img/beatiful.jpg",
    singer: "Sean Kingston",
  },
  {
    name: "Hotline Bling",
    path: "music/drake.mp3",
    img: "img/record2.gif",
    singer: "Drake",
  },
  {
    name: "Watch Me",
    path: "music/silento.mp3",
    img: "img/music.jpg",
    singer: "Silentó",
  },
  {
    name: " Dessert",
    path: "music/dessert.mp3",
    img: "img/music.jpg",
    singer: "Dawin ft. Silentó",
  },
  {
    name: "Terminator",
    path: "music/terminator.mp3",
    img: "img/terminator.jpg",
    singer: "King Promise feat. Young Jonn",
  },
  {
    name: "Young Wild and Free",
    path: "music/snoop.mp3",
    img: "img/record2.gif",
    singer: "Snoop Dogg & Wiz Khalifa ft. Bruno Mars",
  },
  {
    name: " Black And Yellow",
    path: "music/blacknyellow.mp3",
    img: "img/snop.gif",
    singer: "Wiz Khalifa ft. Snoop Dogg Juicy J & T-Pain",
  },
];

// All functions

// function load the track
function load_track(index_no) {
  clearInterval(timer);
  reset_slider();

  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  track.load();

  timer = setInterval(range_slider, 1000);
  total.innerHTML = All_song.length;
  present.innerHTML = index_no + 1;
}

load_track(index_no);

//mute sound function
function mute_sound() {
  track.volume = 0;
  volume.value = 0;
  volume_show.innerHTML = 0;
}

// checking.. the song is playing or not
function justplay() {
  if (Playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

// reset song slider
function reset_slider() {
  slider.value = 0;
}

// play song
function playsong() {
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong() {
  track.pause();
  Playing_song = false;
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

// next song
function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}

// previous song
function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = All_song.length;
    load_track(index_no);
    playsong();
  }
}

// change volume
function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

// change slider position
function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
  if (autoplay == 1) {
    autoplay = 0;
    auto_play.style.background = "rgba(255,255,255,0.2)";
  } else {
    autoplay = 1;
    auto_play.style.background = "#148F77";
  }
}

function range_slider() {
  let position = 0;

  // update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  // function will run when the song is over
  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    if (autoplay == 1) {
      index_no += 1;
      load_track(index_no);
      playsong();
    }
  }
}
