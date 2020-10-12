import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const beatIt = () =>
  createTrackElement("Billie Jean", "Michael Jackson");
export const bebe = () => createTrackElement("Be the girl", "Bebe Rexa");
export const daughtry = () => createTrackElement("Countryman", "Daughtry");
export const earth = () => createTrackElement("Earthsong", "Micheal Jackson");
export const smooth = () =>
  createTrackElement("Smooth criminal", "Michael Jackson");
