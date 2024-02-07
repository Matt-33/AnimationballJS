// # ARKANOID

// ## Énoncé
// Nous allons animer une balle dans la page entière. C'est à dire dans la zone visible de la fenêtre de notre navigateur.

// ### Fonctionnement attendu
// La balle (une div HTML avec des bords arrondis) devra dans un premier temps rebondir sur les bords droit et gauche de la fenêtre.

// ### Remarques
// Il devra être possible de redimensionner la fenêtre en cours d'animation. Même si certains bogues pourront être occasionnés si la fenêtre et redimensionnée trop vite.

// ## BONUS

// 1. Donner un angle de départ de 45° vers le bas en plus d'une direction à droite. La balle rebondira alors en bas puis à droite de l'écran, puis en haut, etc... Utilisez des objets Javascript pour gérer les données représentant la balle et l'écran.

// 2. Un clic sur la page met en pause ou reprend l'animation.




// ______________________EXERCICE 1________________________


// const ball = document.querySelector("#ball");

// let ballRadius = 20;
// let ballSpeedX = 5;

// function animateBall() {
//     let ballX = parseFloat(ball.style.left);
//     ballX += ballSpeedX;
    
//         if (ballX + ballRadius > window.innerWidth || ballX - ballRadius < 0){
//             ballSpeedX = -ballSpeedX;
//         }
        
//         ball.style.left = ballX + 'px';

//         requestAnimationFrame(animateBall);
// }      

// window.onload = function(){
//     animateBall();
// }


const screen = {
    width: window.innerWidth,
    height: window.innerHeight
};

const ball = {
    element: document.querySelector("#ball"),
    radius: 20,
    speed: 5,
    angle: Math.PI / 4
};

let isPause = false;

function togglePause(){
    isPause = !isPause;
}
document.addEventListener("click", togglePause);


function animateBall() {
    if(isPause){
        requestAnimationFrame(animateBall);
        return;
    }

    let ballX = parseFloat(ball.element.style.left);
    let ballY = parseFloat(ball.element.style.top);

    ballX += ball.speed * Math.cos(ball.angle);
    ballY += ball.speed * Math.sin(ball.angle);

    if (ballX + ball.radius > screen.width || ballX - ball.radius < 0) {
        ball.angle = Math.PI - ball.angle;
    }

    if (ballY + ball.radius > screen.height || ballY - ball.radius < 0) {
        ball.angle = -ball.angle;
    }

    ball.element.style.left = ballX + 'px';
    ball.element.style.top = ballY + 'px';

    requestAnimationFrame(animateBall);
}

window.onload = function () {
    animateBall();
};