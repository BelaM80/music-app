import { createTrackElement } from "./track";
import michaelImage from "../../assets/michael.png";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const beatIt = () =>
  createTrackElement({
    title: "Billie Jean",
    artist: "Michael Jackson",
    imgSrc: michaelImage,
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/none_given/TRG_Banks/TRG_Banks_-_Singles/TRG_Banks_-_Grandpas_great_escape.mp3",
  });

export const christmasAdventure = () =>
  createTrackElement({
    title: "A christmas Adventure",
    artist: "TRG Banks",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/TRG_Banks_-_TRG_Banks_Christmas_Album_-_20180915194354202.png?method=crop&width=290&height=290",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/none_given/TRG_Banks/TRG_Banks_-_Singles/TRG_Banks_-_Grandpas_great_escape.mp3",
  });

export const thriller = () =>
  createTrackElement({
    title: "Thriller",
    artist: "Michael Jackson",
    imgSrc: michaelImage,
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/none_given/TRG_Banks/TRG_Banks_-_Singles/TRG_Banks_-_Grandpas_great_escape.mp3",
  });

const playlist = [beatIt, christmasAdventure, thriller];

const container = document.createElement("section");

playlist.forEach((track) => {
  const trackElement = createTrackElement(track);
  container.append(trackElement);
  return container;
});
