
document.getElementById("volumeicon").addEventListener("click", volumetoggle);

var player;


function onload() {
    var randomTime = Math.floor(Math.random() * 41574) + 1;

    document.getElementById("ytbackgrplayer").src =
        "https://www.youtube-nocookie.com/embed/_VlrdVwG7sI?start=" +
        randomTime +
        "&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&version=3&vq=hd2160&mute=1";
}
function closeInfoBox() {
  const box = document.getElementById('infobox');
  const bgmusic = document.getElementById('bgmusic');

  if (bgmusic) {
    const src = bgmusic.src;
    const hasQuery = src.includes("?");
    const newSrc = src + (hasQuery ? "&autoplay=1" : "?autoplay=1");
    bgmusic.src = newSrc;
  }

  box.classList.add('fade-out');
  setTimeout(() => {
    box.style.display = 'none';
  }, 500);
}

let isMuted = false;
function volumetoggle() {
  const musicIframe = document.getElementById('bgmusic');
  const volumeIcon = document.getElementById('volumeicon');

  if (isMuted) {
    volumeIcon.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
	document.getElementById('music-background').innerHTML = '<iframe id="bgmusic" src="https://www.youtube-nocookie.com/embed/RCGtFY61ccE?enablejsapi=1" allow="autoplay" frameborder="0" allowfullscreen></iframe>';
	const bgmusic = document.getElementById('bgmusic');
	if (bgmusic) {
	    const src = bgmusic.src;
	    const hasQuery = src.includes("?");
	    const newSrc = src + (hasQuery ? "&autoplay=1" : "?autoplay=1");
	    bgmusic.src = newSrc;
	  }
  } else {
	document.getElementById('bgmusic')?.parentNode?.removeChild(document.getElementById('bgmusic'));
    volumeIcon.innerHTML = '<i class="fa-solid fa-volume-off"></i>';
  }

  isMuted = !isMuted;
}

// Translations of "Welcome to Kiminet" in multiple languages
var texts = [
  "Welcome to Kiminet",         // English
  "Bienvenido a Kiminet",       // Spanish
  "Bienvenue à Kiminet",        // French
  "Willkommen bei Kiminet",     // German
  "Benvenuti a Kiminet",        // Italian
  "ようこそキミネットへ",         // Japanese (Yōkoso Kiminetto e)
  "Bienvenue à Kiminet",        // French (duplicate for consistency)
  "Kiminetへようこそ",            // Japanese (second version)
  "Kiminet에 오신 것을 환영합니다", // Korean
  "Willkommen zu Kiminet",      // German (second version)
  "مرحبا بك في كيمينيت",        // Arabic
  "Welcome to Kiminet"          // English (duplicate for simplicity)
];

var currentTextIndex = 0; 
var current = 0;
var l = texts[currentTextIndex].length;
var time = 20;
var userTyping = false;

document.getElementById("title").addEventListener("input", function() {
  userTyping = true;
});

var write_text = function() {
  if (userTyping) return; 

  var titleElement = document.getElementById("title");
  titleElement.textContent += texts[currentTextIndex][current]; 

  if (current < l - 1) {
    current++;
    setTimeout(write_text, time);
  } else {
    setTimeout(delete_text, 2500); 
  }
};

var delete_text = function() {
  if (userTyping) return; 
  
  var titleElement = document.getElementById("title");
  titleElement.textContent = "";
  currentTextIndex = (currentTextIndex + 1) % texts.length; 
  current = 0;
  l = texts[currentTextIndex].length; 
  setTimeout(write_text, time); 
};

setTimeout(write_text, time);
