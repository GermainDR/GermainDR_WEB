import Game from './Game.js';

window.onload = () => {
    const canvas = document.getElementById('myCanvas');
    const game = new Game(canvas);

    // Gestion des touches du clavier
    window.addEventListener('keydown', (event) => {
        game.touches[event.key] = true;
    });

    window.addEventListener('keyup', (event) => {
        game.touches[event.key] = false;
    });

    // Gestion de la souris
    canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        game.mousePos = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    });

    game.start();
}; 