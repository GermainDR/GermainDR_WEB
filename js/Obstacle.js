import ObjectGraphique from './ObjectGraphique.js';

export class Obstacle extends ObjectGraphique {
    constructor(x, y, w, h) {
        super(x, y, w, h, "red");
    }
}

export class ObstacleAnime extends Obstacle {
    constructor(x, y, w, h, amplitude = 100, speed = 0.02) {
        super(x, y, w, h);
        this.startX = x;
        this.startY = y;
        this.amplitude = amplitude;
        this.speed = speed;
        this.angle = 0;
    }

    update() {
        this.angle += this.speed;
        this.x = this.startX + Math.sin(this.angle) * this.amplitude;
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.restore();
    }
} 