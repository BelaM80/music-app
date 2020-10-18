import "./main-play-icons.css";
import { createElement } from "../../utils/elements";
import mainButtonPlaySrc from "../../assets/pause.svg";
import mainButtonRewindSrc from "../../assets/rewind.svg";
import mainButtonForwardSrc from "../../assets/fastforward.svg";

/*
<div class = "main-btns">
    <buttton class ="main-btns__rewind">
       <img />
    </button>
    <buttton class ="main-btns__play">
        <img />
    </button>
    <buttton class ="main-btns__forward">
       
    </button>
</div>
 */

export const createButtonElement = () => {
  const rewindElement = createElement("img", {
    src: mainButtonRewindSrc,
    alt: "rewind",
  });

  const playElement = createElement("img", {
    src: mainButtonPlaySrc,
    alt: `Play`,
  });

  const forwardElement = createElement("img", {
    src: mainButtonForwardSrc,
    alt: "forward",
  });

  const buttonElement = createElement("div", {
    className: "main-btns",
    children: [
      createElement("button", {
        className: "main-btns__rewind",
        children: [rewindElement],
      }),

      createElement("button", {
        className: "main-btns__play",
        children: [playElement],
      }),

      createElement("button", {
        className: "main-btns__forward",
        children: [forwardElement],
      }),
    ],
  });
  return buttonElement;
};
