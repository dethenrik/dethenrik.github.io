
document.addEventListener('click', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    
    const CANVAS_WIDTH = canvas.width = 600;
    const CANVAS_HEIGHT = canvas.height = 600;

    const playerImage = new Image();
    playerImage.src = 'assets/images/shadow_dog.png'; // Load the image

    // Set up the onload event handler for the image
    playerImage.onload = function() {
        let x = 0;
        function animate() {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            ctx.drawImage(playerImage, x, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            x++;
            requestAnimationFrame(animate);
        }
        animate(); // Start the animation once the image is loaded
    };
});
