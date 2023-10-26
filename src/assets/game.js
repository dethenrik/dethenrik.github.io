document.addEventListener('click', function Game() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    
    const CANVAS_WIDTH = canvas.width = 600;
    const CANVAS_HEIGHT = canvas.height = 600;

    const playerImage = new Image();
    playerImage.src = 'assets/images/shadow_dog.png'; // Load the image

    const spriteWidth = 575;
    const spriteHeight = 523;

    let frameX = 0;
    let frameY = 1;     // this is the absolute position of the sprite

    let gameFrame = 0;

    const staggerFrames = 5; // this is the speed of your characters animation

    const spriteAnimations = [];
    const animationStates = [
        {
            name: 'idle',
            frames: '7',
        },
        {
            name: 'jump',
            frames: '7',
        }
    ];
    animationStates.forEach((state, index) => {
        let frames = {
            loc: [],
        }
        for (let j = 0; j < state.frames; j++){
            let positionX = j * spriteWidth;
            let positionY = index * spriteHeight;
            frames.loc.push({x: positionX, y: positionY});
        }
        spriteAnimations[state.name] = frames;
    });
    console.log(spriteAnimations);

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        let position = Math.floor(gameFrame/staggerFrames) % 6;//this is the relative position of the sprite
        frameX = spriteWidth * position;
        ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
        gameFrame++;
        requestAnimationFrame(animate);
    }
    animate();
});
