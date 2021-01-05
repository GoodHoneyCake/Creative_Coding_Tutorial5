import { Visual } from "./visual.js";
import { setColor } from "./color.js";
import { Text } from "./text.js";
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
      fontactive: () => {
        const ul = document.getElementsByTagName("ul")[0];
        const lis = ul.getElementsByTagName("li");
        for (let i = 0; i < lis.length; i++) {
          const item = lis[i];
          const img = item.getElementsByTagName("img");
        }
      },
    });
  }
}

window.onload = () => {
  new App();
};
