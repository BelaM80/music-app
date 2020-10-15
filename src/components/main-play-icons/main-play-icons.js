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

export const createButtonElement = (mainButton) => {
  const buttonElement = createElement("div", {
    className: "main-btns",
    children: [
      createElement("img", {
        className: "main-btns__play",
        src: mainButtonPlaySrc,
        alt: `Play`,
      }),
    ],
  });
  return buttonElement;
};
