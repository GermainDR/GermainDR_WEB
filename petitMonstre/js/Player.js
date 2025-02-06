function drawCircleImmediat(ctx, x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

class Player {
    constructor(x, y) {
        this.x = x; // Position x
        this.y = y; // Position y
        this.w = 100; // Largeur
        this.h = 100; // Hauteur
        this.vitesseX = 0;
        this.vitesseY = 0;
        this.couleur = "pink";
        this.angle = 0;
        this.rotationSpeed = 0.05; // Vitesse de rotation
    }

    draw(ctx) {
        this.rotate(); // Ajout de la rotation ici
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.translate(-this.w / 2, -this.h / 2);

        // Corps du monstre
        ctx.fillStyle = this.couleur;
        ctx.fillRect(0, 0, this.w, this.h);

        // Yeux
        drawCircleImmediat(ctx, 20, 20, 10, "red");
        drawCircleImmediat(ctx, 60, 20, 10, "red");

        // Pupilles
        drawCircleImmediat(ctx, 20, 20, 5, "black");
        drawCircleImmediat(ctx, 60, 20, 5, "black");

        // Bouche
        ctx.fillStyle = "black";
        ctx.fillRect(30, 60, 40, 10);

        // Dents
        ctx.fillStyle = "white";
        ctx.fillRect(35, 60, 5, 5);
        ctx.fillRect(45, 60, 5, 5);
        ctx.fillRect(55, 60, 5, 5);

        // Bras
        ctx.fillStyle = "pink";
        ctx.fillRect(-20, 20, 20, 60); // Bras gauche
        ctx.fillRect(this.w, 20, 20, 60); // Bras droit

        // Jambes
        ctx.fillRect(20, this.h, 20, 60); // Jambe gauche
        ctx.fillRect(60, this.h, 20, 60); // Jambe droite

        ctx.restore();
    }
    
    rotate() {
        this.angle += this.rotationSpeed;
    }
}

export default Player;