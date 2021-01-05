import { Particle } from "./particle.js";

const TOTAL = 10;

export class Visual {
  constructor(pos, colorCtx, width, height) {
    this.colorCtx = colorCtx;
    this.width = width;
    this.height = height;
    this.pos = pos;
  }
}
