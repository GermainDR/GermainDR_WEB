import { Obstacle, ObstacleAnime } from './Obstacle.js';
import Player from './Player.js';
import Exit from './Exit.js';

export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.currentLevel = 1;
        this.touches = {};
        this.mousePos = { x: 0, y: 0 };
        this.player = new Player(50, 50);
        this.exit = new Exit(canvas.width - 100, canvas.height - 100);
        this.obstacles = [];
        this.gameLoop = this.gameLoop.bind(this);
        this.setupLevel();
    }

    setupLevel() {
        this.obstacles = [];
        
        switch(this.currentLevel) {
            case 1:
                this.obstacles.push(new Obstacle(300, 200, 200, 40));
                break;
            case 2:
                this.obstacles.push(new Obstacle(200, 150, 40, 300));
                this.obstacles.push(new Obstacle(400, 150, 40, 300));
                break;
            case 3:
                this.obstacles.push(new ObstacleAnime(300, 200, 40, 200, 150));
                this.obstacles.push(new Obstacle(500, 100, 40, 400));
                break;
            default:
                alert("Félicitations ! Vous avez terminé tous les niveaux !");
                this.currentLevel = 1;
                this.setupLevel();
                return;
        }
        
        document.getElementById('level').textContent = this.currentLevel;
        this.player.x = 50;
        this.player.y = 50;
    }

    handleCollisions() {
        // Collision avec les bords du canvas
        if (this.player.x < 0) this.player.x = 0;
        if (this.player.y < 0) this.player.y = 0;
        if (this.player.x + this.player.w > this.canvas.width) 
            this.player.x = this.canvas.width - this.player.w;
        if (this.player.y + this.player.h > this.canvas.height)
            this.player.y = this.canvas.height - this.player.h;

        // Collision avec la sortie
        if (this.player.collidesWith(this.exit)) {
            this.currentLevel++;
            this.setupLevel();
            return;
        }

        // Collision avec les obstacles
        for (let obstacle of this.obstacles) {
            if (this.player.collidesWith(obstacle)) {
                // Repositionner le joueur à sa position de départ
                this.player.x = 50;
                this.player.y = 50;
                break;
            }
        }
    }

    update() {
        this.player.moveWithKeyboard(this.touches);
        this.player.moveWithMouse(this.mousePos);
        
        for (let obstacle of this.obstacles) {
            if (obstacle instanceof ObstacleAnime) {
                obstacle.update();
            }
        }
        
        this.handleCollisions();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.exit.draw(this.ctx);
        this.player.draw(this.ctx);
        
        for (let obstacle of this.obstacles) {
            obstacle.draw(this.ctx);
        }
    }

    gameLoop() {
        this.update();
        this.draw();
        requestAnimationFrame(this.gameLoop);
    }

    start() {
        this.gameLoop();
    }
} 