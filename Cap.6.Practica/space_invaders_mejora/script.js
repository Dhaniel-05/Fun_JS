const gameArea = document.getElementById('gameArea');
const player = document.getElementById('player');
const vidasContainer = document.getElementById('vidas');
const nivelLabel = document.getElementById('nivel');
const puntajeLabel = document.getElementById('puntaje');
const gameOverLabel = document.getElementById('gameOver');
const finalScore = document.getElementById('finalScore');

let playerX = 0, playerY = 0;
let vidas = 5;
let maxVidas = 10;
let enemigosDestruidos = 0;
let nivel = 1;
let puntaje = 0;
let juegoTerminado = false;

function actualizarVidas() {
  vidasContainer.innerHTML = '';
  for (let i = 0; i < vidas; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    vidasContainer.appendChild(heart);
  }
}

function actualizarPuntaje() {
  puntajeLabel.textContent = `Puntaje: ${puntaje}`;
}

function perderVida() {
  vidas--;
  actualizarVidas();
  if (vidas <= 0) gameOver();
}

function ganarVida() {
  if (vidas < maxVidas) {
    vidas++;
    actualizarVidas();
  }
}

function subirNivel() {
  if (nivel < 10) {
    nivel++;
    nivelLabel.textContent = `Nivel: ${nivel}`;
    ganarVida();
  }
}

function gameOver() {
  juegoTerminado = true;
  finalScore.textContent = `Puntaje final: ${puntaje}`;
  gameOverLabel.style.display = 'block';
}

// Movimiento de la nave
gameArea.addEventListener('mousemove', (e) => {
  playerX = e.clientX - player.offsetWidth / 2;
  playerY = e.clientY - player.offsetHeight / 2;
  player.style.left = `${playerX}px`;
  player.style.top = `${playerY}px`;
});

// Disparo del jugador con mouse
gameArea.addEventListener('click', () => {
  if (juegoTerminado) return;
  shootLaser(playerX + player.offsetWidth / 2, playerY);
});

// Disparo del jugador con barra espaciadora
document.addEventListener('keydown', (event) => {
  if (juegoTerminado) return;
  if (event.code === 'Space') {
    shootLaser(playerX + player.offsetWidth / 2, playerY);
  }
});

function shootLaser(x, y) {
  const laser = document.createElement('div');
  laser.classList.add('laser');
  laser.style.left = `${x - 2}px`;
  laser.style.top = `${y}px`;
  gameArea.appendChild(laser);

  const interval = setInterval(() => {
    if (juegoTerminado) {
      laser.remove();
      clearInterval(interval);
      return;
    }

    const top = parseInt(laser.style.top);
    if (top < -20) {
      laser.remove();
      clearInterval(interval);
    } else {
      laser.style.top = `${top - 10}px`;
      checkLaserHit(laser, interval);
    }
  }, 30);
}

function spawnEnemy() {
  if (juegoTerminado) return;

  const enemy = document.createElement('div');
  enemy.classList.add('enemy');
  enemy.style.left = `${Math.random() * (window.innerWidth - 50)}px`;

  const enemyImg = document.createElement('img');
  enemyImg.src = 'enemy.png';
  enemy.appendChild(enemyImg);
  gameArea.appendChild(enemy);

  let y = -50;
  const moveInterval = setInterval(() => {
    if (juegoTerminado) {
      enemy.remove();
      clearInterval(moveInterval);
      return;
    }

    y += 2 + nivel * 0.3;
    enemy.style.top = `${y}px`;

    if (y > window.innerHeight) {
      enemy.remove();
      clearInterval(moveInterval);
    }

    if (checkCollision(enemy, player)) {
      enemy.remove();
      clearInterval(moveInterval);
      perderVida();
    }
  }, 30);

  setTimeout(() => enemyShoot(enemy), 1000);
}

function enemyShoot(enemy) {
  if (!document.body.contains(enemy) || juegoTerminado) return;

  const rect = enemy.getBoundingClientRect();
  const laser = document.createElement('div');
  laser.classList.add('enemy-laser');
  laser.style.left = `${rect.left + 25}px`;
  laser.style.top = `${rect.bottom}px`;
  laser.style.background = 'lime';
  gameArea.appendChild(laser);

  const interval = setInterval(() => {
    if (juegoTerminado) {
      laser.remove();
      clearInterval(interval);
      return;
    }

    const top = parseInt(laser.style.top);
    if (top > window.innerHeight) {
      laser.remove();
      clearInterval(interval);
    } else {
      laser.style.top = `${top + 5}px`;

      if (checkCollision(laser, player)) {
        laser.remove();
        clearInterval(interval);
        perderVida();
      }
    }
  }, 30);
}

function checkLaserHit(laser, interval) {
  const enemies = document.querySelectorAll('.enemy');
  enemies.forEach(enemy => {
    if (checkCollision(laser, enemy)) {
      laser.remove();
      enemy.remove();
      clearInterval(interval);

      enemigosDestruidos++;
      puntaje += 10;
      actualizarPuntaje();

      if (enemigosDestruidos % 20 === 0) subirNivel();
      if (enemigosDestruidos % 100 === 0) ganarVida();
    }
  });
}

function checkCollision(a, b) {
  const r1 = a.getBoundingClientRect();
  const r2 = b.getBoundingClientRect();
  return !(
    r1.bottom < r2.top ||
    r1.top > r2.bottom ||
    r1.right < r2.left ||
    r1.left > r2.right
  );
}

// Inicio del juego
actualizarVidas();
actualizarPuntaje();
setInterval(spawnEnemy, 1500);
