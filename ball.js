document.addEventListener("DOMContentLoaded", function(event) {
    const container = document.getElementById('container');
    const balls = [];

    function createBall() {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        container.appendChild(ball);

        const dx = (Math.random() - 0.5) * 250;
        const dy = (Math.random() - 0.5) * 250;

        balls.push({ element: ball, dx, dy });
    }

    function moveBalls() {
        balls.forEach(ball => {
            const rect = ball.element.getBoundingClientRect();
            let x = rect.left + ball.dx;
            let y = rect.top + ball.dy;

            if (x < 0 || x + rect.width > window.innerWidth) {
                ball.dx = -ball.dx;
            }
            if (y < 0 || y + rect.height > window.innerHeight) {
                ball.dy = -ball.dy;
            }

            ball.element.style.left = x + 'px';
            ball.element.style.top = y + 'px';
        });

        requestAnimationFrame(moveBalls);
    }

    for (let i = 0; i < new Date().getDay(); i++) {
        createBall();
    }

    moveBalls();

});