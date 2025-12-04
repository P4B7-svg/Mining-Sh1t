// Menu dan tombol
const menu = document.getElementById('menu');
const gameDiv = document.getElementById('game');
const shopDiv = document.getElementById('shop');
const playBtn = document.getElementById('play-btn');
const shopBtn = document.getElementById('shop-btn');
const backBtn = document.getElementById('back-btn');
const shopBackBtn = document.getElementById('shop-back-btn');
const bgMusic = document.getElementById('bg-music');

playBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
  gameDiv.classList.remove('hidden');
  bgMusic.play();
  startGame();
});

shopBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
  shopDiv.classList.remove('hidden');
});

backBtn.addEventListener('click', () => {
  gameDiv.classList.add('hidden');
  menu.classList.remove('hidden');
  bgMusic.pause();
});

shopBackBtn.addEventListener('click', () => {
  shopDiv.classList.add('hidden');
  menu.classList.remove('hidden');
});

// Game canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Karakter
const player = {
  x: 100,
  y: 300,
  width: 50,
  height: 50,
  color: 'green',
  speed: 5
};

// Key handling
const keys = {};
document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

function startGame() {
  requestAnimationFrame(gameLoop);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

function update() {
  if(keys['ArrowLeft']) player.x -= player.speed;
  if(keys['ArrowRight']) player.x += player.speed;
  if(keys['ArrowUp']) player.y -= player.speed;
  if(keys['ArrowDown']) player.y += player.speed;
}

function draw() {
  // Draw world (salju kotak-kotak)
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#b0e0e6';
  for(let x=0; x<canvas.width; x+=50) {
    for(let y=0; y<canvas.height; y+=50) {
      ctx.strokeRect(x, y, 50, 50);
    }
  }

  // Draw player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Draw pickaxe (sederhana)
  ctx.strokeStyle = 'brown';
  ctx.beginPath();
  ctx.moveTo(player.x + 45, player.y + 20);
  ctx.lineTo(player.x + 70, player.y);
  ctx.stroke();
}
