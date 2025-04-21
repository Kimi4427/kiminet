function onload() {
    var randomTime = Math.floor(Math.random() * 41574) + 1;

    document.getElementById("ytbackgrplayer").src =
        "https://www.youtube-nocookie.com/embed/_VlrdVwG7sI?start=" +
        randomTime +
        "&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&version=3&vq=hd2160&mute=1";
}
function closeInfoBox() {
  const box = document.getElementById('infobox');
  const video = document.getElementById('video');

  if (video) {
    const src = video.src;
    const hasQuery = src.includes("?");
    const newSrc = src + (hasQuery ? "&autoplay=1" : "?autoplay=1");
    video.src = newSrc;
  }

  box.classList.add('fade-out');
  setTimeout(() => {
    box.style.display = 'none';
  }, 500);
}
