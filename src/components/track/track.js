/*
<div class ="track">
<img class = "track__image" src = ../../aasets:michael.jpg />
<div class = "track__content">
<h3 class = "track__title">Billie Jean</h3>
<p class = "track__artist">Michael Jackson</p>
</div>
<button>
<img src = "../../assets/play-active.svg"
</button>
</div

*/
import "./track.css";
import playActionScr from "../../assets/play-active.svg";
import pausePlayScr from "../../assets/pause.svg";

export function createTrackElement(track) {
  const trackElement = document.createElement("div");
  trackElement.className = "track";

  const textContent = document.createElement("div");
  textContent.className = "track__content";

  const titleElement = document.createElement("h3");
  titleElement.innerText = track.title;

  const artistElement = document.createElement("p");
  artistElement.innerText = track.artist;

  textContent.append(titleElement, artistElement);

  const imgElement = document.createElement("img");
  imgElement.src = track.imgSrc;
  imgElement.alt = `Image of ${track.artist}`;
  imgElement.className = "track__image";

  const buttonElement = document.createElement("button");
  buttonElement.className = "track__button";

  const playActionElement = document.createElement("img");
  playActionElement.src = playActionScr;

  trackElement.append(imgElement, textContent, buttonElement);
  buttonElement.append(playActionElement);

  const audioElement = new Audio(track.audioSrc);

  buttonElement.onclick = function () {
    if (!audioElement.paused) {
      audioElement.pause();
      setPlayIcon(playActionElement);
    } else {
      audioElement.play();
      setPauseIcon(playActionElement);
    }
  };

  return trackElement;
}

const setPlayIcon = (element) => {
  element.src = playActionScr;
  element.alt = "Play Button";
};

const setPauseIcon = (element) => {
  element.src = pausePlayScr;
  element.alt = "Pause Button";
};
