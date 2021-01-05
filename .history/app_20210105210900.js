import { Visual } from "./visual.js";
import { setColor } from "./color.js";
import { Text } from "./text.js";
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
