import { Particle } from "./particle.js";

const TOTAL = 10;

export class Visual {
  constructor(pos, colorCtx, width, height) {
    this.colorCtx = colorCtx;
    this.width = width;
    this.height = height;
    this.pos = pos;
  }

  animate(ctx) {
    for (let i = 0; i < TOTAL; i++) {
      const myPos = this.pos[Math.round(Math.random() * this.pos.length)];
      new Particle(myPos, this.getColor(), ctx);
    }
  }

  getColor() {
    const x = Math.round(Math.random() * (this.width - 1));
  }
}
