export default class ObjectGraphique {
    constructor(x, y, w, h, couleur = "black") {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.couleur = couleur;
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.restore();
    }

    collidesWith(other) {
        return !(this.x + this.w < other.x ||
                other.x + other.w < this.x ||
                this.y + this.h < other.y ||
                other.y + other.h < this.y);
    }
} 