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
import michaelImage from "../../assets/michael.png";
import playActionScr from "../../assets/play-active.svg";

export function createTrackElement(title, artist) {
  const trackElement = document.createElement("div"); // <div></div>
  //divElement.innerText = "Billie Jean";
  trackElement.className = "track";

  const content = document.createElement("div");
  content.className = "track__content";

  const titleElement = document.createElement("h3");
  titleElement.innerText = title;

  const artistElement = document.createElement("p");
  artistElement.innerText = artist;

  const imgElement = document.createElement("img");
  imgElement.src = michaelImage;
  imgElement.alt = `Image of ${artist}`;
  imgElement.className = "track__image";

  const buttonElement = document.createElement("button");
  const playActionElement = document.createElement("img");
  playActionElement.src = playActionScr;

  buttonElement.onclick = function () {
    alert("click");
  };

  content.append(titleElement, artistElement);
  trackElement.append(imgElement, content, buttonElement);
  buttonElement.append(playActionElement);
  return trackElement;
}
