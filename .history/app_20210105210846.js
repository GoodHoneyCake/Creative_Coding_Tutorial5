import { Visual } from "./visual.js";
import { setColor } from "./color.js";
class App {
  constructor() {
    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
      fontactive: () => {},
    });
  }
}

window.onload = () => {
  new App();
};
