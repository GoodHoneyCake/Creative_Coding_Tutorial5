const TOTAL = 12;

export class Particle {
  constructor(pos, color, ctx) {
    this.color = color;

    const ranMax = 20;
    this.points = [
      {
        x: pos.x,
        y: pos.y,
      },
    ];
  }
}
