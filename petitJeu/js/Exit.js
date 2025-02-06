import ObjectGraphique from './ObjectGraphique.js';

export default class Exit extends ObjectGraphique {
    constructor(x, y) {
        super(x, y, 40, 40, "green");
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.couleur;
        ctx.beginPath();
        ctx.arc(this.x + this.w/2, this.y + this.h/2, this.w/2, 0, Math.PI * 2);
        ctx.fill();
        
        // Ajout d'un effet visuel
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.x + this.w/2, this.y + this.h/2, this.w/3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }
} 