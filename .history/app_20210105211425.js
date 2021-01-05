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
          const img = item.getElementsByTagName("img")[0];
          item.addEventListener(
            "click",
            (e) => {
              this.show(i);
            },
            false
          );
          this.thumbs[i] = {
            item,
            img: img.src,
          };
        }

        this.text = new Text();

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animata.bind(this));
      },
    });
  }
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.visual.show(this.stageWidth, this.stageHeight);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.visual.animate(this.ctx);
  }
}

window.onload = () => {
  new App();
};
