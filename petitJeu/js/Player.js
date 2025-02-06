import ObjectGraphique from './ObjectGraphique.js';

export default class Player extends ObjectGraphique {
    constructor(x, y) {
        super(x, y, 30, 30, "blue");
        this.speed = 5;
    }

    moveWithKeyboard(touches) {
        if (touches.ArrowLeft) this.x -= this.speed;
        if (touches.ArrowRight) this.x += this.speed;
        if (touches.ArrowUp) this.y -= this.speed;
        if (touches.ArrowDown) this.y += this.speed;
    }

    moveWithMouse(mousePos) {
        const dx = mousePos.x - (this.x + this.w/2);
        const dy = mousePos.y - (this.y + this.h/2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > this.speed) {
            const ratio = this.speed / distance;
            this.x += dx * ratio;
            this.y += dy * ratio;
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.couleur;
        ctx.beginPath();
        ctx.arc(this.x + this.w/2, this.y + this.h/2, this.w/2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
} 